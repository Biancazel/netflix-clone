import { Movie } from "@/typings";
import RowData from "./RowData";

interface Props {
  title: string;
  // movie: Movie | DocumentData
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition 
      duration-200 hover:text-white md:text-2xl"
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <RowData title={title} movies={movies} />
      </div>
    </div>
  );
}

export default Row;
