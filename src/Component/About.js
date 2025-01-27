import React from "react";
import back from "../image/back.png"; // Replace with your actual header image path

const About = () => {
  return (
    <div className="bg-white-100 min-h-screen">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1 className="text-white text-4xl font-bold uppercase">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-8 px-4 bg-white shadow-md rounded-md">
        {/* Introduction */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to S G EXIM, a leading global supplier specializing in a wide range of high-quality products across various industries. Established in Surat, India, we have built a reputation for excellence, reliability, and innovation. Our commitment to delivering exceptional value to our customers drives us to source the finest materials and offer unparalleled service. We cater to diverse industries, including food ingredients, chemicals, dyes & colors, and specialty products.
        </p>

        {/* Product Range */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Product Range</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Dyes & Colors:</strong> We specialize in dyes and colors for textiles, food, cosmetics, and industrial applications. Our offerings include:
            <ul className="list-disc list-inside pl-6">
              <li>Disperse dyes, reactive dyes, direct dyes, acid dyes, vat dyes.</li>
              <li>Food colors (natural and synthetic), cosmetic colors, home care product colors.</li>
              <li>Pigments (organic & inorganic) for coatings, plastics, inks, and more.</li>
            </ul>
          </li>
          <li>
            <strong>Food Ingredients:</strong> From flavors and fragrances to fruit powders and vegetable powders, we provide the finest quality food additives and ingredients.
          </li>
          <li>
            <strong>Chemicals & Additives:</strong> We supply a wide range of chemicals for industrial applications.
          </li>
          <li>
            <strong>Packaging:</strong> Our packaging solutions ensure the safe transport of your goods.
          </li>
          <li>
            <strong>Specialty Products:</strong> We offer specialty products tailored to specific industries and innovative applications.
          </li>
        </ul>

        {/* Mission */}
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At S G EXIM, our mission is simple – to provide premium products with unmatched quality and customer service. We strive to set new standards in the trade, offering innovative solutions that meet the unique needs of our customers. By forging strategic partnerships with global suppliers and customers alike, we aim to be a trusted name in every industry we serve.
        </p>

        {/* Vision */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          To be the most respected supplier of dyes & related products, known for our brand integrity, quality excellence, and innovation.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Commitment to quality: All our products adhere to the strictest quality standards.</li>
          <li>Global network: We have established partnerships with suppliers and customers worldwide.</li>
          <li>Customer-centric approach: We prioritize customer satisfaction through tailored solutions.</li>
          <li>Innovative solutions: We continuously explore new technologies to meet evolving market demands.</li>
          <li>Sustainability: We are committed to eco-friendly practices across all operations.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
