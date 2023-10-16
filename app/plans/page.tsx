import PlansSignOutBtn from "@/components/plans/PlansSignOutBtn";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { DocumentData } from "firebase/firestore";
import PlansTable from "@/components/plans/PlansTable";

// export const metadata: Metadata = {
//   title: "Netflix",
//   description: "Generated by create next app",
//   icons: {
//     icon: "favicon.ico",
//   },
// };

interface Props {
  products: DocumentData[];
}

function Plans({ products }: Props) {
  return (
    <div>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <PlansSignOutBtn />
      </header>

      <main className="pt-28 mx-auto max-2-5xl px-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            Recommendations just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <PlansTable products={products} />
      </main>
    </div>
  );
}

export default Plans;
