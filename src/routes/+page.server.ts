import { redirect } from "@sveltejs/kit"
import { dbReadOnly } from '$lib/db/database';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, '/login');
  // if (!session.user.emailVerified) {
  //   throw redirect(302, '/email-verification');
  // }
  return {
    userId: session.user.userId,
    email: session.user.email
  }
}

const logout = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) return fail(401);
  await auth.invalidateSession(session.sessionId);
  locals.auth.setSession(null);
  throw redirect(302, '/login');
}

export const actions: Actions = { logout: logout }
