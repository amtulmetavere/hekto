"use client"; // Marks this as a Client Component

import React from 'react';
import Image from 'next/image';  // Importing the Image component from Next.js
import Link from 'next/link';  // Importing Link from Next.js


interface LatestBlogProps {
  limit: number; // Define the type for the 'limit' prop
}

const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",  // Path relative to the public folder
    title: "Top Essential Trends in 2020",
    author: "Saber Ali",
    date: "21 August, 2020",
    description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
  },
  {
    id: 2,
    image: "/blog2.png",
    title: "Tech Innovations in 2021",
    author: "Jane Doe",
    date: "15 January, 2021",
    description: "Technology has evolved rapidly, especially with AI and blockchain being the leaders in transformation.",
  },
  {
    id: 3,
    image: "/blog3.png",
    title: "Sustainable Practices for 2022",
    author: "John Smith",
    date: "10 March, 2022",
    description: "The importance of sustainable practices in every industry is becoming more evident than ever.",
  },
  {
    id: 4,
    image: "/blog1.png",
    title: "Future of Remote Work",
    author: "Saber Ali",
    date: "5 June, 2023",
    description: "Remote work is here to stay, and it's reshaping how we think about offices and work-life balance.",
  },
  {
    id: 5,
    image: "/blog2.png",
    title: "Future of Remote Work",
    author: "Saber Ali",
    date: "5 June, 2023",
    description: "Remote work is here to stay, and it's reshaping how we think about offices and work-life balance.",
  },
  // Add more blog posts here if needed
];

const LatestBlog: React.FC<LatestBlogProps> = ({ limit }) => {
  const recentBlogs = blogPosts.slice(0, limit);

  return (
    <div className="w-full bg-white py-20">
      <h2 className="text-center text-[#151875] text-3xl font-bold mb-12">Latest Blog</h2>
      <div className="w-[90%] lg:w-[1177px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {recentBlogs.map((post) => (
          <div key={post.id} className="flex flex-col items-start p-6 bg-white shadow-md rounded-lg">
            <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
              <Image
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="rounded-md w-full h-full object-cover"
                src={post.image}  // Correct image path, no need to import
                layout="fill"  // Makes the image fill the container
                objectFit="cover"  // Ensures the image covers the area without stretching
              />
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <img alt="Pen" loading="lazy" width="20" height="20" src="https://img.icons8.com/stickers/50/pen.png" />
              <span className="text-[#151875] font-medium">{post.author}</span>
              <img alt="Calendar" loading="lazy" width="20" height="20" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Desk-Calender-stationery-goofy-flat-kerismaker.png" />
              <span className="text-[#151875] font-medium">{post.date}</span>
            </div>
            <h3 className="font-bold text-lg mt-4 text-[#151875]">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link href="/blog" passHref>
              <button className="underline text-sm font-medium mt-4 text-[#151875]">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
