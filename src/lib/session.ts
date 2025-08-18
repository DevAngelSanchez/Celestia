// src/lib/session.ts
import { sealData, unsealData } from 'iron-session';
import type { AstroCookies } from 'astro';

// Define la forma de nuestros datos de sesión
export interface SessionData {
  accessToken?: string;
  refreshToken?: string;
  username?: string;
  user_id?: number;
}

const sessionPassword = import.meta.env.ASTRO_SESSION_SECRET;

if (!sessionPassword || sessionPassword.length < 32) {
  throw new Error('ASTRO_SESSION_SECRET debe tener al menos 32 caracteres');
}

const cookieOptions = {
  secure: import.meta.env.PROD,
  httpOnly: true,
  path: '/',
};
const cookieName = 'auth_session';

// Función para obtener los datos de la sesión desde la cookie
export async function getSessionData(cookies: AstroCookies): Promise<SessionData> {
  const seal = cookies.get(cookieName)?.value;

  if (!seal) {
    return {}; // No hay sesión, devuelve un objeto vacío
  }

  // Desencripta el contenido de la cookie para obtener los datos
  return await unsealData<SessionData>(seal, { password: sessionPassword });
}

// Función para guardar los datos de la sesión en una cookie
export async function saveSession(cookies: AstroCookies, data: SessionData) {
  // Encripta los datos para crear el "sello"
  const seal = await sealData(data, { password: sessionPassword });

  // Guarda el sello en la cookie
  cookies.set(cookieName, seal, cookieOptions);
}

// Función para destruir la sesión (borrar la cookie)
export function destroySession(cookies: AstroCookies) {
  cookies.delete(cookieName, cookieOptions);
}