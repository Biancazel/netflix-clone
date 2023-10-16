"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

function PlansSignOutBtn() {
  const { logout } = useAuth();

  return (
    <button className="text-lg font-medium hover:underline" onClick={logout}>
      Sign Out
    </button>
  );
}

export default PlansSignOutBtn;
