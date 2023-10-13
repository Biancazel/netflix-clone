import { Movie } from "@/typings";
import BannerData from "./BannerData";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <BannerData netflixOriginals={netflixOriginals} />
    </div>
  );
}

export default Banner;
