// src/app.d.ts
/// <reference types="lucia" />
declare global {
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type DatabaseUserAttributes = {};
    type DatabaseSessionAttributes = {};
  }
  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest;
    }
  }
}

export { };
