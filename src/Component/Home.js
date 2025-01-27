import React from "react";
import back from "../image/back.png";
import john from "../image/john.png";
import col1 from "../image/col1.png"; // Replace with your actual product images
import col2 from "../image/col2.png";
import col3 from "../image/col3.png";
import col4 from "../image/col4.png";
import col5 from "../image/col5.png";

const Home = () => {
  // Array of custom product names
  const productNames = [
    "Dyes and Colors",
    "Food Ingredients",
    "Chemicals and Additives",
    "Packaging Solutions",
    "Specialty Products",
  ];

  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-[500px] flex items-center justify-center text-center"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div className="text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              Your Trusted Partner in Global Trade & Premium Industrial Products
            </h1>
            <p className="text-lg leading-relaxed">
              Explore our extensive range of high-quality products catering to diverse industries worldwide.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="text-center text-lg text-justify mx-auto ">
          <p>
            S G EXIM is a leading global trading company based in Surat, India, offering a diverse range of high-quality products across various industries. With a focus on excellence, we specialize in dyes and colors, food ingredients, chemicals and additives, packaging, and specialty products like glitter powder and imitation jewelry. Our products are sourced from trusted suppliers and are known for their superior quality, reliability, and sustainability. We cater to a wide range of sectors, including textiles, food manufacturing, cosmetics, and more, providing tailored solutions that meet the specific needs of our clients. Committed to customer satisfaction, we ensure timely delivery, competitive pricing, and exceptional support throughout the trade process. At S G EXIM, we are dedicated to building long-term partnerships with our clients, offering innovative solutions, and maintaining the highest standards in everything we do. Whether you need premium dyes, ingredients, or packaging solutions, we are your trusted global partner.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-500 text-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">OUR VISION</h2>
            <p>
              At S G EXIM, our vision is to be a leading global supplier of high-quality industrial products, recognized for our commitment to excellence, sustainability, and innovation. We aim to empower businesses worldwide by providing reliable, cost-effective solutions that enhance product quality and performance. By continuously expanding our product range and staying ahead of market trends, we strive to build lasting partnerships with our clients and become their preferred choice for diverse trade needs, ensuring mutual growth and success.To be the most respected supplier of dyes & related products, known for our brand integrity,
              quality excellence, and innovation.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">OUR MISSION</h2>
            <p>
              Our mission is to deliver superior products and exceptional service to our customers across various industries. We are dedicated to sourcing the highest quality dyes,
              food ingredients, chemicals, packaging, and specialty products, ensuring reliability, safety, and sustainability. Through a customer-centric approach,
              we aim to provide tailored solutions that meet the specific needs of each client, offering competitive pricing, timely delivery, and unmatched support.
              At S G EXIM, we are committed to fostering long-term relationships and contributing to the success of our clients globally.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-center text-4xl font-bold mb-8">Our Products</h2>
          <h3 className="text-center text-2xl mb-8">Check our wide range of products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[col1, col2, col3, col4, col5].map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                <img src={product} alt={productNames[index]} className="w-full h-[200px] object-cover" />
                <div className="p-4 text-center">
                  {/* Use custom name from productNames array */}
                  <h3 className="text-lg  mb-2">{productNames[index]}</h3>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
<div className="container mx-auto py-12 px-4">
  <h2 className="text-center text-3xl font-bold mb-2">Contact Us</h2>
  <p className="text-center text-lg mb-8">
    Fill all details, we will get back to you as soon as possible.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column: Contact Information */}
    <div className=" rounded-md p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <span className="text-blue-500 text-2xl mr-2">📞</span> Call To Us
        </h3>
        <p>We are available 24/7, 7 days a week.</p>
        <p className="font-bold mt-1">Phone: +91 96247 30301</p>
      </div>
      <hr />
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <span className="text-blue-500 text-2xl mr-2">✉️</span> Write To Us
        </h3>
        <p>
          Emails: <span className="font-bold">mrdivyangpandya@yahoo.com</span>
        </p>
        <p className="mt-1">
          Address: G–1/704, Star Pavitra Nagri, Laskana-Kholvad Road, Kholvad,
          Surat - 394190.
        </p>
      </div>
    </div>

    {/* Right Column: Contact Form */}
    <div className="bg-white shadow-md rounded-md p-6">
      <form className="space-y-4">
        {/* Name, Email, and Phone Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email *"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>


        {/* Testimonials Section */}
        <div className="container mx-auto py-12 px-4 w-30">
          <h2 className="text-center text-3xl font-bold mb-8">Customer Testimonials</h2>
          <h3 className="text-center ">Check our customers valuable feedbacks</h3>

          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-md p-6 text-center">
                <img
                  src={john} // Replace with actual testimonial images if available
                  alt={`Customer ${index + 1}`}
                  className="mx-auto mb-7 rounded-full"
                />
                
                <p>Top notch. Very good customer service and quick at answering my queries. I really enjoy working with them. I have had dealings with members of Smooth Accounting since July 2022. I have found the staff all so easy to talk to and incredibly knowledgeable. I would not hesitate to recommend their services. You can tell they really care, they go above and beyond to look after their customers. They are quick to respond and no question is too small. I honestly can’t say anything negative about my experiences working with them. Brilliant customer service!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
