import { supabase } from "@/lib/supabase/client";
import { LoginFormInput, RegisterFormInput } from "../types/authTypes";

export const authService = {
  async signUpNewUser(data: RegisterFormInput) {
    const { fullName, email, password } = data;

    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
        },
      },
    });

    if (error) throw new Error(error.message);

    return user;
  },

  async signInWithEmail(data: LoginFormInput) {
    const { email, password } = data;

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    return user;
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);

    return data.session;
  },

  async signOutSession() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);
  },
};
