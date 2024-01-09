-- CreateEnum
CREATE TYPE "Force" AS ENUM ('static', 'push', 'pull');

-- CreateEnum
CREATE TYPE "Equipment" AS ENUM ('body_only', 'other', 'dumbbell', 'barbell', 'cable', 'kettlebells', 'bands', 'medicine_ball', 'exercise_ball', 'machine', 'ez_curl_bar', 'foam_roll');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('strength', 'stretching', 'plyometrics', 'strongman', 'powerlifting', 'cardio', 'olympic_weightlifting');

-- CreateEnum
CREATE TYPE "Mechanic" AS ENUM ('compound', 'isolation');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('beginner', 'intermediate', 'expert');

-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "mechanic" "Mechanic",
    "equipment" "Equipment",
    "force" "Force",
    "category" "Category" NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instruction" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Instruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrimaryMuscle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PrimaryMuscle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercisePrimaryMuscle" (
    "exerciseId" INTEGER NOT NULL,
    "primaryMuscleId" INTEGER NOT NULL,

    CONSTRAINT "ExercisePrimaryMuscle_pkey" PRIMARY KEY ("exerciseId","primaryMuscleId")
);

-- CreateTable
CREATE TABLE "SecondaryMuscle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SecondaryMuscle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseSecondaryMuscle" (
    "exerciseId" INTEGER NOT NULL,
    "secondaryMuscleId" INTEGER NOT NULL,

    CONSTRAINT "ExerciseSecondaryMuscle_pkey" PRIMARY KEY ("exerciseId","secondaryMuscleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrimaryMuscle_name_key" ON "PrimaryMuscle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ExercisePrimaryMuscle_exerciseId_key" ON "ExercisePrimaryMuscle"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "SecondaryMuscle_name_key" ON "SecondaryMuscle"("name");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instruction" ADD CONSTRAINT "Instruction_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisePrimaryMuscle" ADD CONSTRAINT "ExercisePrimaryMuscle_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisePrimaryMuscle" ADD CONSTRAINT "ExercisePrimaryMuscle_primaryMuscleId_fkey" FOREIGN KEY ("primaryMuscleId") REFERENCES "PrimaryMuscle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSecondaryMuscle" ADD CONSTRAINT "ExerciseSecondaryMuscle_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSecondaryMuscle" ADD CONSTRAINT "ExerciseSecondaryMuscle_secondaryMuscleId_fkey" FOREIGN KEY ("secondaryMuscleId") REFERENCES "SecondaryMuscle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
