// src/actions/auth.ts
import api from '@/config/axios/api';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
// Importa nuestras nuevas funciones de ayuda
import { saveSession, destroySession } from '@/lib/session';

export const auth = {
  login: defineAction({
    accept: 'form',
    input: z.object({
      username: z.string(),
      password: z.string().min(6),
    }),
    async handler(input, context) {
      try {
        const response = await api.post('token/', {
          username: input.username,
          password: input.password,
        });

        const { access, refresh, username, user_id } = response.data;

        // Usa la nueva función para guardar la sesión
        await saveSession(context.cookies, {
          accessToken: access,
          refreshToken: refresh,
          username,
          user_id
        });

        return { success: true, redirectUri: "/" };
      } catch (error) {
        throw new Error('Usuario o contraseña inválida');
      }
    },
  }),

  logout: defineAction({
    async handler(_, context) {
      destroySession(context.cookies);

      return { success: true, redirectUri: "/" };
    },
  }),
};