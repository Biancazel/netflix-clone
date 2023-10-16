"use client";
import React from "react";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Row from "./row/Row";
import ModalData from "./ModalData";
import { Movie } from "@/typings";
import { DocumentData } from "firebase/firestore";
import { Subscriptions } from "./Subscriptions";
import Plans from "@/app/plans/page";

interface Props {
  products: DocumentData[];
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  animationMovies: Movie[];
}

function HomePage({
  products,
  netflixOriginals,
  trendingNow,
  topRated,
  comedyMovies,
  actionMovies,
  horrorMovies,
  romanceMovies,
  animationMovies,
}: Props) {
  return (
    <div>
      {Subscriptions(products) ? (
        <Plans products={products} />
      ) : (
        <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
          <Header />
          <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
            <Banner netflixOriginals={netflixOriginals} />
            <section className="md:space-y-24">
              <Row title="Trending Now" movies={trendingNow} />
              <Row title="Top Rated" movies={topRated} />
              <Row title="Comedies" movies={comedyMovies} />

              <Row title="Action" movies={actionMovies} />
              <Row title="Scary Movies" movies={horrorMovies} />
              <Row title="Romance Movies" movies={romanceMovies} />
              <Row title="Animated Movies" movies={animationMovies} />
            </section>
          </main>
          <ModalData />
        </div>
      )}
    </div>
  );
}

export default HomePage;
