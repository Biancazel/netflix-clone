"use client";
import useAuth from "@/hooks/useAuth";
import useSubscription from "@/hooks/useSubscription";
import { DocumentData } from "firebase/firestore";
import LogoutButton from "../home/header/LogoutButton";
import Membership from "./Membership";

interface Props {
  products: DocumentData[];
}

function AccountDetails({ products }: Props) {
  const { user } = useAuth();
  const subscription = useSubscription(user);

  return (
    <div>
      <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
        <h1 className="text-3xl md:text-4xl">Account</h1>
        <div className="-ml-0.5 flex items-center">
          <img src="https://rb.gy/4vfk4r" alt="" />
          <p className="text-xs font-semibold text-[#555]">
            Member since {subscription?.created.toDate().toString()}
          </p>
        </div>
      </div>

      <Membership />
      <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
        <h4 className="text-lg text-[gray]">Plan Details</h4>
        <div className="col-span-2 font-medium">
          {
            products.filter(
              (product) =>
                product.priceInfo.product === subscription?.product.id
            )[0]?.name
          }
        </div>
        <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
          Change plan
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
        <h4 className="text-lg text-[gray]">Settings</h4>
        <LogoutButton />
      </div>
    </div>
  );
}

export default AccountDetails;
