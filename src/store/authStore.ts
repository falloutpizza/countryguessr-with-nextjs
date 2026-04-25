import { create } from "zustand";

type AuthState = {
  user: null | {
    id: string;
    username: string;
    ogHs: number;
    hardHs: number;
    compHs: number;
    compRank: string;
    iat: number;
    exp: number;
  };
  setUser: (user: AuthState["user"]) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
