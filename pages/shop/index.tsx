"use client"
import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Brands from "../../public/image.png"; 
import Image from 'next/image'; // Import Image component from Next.js
import {useRouter} from 'next/navigation'




// Sample product data
const products = [
  {
    id: 1,
    name: 'Comfy Handy Craft',
    price: 4200,
    description: "Perfect for relaxing with its ergonomic design and padded cushions.",
    imageUrl: "/banner1.png", // Update path to static folder (public)
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    price: 7500,
    description: "A sleek and breathable office chair with adjustable features.",
    imageUrl: "/banner2.png", // Update path to static folder (public)
  },
  {
    id: 3,
    name: 'Contemporary Reclining Chair',
    price: 5550,
    description: "Unwind in style with a comfortable, adjustable reclining chair.",
    imageUrl: "/banner3.png", // Update path to static folder (public)
  },
  {
    id: 4,
    name: 'Comfy Handy Craft',
    price: 12050,
    description: "Add charm to your space with this cozy, wooden-legged accent chair.",
    imageUrl: "/chair4.png", // Update path to static folder (public)
  },
  {
    id: 5,
    name: 'Modern Wooden Chair',
    price: 25000,
    description: "Game in comfort with adjustable features and extra lumbar support.",
    imageUrl: "/chair5.png", // Update path to static folder (public)
  },
  {
    id: 6,
    name: 'Elegant Dining Chair Set',
    price: 1200,
    description: "A stylish and durable set of chairs to elevate your dining experience.",
    imageUrl: "/chair6.png", // Update path to static folder (public)
  },
];

const Shop: React.FC = () => {
    // State to hold the selected value
    const [sortOrder, setSortOrder] = useState<string>("");
  
    // Event handler with proper typing for TypeScript
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOrder(event.target.value); // Update state with the selected value
    };




   const router = useRouter();

  // Handle click event to navigate to the Cart page
  

  return (
    <div className="bg-[#F4F7FE]">
       <Navbar />

      {/* Banner Section */}
      <header className="relative w-full h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(../background.png)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="w-full bg-white p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-around lg:flex-row sm:flex-col justify-between items-center">
        <select
        className="p-2 border text-black border-gray-300 w-[80%] rounded-md"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="">Sort by Price</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
          <input type="text" placeholder="Search Products" className="p-2 border text-black border-gray-300 rounded-md" />
          <button className="bg-[#7e33e0] text-white p-2 rounded-md w-[80%]">Apply Filters</button>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-[250px] relative">
                {/* Use Image component for optimized image loading */}
                <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl text-[#151875]">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-[#151875]">{product.price}</span>
                  <button
                    className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"
                    // Attach the click handler
                    onClick={()=>router.push("/cart")}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )
          )
          }
        </div>
      </section>

      {/* Brand Logos Section */}
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            alt="Logos"
            src={Brands}// Update path to static folder (public)
            width={800}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
