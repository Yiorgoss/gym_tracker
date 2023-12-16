import fs from 'fs';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const json = JSON.parse(fs.readFileSync('./prisma/exercises.nd.json', 'utf8'));

  resetSeed(['Exercise', 'Image', 'Instruction']);
  // seedMuscles();
  Promise.all(json.map((x) => seedExercise(x)))
    .then(() => console.info('[SEED] Successfully seeded'))
    .catch((e) => console.error('[SEED] Failed to seed exercises', e));
}
async function resetSeed(tableNames) {
  for (const tableName of tableNames)
    await prisma.$queryRawUnsafe(`Truncate "${tableName}" restart identity cascade;`);
}

async function seedExercise(item) {
  const exercise = await prisma.exercise.create({
    data: {
      name: item.name,
      force: typeof item.force == 'object' ? item.force : item.force.replaceAll(' ', '_'),
      level: typeof item.level == 'object' ? item.level : item.level.replaceAll(' ', '_'),
      mechanic:
        typeof item.mechanic == 'object' ? item.mechanic : item.mechanic.replaceAll(' ', '_'),
      equipment:
        typeof item.equipment == 'object'
          ? item.equipment
          : item.equipment.replaceAll('-', '').replaceAll(' ', '_'),
      category:
        typeof item.category == 'object' ? item.category : item.category.replaceAll(' ', '_'),
      instructions: {
        create: item.instructions.map((x) => ({
          text: x
        }))
      },
      images: {
        create: item.images.map((x) => ({
          url: x
        }))
      }
    }
  });
  Promise.all(
    item.primaryMuscles.map((x) =>
      prisma.primaryMuscle.update({
        where: { name: x },
        data: { exercise: { connect: { exerciseId: exercise.id } } }
      })
    )
  );
  // const exercisePrimaryMuscles = await prisma.exercise.update({
  //   where: {
  //     id: exercise.id,
  //   },
  //   data: {
  //     primaryMuscles:
  //   }
  // })
  // primaryMuscles: item.primaryMuscles.map((x) => ({ name: x }))
  // secondaryMuscles: {
  //   connect: item.secondaryMuscles.map((x) => ({
  //     name: x
  //   }))
  // },
}

async function seedMuscles() {
  const primaryMuscles = [
    'abdominals',
    'hamstrings',
    'adductors',
    'quadriceps',
    'biceps',
    'shoulders',
    'chest',
    'middle back',
    'calves',
    'glutes',
    'lower back',
    'lats',
    'triceps',
    'traps',
    'forearms',
    'neck',
    'abductors'
  ];
  const secondaryMuscles = [
    'calves',
    'shoulders',
    'glutes',
    'hamstrings',
    'quadriceps',
    'forearms',
    'abductors',
    'adductors',
    'biceps',
    'lower back',
    'traps',
    'lats',
    'chest',
    'middle back',
    'neck'
  ];

  Promise.all(primaryMuscles.map((x) => prisma.primaryMuscle.create({ data: { name: x } })))
    .then(() => console.info('[SEED] Succussfully created primary muscles'))
    .catch((e) => console.error('[SEED] Failed to create primary muscles', e));

  Promise.all(secondaryMuscles.map((x) => prisma.secondaryMuscle.create({ data: { name: x } })))
    .then(() => console.info('[SEED] Succussfully created secondary muscles'))
    .catch((e) => console.error('[SEED] Failed to create secondary muscles', e));
}

function printUnique(json) {
  // const force = [...new Set(json.map((x) => x.force))];
  // const level = [...new Set(json.map((x) => x.level))];
  // const category = [...new Set(json.map((x) => x.category))];
  // const mechanic = [...new Set(json.map((x) => x.mechanic))];
  // const equipment = [...new Set(json.map((x) => x.equipment))];
  console.log([...new Set(json.map((x) => x.primaryMuscles).flat(Infinity))]);
  console.log([...new Set(json.map((x) => x.secondaryMuscles).flat(Infinity))]);

  // console.log('force {}', force);
  // console.log('level {}', level);
  // console.log('category {}', category);
  // console.log('mechanic {}', mechanic);
  // console.log('equipment {}', equipment);
}
main();
