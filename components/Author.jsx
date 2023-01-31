import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="right-0 -top-14 absolute left-0">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle object-cover"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  );
};

export default Author;
