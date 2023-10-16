"use client";
import React from "react";
import Modal from "./modal/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "@/app/atoms/modalAtom";

function ModalData() {
  const showModal = useRecoilValue(modalState);

  return <div>{showModal && <Modal />}</div>;
}

export default ModalData;
