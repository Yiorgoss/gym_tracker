import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { } from 'pg';

import { User } from '$lib/schema/user';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) throw redirect(302, "/");
  return {};
};

const signup: Action = async ({ request, locals }) => {
  const data = await request.formData();

  const parsedData = User.safeParse({
    email: data.get('email'),
    password: data.get('password')
  });

  if (!parsedData.success) {
    console.log(parsedData.error.flatten());
    return fail(400, { message: parsedData.error.flatten() });
  }

  const userData = parsedData.data;

  try {

    const key = await auth.useKey(
      "email",
      userData.email.toLowerCase(),
      userData.password
    );

    const session = await auth.createSession({
      userId: key.userId,
      attributes: {}
    });

    locals.auth.setSession(session);
  } catch (err) {
    console.log('ERROR: ', err);
    return fail(500, {
      message: 'An unknown error occurred'
    });
  }
  throw redirect(302, "/");
};


