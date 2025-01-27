import React, { useState } from "react";
import back from "../image/back.png"; // Replace with your actual image path
import img1 from "../image/img1.svg"; // First additional image
import img2 from "../image/img2.svg"; // Second additional image
import img3 from "../image/img3.svg"; // Third additional image

const Packaging = () => {
  const [selectedCategory, setSelectedCategory] = useState("Carton Box");
  const [mainImage, setMainImage] = useState(img1); // State for main product image

  const categories = ["Carton Box", "Empty Bottle & Caps"];

  const sections = {
    "Carton Box": {
      title: "Carton Box",
      description:
        "Carton boxes are essential packaging solutions used across various industries for shipping, storing, and protecting products. Made from durable and eco-friendly materials, carton boxes provide strength and flexibility, ensuring that goods are securely packed and transported.",
      productTitle: "High-Quality Carton Box",
      productPrice: "INR 50 / Piece",
      productDetails: [
        "Minimum Order Quantity: 100 Pieces",
        "Material: Cardboard",
        "Available Sizes: Customizable",
      ],
      productDescription:
        "Our carton boxes are designed to provide excellent durability and flexibility for various industrial needs. They are eco-friendly and made from high-quality materials.",
      images: [img1, img2, img3],
    },
    "Empty Bottle & Caps": {
      title: "Empty Bottle & Caps",
      description:
        "Empty bottles and caps are essential components in the packaging industry, offering versatile storage solutions for liquids such as oils, beverages, and chemicals.",
      productTitle: "Plastic Bottles with Caps",
      productPrice: "INR 50 / Piece",
      productDetails: [
        "Minimum Order Quantity: 100 Pieces",
        "Material: Plastic",
        "Available Sizes: 250ml - 1L",
      ],
      productDescription:
        "Our plastic bottles with caps are designed for durability and leak-proof performance. Suitable for storing liquids like oils or beverages, they ensure secure transportation and storage.",
      images: [img2, img3, img1],
    },
  };

  const currentSection = sections[selectedCategory];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1 className="text-white text-4xl font-bold">PACKAGING</h1>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-4">
            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`p-3 rounded-md cursor-pointer text-center font-medium ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-100"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setMainImage(sections[category].images[0]); // Reset main image when category changes
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 bg-white shadow-md rounded-md p-6">
            {/* Section Title */}
            <h2 className="text-2xl font-bold mb-4">{currentSection.title}</h2>
            <p className="text-gray-700 mb-6">{currentSection.description}</p>

            {/* Product Section */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Main Product Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={mainImage}
                  alt={currentSection.productTitle}
                  className="rounded-md shadow-md w-full"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-blue-500 mb-2">
                  {currentSection.productTitle}
                </h3>
                <p className="text-gray-700 mb-4">
                  Product Price:{" "}
                  <span className="font-bold text-black">
                    {currentSection.productPrice}
                  </span>
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Download Product Brochure
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                    Send Enquiry
                  </button>
                </div>

                {/* Product Details Table */}
                <h4 className="text-lg font-bold mb-2">Product Details</h4>
                <ul className="text-gray-700 space-y-1 mb-6">
                  {currentSection.productDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                {/* Product Description */}
                <p className="text-gray-700">{currentSection.productDescription}</p>
              </div>
            </div>

            {/* Additional Product Images */}
            {currentSection.images.length > 0 && (
              <div className="mt-6 flex flex-col md:flex-row gap-6">
                {currentSection.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Additional product ${index + 1}`}
                    onClick={() => setMainImage(image)} // Update main image on click
                    className={`w-[100px] h-[100px] object-cover rounded-md shadow-md cursor-pointer ${
                      mainImage === image ? "ring ring-blue-500" : ""
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
