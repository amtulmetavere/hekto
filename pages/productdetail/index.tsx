import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import Image, { StaticImageData } from "next/image";
import sofa1 from "../../public/sofa.jpg";
import sofa2 from "../../public/sofa1.jpg";
import sofa3 from "../../public/sofa2.jpg";
import {useRouter} from 'next/navigation'

const Productdetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(sofa1);

  const images = [sofa1, sofa2, sofa3];
  const slides = [
    {
      name: "Sofa",
      
      image: sofa1,
      price:8500,
    },
    {
      name: "Table",
   
      image: sofa3,
      price:5000,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div>
    <Navbar />
    <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Product Detail</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Sofa</span>
          </p>
        </div>
      </div>
    <div className="container mx-auto p-4">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
   
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 justify-items-center w-[100%]">
      {/* Render selected image */}
      {selectedImage && (
        <Image
        src={selectedImage}
          alt="Selected Chair"
          width={500}
          height={500}
        />
      )}
    </div>
    <div className="flex space-x-4">
      {/* Render thumbnails */}
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(image)}
          className={`border-2 rounded-md p-1 ${
            selectedImage === image ? "border-blue-500" : "border-transparent"
          }`}
        >
          <Image src={image} alt={`Chair ${index + 1}`} width={50} height={50} />
        </button>
      ))}
    </div>
    </div>
  
    
   
          {/* Product Info Section */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-lg md:text-2xl font-semibold text-[#0D134E]">
              Ocean Breeze Sofa
            </h1>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-[#151875] font-semibold">(22)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base line-through text-[#FB2E86] font-semibold">
                $35.00
              </span>
              <span className="text-base md:text-lg text-[#151875] font-semibold">
                $32.00
              </span>
            </div>
            <div className="flex items-center gap-2">
            <h2 className="font-semibold mb-2 text-[#0D134E]">Quantity</h2>
            <input
            className="w-16 px-2 py-1 border rounded-md text-black text-xs sm:text-sm"
            min="1"
            type="number"
            placeholder="1"
          /> </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold mb-2 text-[#0D134E]">Fabric Color</h2>
              <div className="flex flex-row">
                <iframe className="bg-gray-500 w-5 h-5 m-2"/>
                <iframe className="bg-blue-500 w-5 h-5 m-2"/>
                <iframe className="bg-slate-200 w-5 h-5 m-2"/>
                <iframe className="bg-black w-5 h-5 m-2"/>
                <iframe className="bg-pink-500 w-5 h-5 m-2"/>
          
              </div>
            </div>
            <div className="flex items-center gap-2 w-30">
            <p className="text-sm md:text-base text-[#A9ACC6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur aliquam atque quisquam! Necessitatibus quod nostrum dolore animi aliquid distinctio modi! Accusantium iste modi, fuga porro maxime quaerat quo ducimus, hic.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-base md:text-lg font-semibold text-[#151875] bg-blue-500 px-4 py-2 rounded-md text-white"  onClick={()=>router.push("/cart")}>
                Add To Cart
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart text-lg md:text-2xl text-[#151875] cursor-pointer active:text-red-600"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
          </div>
          </div>
          </div>
           <section className="py-12 px-4 md:py-20">
                  <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Products</h2>
                    <div className="relative">
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500"
                          style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                          }}
                        >
                          {slides.map((slide, index) => (
                            <div key={index} className="min-w-full">
                              <div className="rounded-xl border bg-card text-card-foreground">
                                <div className="flex flex-col items-center p-6 text-[#8A8FB9]">
                                  <Image
                                    alt={`${slide.name} profile`}
                                    src={slide.image}
                                    width={200}
                                    height={200}
                                    className="bg-center"
                                  />
                                  <h3 className="text-xl font-semibold mb-1">{slide.name}</h3>
                                  
                                  <p className="text-center">{slide.price}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                     
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900"
                  aria-label="Previous"
                >
                  &#60;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-gray-900"
                  aria-label="Next"
                >
                  &#62;
                </button>
                     
                    </div>
                  </div>
                </section>
      <Footer />
    </div>
  );
};

export default Productdetail;

   
    
    {/* <div className="flex-1 relative aspect-square">
      <Image alt="Product main image" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" width={100} height={100} src={chair3}  style={{position: 'absolute', height: '100%' ,width: '100%', inset:' 0px', color: 'transparent'}}/>
    </div>
    <div className="space-y-4 md:space-y-6 md:ml-[80px] lg:ml-[80px] w-[15rem]">
    <div>
      <h1 className="text-lg md:text-2xl mb-2 text-[#0D134E] font-semibold">Playwood arm chair</h1>
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
        
        <span className="text-sm text-[#151875] font-semibold">(22)</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm md:text-base line-through text-[#FB2E86] font-semibold">$35.00</span>
      <span className="text-base md:text-lg text-[#151875] font-semibold">$32.00</span>
    </div>
    <div className="flex flex-col items-start gap-2">
        <h2 className="font-semibold mb-2 text-[#0D134E] ">Color</h2>
        <p className="text-sm md:text-base  w-full md:w-[350px] text-[#A9ACC6] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
        </div>
        <div className="flex items-center gap-4">
            <h1 className="text-base md:text-lg font-semibold text-[#151875] cursor-pointer">Add To Cart</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-lg md:text-2xl text-[#151875] cursor-pointer active:text-red-600">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                </path>
</svg>
</div>
<div className="space-y-4 pt-4">
<div>
<h2 className=" mb-2 text-[#151875] font-semibold">Categories:</h2>
<div className="text-sm md:text-base  text-[#151875]">Furniture</div>
</div>
<div>
<h2 className="font-medium mb-2 text-[#151875]">Tags:</h2>
<div className="text-sm md:text-base text-muted-foreground text-[#151875]">Modern, Chair</div>
</div>
<div>
<h2 className="font-medium mb-2 text-[#151875]">Share:</h2>
<div className="flex items-center gap-2">
<div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#151875] flex items-center justify-center">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-white text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
</path>
</svg>
</div>
<div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#FB2E86] flex items-center justify-center">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-white text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
</path>
</svg>
</div>
<div className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-[#151875] flex items-center justify-center">
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
</path>
</svg>
</div>
</div>
</div>
</div>
  </div>
 
  </div>
 
  
</div>





     <Footer />
     </div>
  )
}

export default Productdetail */}