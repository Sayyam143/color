import React, { useState } from "react";
import back from "../image/back.png"; // Replace with your actual image path
import oil from "../image/oil.png"; // Main product image
import img1 from "../image/img1.svg"; // First additional image
import img2 from "../image/img2.svg"; // Second additional image

const Special = () => {
  const [selectedCategory, setSelectedCategory] = useState("Glitter Powder");
  const [mainImage, setMainImage] = useState(oil); // State for main product image

  const categories = [
    "Glitter Powder",
    "Digital Printing / Label Inks",
    "Imitation Jewelry",
  ];

  const sections = {
    "Glitter Powder": {
      title: "Glitter Powder",
      description:
        "Glitter powder is a fine, sparkling material commonly used in various industries to add a shimmering effect to products. It is available in a wide range of colors and sizes, making it highly versatile for applications in cosmetics, textiles, arts, and crafts.",
      productTitle: "Eucalyptus Essential Oil",
      productPrice: "INR 850 / Ltr",
      productDetails: [
        "Minimum Order Quantity: 5 Set",
        "Packaging Type: Bottle",
        "Form: Liquid",
      ],
      productDescription:
        "Eucalyptus oil is the generic name for distilled oil from the leaf of Eucalyptus. It is a genuine oil of the plant family Myrtaceae native to Australia and cultivated worldwide.",
      images: [img1, img2, oil],
    },
    "Digital Printing / Label Inks": {
      title: "Digital Printing / Label Inks",
      description:
        "We offer high-quality digital printing and label inks designed for vibrant and durable prints. These inks are suitable for a variety of surfaces and ensure long-lasting results.",
      productTitle: "Premium Label Ink",
      productPrice: "INR 500 / Ltr",
      productDetails: [
        "Minimum Order Quantity: 10 Ltr",
        "Packaging Type: Drum",
        "Form: Liquid",
      ],
      productDescription:
        "Our premium label inks are formulated to provide excellent adhesion and vibrant colors, making them ideal for industrial and commercial printing applications.",
      images: [img1, img2, oil],
    },
    "Imitation Jewelry": {
      title: "Imitation Jewelry",
      description:
        "Our imitation jewelry collection features high-quality designs crafted to perfection. These pieces are ideal for fashion enthusiasts looking for affordable yet elegant accessories.",
      productTitle: "Gold-Plated Necklace",
      productPrice: "INR 1500 / Piece",
      productDetails: [
        "Minimum Order Quantity: 20 Pieces",
        "Material: Gold-Plated Alloy",
        "Design: Traditional",
      ],
      productDescription:
        "This gold-plated necklace is a stunning piece of imitation jewelry, perfect for weddings and special occasions. It combines elegance and affordability, making it a popular choice among customers.",
      images: [img1, img2, oil],
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
        <h1 className="text-white text-4xl font-bold">SPECIALTY PRODUCTS</h1>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4">
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
          <div className="w-full md:w-3/4 bg-white shadow-md rounded-md p-6">
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
                <div className="flex gap-4 mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;