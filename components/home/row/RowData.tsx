"use client";
import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Thumbnail from "./Thumbnail";
import { Movie } from "@/typings";

interface Props {
  title: string;
  // movie: Movie | DocumentData
  movies: Movie[];
}

function RowData({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction == "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
      <ChevronLeftIcon
        className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
          !isMoved && "hidden"
        }`}
        onClick={() => handleClick("left")}
      />

      <div
        ref={rowRef}
        className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
      >
        {movies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>

      <ChevronRightIcon
        className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 
        cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default RowData;
