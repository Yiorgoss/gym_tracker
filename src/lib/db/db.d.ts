import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Example {
  createdAt: Generated<Timestamp>;
  id: string;
  text: string;
  updatedAt: Timestamp;
}

export interface Exercise {
  category: "cardio" | "olympic_weightlifting" | "plyometrics" | "powerlifting" | "strength" | "stretching" | "strongman";
  equipment: "bands" | "barbell" | "body_only" | "cable" | "dumbbell" | "exercise_ball" | "ez_curl_bar" | "foam_roll" | "kettlebells" | "machine" | "medicine_ball" | "other" | null;
  force: "pull" | "push" | "static" | null;
  id: Generated<number>;
  level: "beginner" | "expert" | "intermediate";
  mechanic: "compound" | "isolation" | null;
  name: string;
}

export interface ExercisePrimaryMuscle {
  exerciseId: number;
  primaryMuscleId: number;
}

export interface ExerciseSecondaryMuscle {
  exerciseId: number;
  secondaryMuscleId: number;
}

export interface Image {
  exerciseId: number;
  id: Generated<number>;
  url: string;
}

export interface Instruction {
  exerciseId: number;
  id: Generated<number>;
  text: string;
}

export interface PrimaryMuscle {
  id: Generated<number>;
  name: string;
}

export interface SecondaryMuscle {
  id: Generated<number>;
  name: string;
}

export interface DB {
  Example: Example;
  Exercise: Exercise;
  ExercisePrimaryMuscle: ExercisePrimaryMuscle;
  ExerciseSecondaryMuscle: ExerciseSecondaryMuscle;
  Image: Image;
  Instruction: Instruction;
  PrimaryMuscle: PrimaryMuscle;
  SecondaryMuscle: SecondaryMuscle;
}
