import AccountDetails from "@/components/account/AccountDetails";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";

export default async function Account() {
  const q = query(collection(db, "products"), where("active", "==", true));

  const querySnapshot = await getDocs(q);

  const productPromises = querySnapshot.docs.map(async (productDoc) => {
    let productInfo = productDoc.data();

    const pricesCollection = collection(productDoc.ref, "prices");
    const priceQuerySnapshot = await getDocs(pricesCollection);

    const priceDoc = priceQuerySnapshot.docs[0];
    productInfo["priceId"] = priceDoc?.id;
    productInfo["priceInfo"] = priceDoc?.data();

    return productInfo;
  });

  const products = await Promise.all(productPromises);

  return (
    <div>
      <header className="bg-[%141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
            alt="netflix-header"
          />
        </Link>

        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            className="cursor-pointer rounded"
            alt="netflix-account"
          />
        </Link>
      </header>

      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <AccountDetails products={products} />
      </main>
    </div>
  );
}
