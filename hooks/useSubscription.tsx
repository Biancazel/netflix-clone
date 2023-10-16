"use client";

import app, { db } from "@/firebase";
import { User } from "firebase/auth";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<DocumentData>();

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "customers", user.uid, "subscriptions"),
      where("status", "in", ["trialing", "active"])
    );

    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
      }

      setSubscription(querySnapshot.docs[0].data());
    };

    fetchData().catch(console.error);
  }, [user]);

  return subscription;
}

export default useSubscription;
