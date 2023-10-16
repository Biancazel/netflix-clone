"use client";
import useAuth from "@/hooks/useAuth";
import useSubscription from "@/hooks/useSubscription";
import { DocumentData } from "firebase/firestore";

export function Subscriptions(products: DocumentData[]) {
  const { loading, user } = useAuth();
  const subscription = useSubscription(user);

  if (subscription === null) return null;

  if (!subscription) {
    return true;
  }
  return false;
}
