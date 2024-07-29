"use client";

import { ProductTypes } from "@/lib/types";
import { CallAPI } from "@/server/server";
import Image from "next/image";
import { useState } from "react";

export const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
export const categories = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

import image from "@/public/image.jpg";

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [products, setProducts] = useState<ProductTypes[]>();

  const handleSubmit = async () => {
    if (
      selectedCategory.length === 0 ||
      selectedCompany.length === 0 ||
      maxValue < 1 ||
      maxValue <= minValue
    ) {
      alert("Erro");
    }

    const res = await CallAPI(
      selectedCategory,
      selectedCompany,
      minValue,
      maxValue
    );

    if (!res) return alert("An error occured");

    setProducts(res);
  };

  return (
    <main className="flex flex-col items-start w-full h-full flex-1 max-w-3xl mx-auto py-4 gap-4 px-2">
      <h1 className="md:text-4xl text-2xl font-bold w-full text-center">
        Products
      </h1>

      {/* Displaying all companies */}

      <div className="flex flex-col w-full gap-2">
        <h2 className="text-xl font-semibold">Company</h2>
        <ul className="flex flex-row flex-wrap w-full gap-2">
          {companies.map((company, i) => (
            <li key={i}>
              <button
                className={
                  "p-2 rounded transition-all text-sm " +
                  (selectedCompany === company
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 ")
                }
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Displaying all categories */}

      <div className="flex flex-col w-full gap-2">
        <h2 className="text-xl font-semibold">Categories</h2>
        <ul className="flex flex-row flex-wrap w-full gap-2">
          {categories.map((category, i) => (
            <li key={i}>
              <button
                className={
                  "p-2 rounded transition-all text-sm " +
                  (selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 ")
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Setting price */}

      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold">Min Value:</p>
          <input
            className="p-2 rounded bg-gray-100 w-full max-w-48"
            placeholder="Min Value"
            type="number"
            max={10000}
            onChange={(e) => setMinValue(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold">Max Value:</p>
          <input
            className="p-2 rounded bg-gray-100 w-full max-w-48"
            placeholder="Max Value"
            type="number"
            max={10000}
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
          />
        </div>
      </div>

      <button
        className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-500 transition-all"
        onClick={handleSubmit}
      >
        Search
      </button>
      {products && (
        <ul className="flex flex-col w-full gap-2">
          {products.map((product: ProductTypes, i) => (
            <li
              key={i}
              className="flex flex-row w-full p-2 rounded border-gray-300 border gap-2"
            >
              <Image src={image} alt="img" className="md:w-96 w-24 rounded" />
              <div className="flex flex-col w-full gap-2">
                <h2 className="font-medium text-xl">{product.productName}</h2>
                <p>Price: {product.price}</p>
                <p>Availability: {product.availability}</p>
                <p>Discount: {product.discount}</p>
                <p>Rating: {product.rating} / 5</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
