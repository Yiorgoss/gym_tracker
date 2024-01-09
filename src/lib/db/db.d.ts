import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface _PrismaMigrations {
  applied_steps_count: Generated<number>;
  checksum: string;
  finished_at: Timestamp | null;
  id: string;
  logs: string | null;
  migration_name: string;
  rolled_back_at: Timestamp | null;
  started_at: Generated<Timestamp>;
}

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

export interface Key {
  hashed_password: string | null;
  id: string;
  user_id: string;
}

export interface PrimaryMuscle {
  id: Generated<number>;
  name: string;
}

export interface SecondaryMuscle {
  id: Generated<number>;
  name: string;
}

export interface Session {
  active_expires: Int8;
  id: string;
  idle_expires: Int8;
  user_id: string;
}

export interface User {
  email: string;
  email_verified: boolean;
  id: string;
}

export interface DB {
  _prisma_migrations: _PrismaMigrations;
  Example: Example;
  Exercise: Exercise;
  ExercisePrimaryMuscle: ExercisePrimaryMuscle;
  ExerciseSecondaryMuscle: ExerciseSecondaryMuscle;
  Image: Image;
  Instruction: Instruction;
  Key: Key;
  PrimaryMuscle: PrimaryMuscle;
  SecondaryMuscle: SecondaryMuscle;
  Session: Session;
  User: User;
}
