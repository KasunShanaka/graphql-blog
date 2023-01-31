import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((cat, index) => (
        <Link key={index} href={`/category/${cat.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
