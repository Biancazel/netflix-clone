"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <img
      onClick={logout}
      src="https://rb.gy/g1pwyx"
      alt="profile-icon"
      className="cursor-pointer rounded"
    />
  );
}

export default LogoutButton;
