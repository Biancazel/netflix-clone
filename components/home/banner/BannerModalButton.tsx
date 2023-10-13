"use client";
import { modalState, movieState } from "@/app/atoms/modalAtom";
import { Movie } from "@/typings";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie | null;
}

function BannerModalButton({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div>
      <button
        className="bannerButton bg-[gray]/70"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      >
        More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
      </button>
    </div>
  );
}

export default BannerModalButton;
