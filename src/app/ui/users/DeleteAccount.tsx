"use client";

import { useRouter } from "next/navigation";

export default function DeleteAccount() {
  const router = useRouter();
  async function deleteAccount() {
    const response = await fetch("/api/users/deleteaccount", {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.success) {
      router.push("/login");
    } else {
      alert(
        "seems that there was an error in account deletion, please try again!",
      );
    }
  }
  function handleClick() {
    const confirmed = confirm(
      "are you sure you want to delete your account? all your scores will be lost forever!",
    );
    if (confirmed) {
      deleteAccount();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="m-5 text-sm md:text-lg px-3 py-1 bg-orange-400 border-1 rounded-xl cursor-pointer"
    >
      delete account
    </button>
  );
}
