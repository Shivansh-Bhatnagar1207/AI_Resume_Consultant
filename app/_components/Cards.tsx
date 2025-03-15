import Link from "next/link";
import React from "react";

type Card = {
  bg: string;
  title: string;
  desc: string;
  route: string;
};
export default function Cards({ bg, title, desc, route }: Card) {
  return (
    <div
      className={`card ${bg} w-72 lg:w-96 shadow-lg rounded-xl transition-transform duration-300 ease-in-out lg:h-48 mx-auto`}
    >
      <div className="card-body text-white">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-xl">{desc}</p>
        <div className="card-actions justify-end">
          <Link href={`${route}`} className="btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
