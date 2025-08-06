// src/actions/index.ts

import api from "@/config/axios/api";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

// Correct way to define actions
export const auth = {
  login: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6).max(100),
    }),
    async handler(input, context) {

      const { email, password } = input;

      const response = await api.post("token/", {
        email,
        password,
      });
      const data = await response.data;
      console.log("data: ", data);

    },
  }),
}