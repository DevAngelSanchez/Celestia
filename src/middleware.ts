// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { getSessionData } from '@/lib/session';

const protectedRoutes = ['/user-profile', '/dashboard'];
const guestRoutes = ['/login', '/register', "/", "/products/*"];

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSessionData(context.cookies);

  const accessToken = session.accessToken;

  context.locals.isLoggedIn = !!accessToken;
  context.locals.accessToken = accessToken;
  context.locals.username = session.username;
  context.locals.user_id = session.user_id;

  const currentPath = context.url.pathname;

  if (protectedRoutes.includes(currentPath) && !context.locals.isLoggedIn) {
    return context.redirect('/login');
  }

  // if (guestRoutes.includes(currentPath) && context.locals.isLoggedIn) {
  //   return context.redirect('/user-profile');
  // }

  return next();
});