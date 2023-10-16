"use client";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import Table from "./Table";
import Loader from "./Loader";
import useAuth from "@/hooks/useAuth";
import app from "@/firebase";
import { getCheckoutUrl } from "@/lib/stripe";

interface Props {
  products: DocumentData[];
}

function PlansTable({ products }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<DocumentData | null>(
    products[2]
  );

  const [isBillingLoading, setBillingLoading] = useState(false);
  const { logout, user } = useAuth();

  const subscribeToPlan = async () => {
    if (!user) return;

    const checkoutUrl = await getCheckoutUrl(app, selectedPlan?.priceId);
    window.location.assign(checkoutUrl);
    setBillingLoading(true);
  };

  return (
    <div className="mt-4 flex flex-col space-y-4">
      <div className="flex w-full items-center justify-center self-end md:w-3/5">
        {products.map((product) => (
          <div
            key={product.name}
            className={`planBox ${
              selectedPlan?.name === product.name ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => setSelectedPlan(product)}
          >
            {product.name}
          </div>
        ))}
      </div>
      <Table products={products} selectedPlan={selectedPlan} />
      <button
        disabled={!selectedPlan || isBillingLoading}
        className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
          isBillingLoading && "opacity-60"
        }`}
        onClick={subscribeToPlan}
      >
        {isBillingLoading ? <Loader color="dark:fill-gray-300" /> : "Subscribe"}
      </button>
    </div>
  );
}

export default PlansTable;
