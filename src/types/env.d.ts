/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    accessToken?: string | null;
    username?: string | null;
    user_id?: number;
  }
}