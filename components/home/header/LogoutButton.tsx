"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <p
      className="col-span-3 cursor-pointer text-blue-500 hover:underline"
      onClick={logout}
    >
      Sign out of all devices
    </p>
  );
}

export default LogoutButton;
