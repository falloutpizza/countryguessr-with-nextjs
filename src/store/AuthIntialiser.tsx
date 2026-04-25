"use client";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export default function AuthInitializer({ user }: { user: any }) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    setUser(user ? user : null);
  }, []);

  return null;
}
