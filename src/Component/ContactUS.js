import React from "react";
import back from "../image/back.png"

const ContactUS = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${back})`, // Replace with your background image URL
        }}
      >
        <h1 className="text-white text-4xl font-bold text-center pt-20">
          CONTACT US
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-4">Enter Your Details</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill all details we will get back to you as soon as possible
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Call To Us</h3>
            <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-800 font-bold">Phone: +91 98247 30301</p>

            <h3 className="text-lg font-bold mt-6 mb-4">Write To Us</h3>
            <p className="text-gray-600 mb-2">Emails:</p>
            <p className="text-gray-800 font-bold">hello@test.com</p>
            <p className="text-gray-600 mt-4">Address:</p>
            <p className="text-gray-800 font-bold">
              G-1794, royal industries, Laskana-Kholvad Road, Kholvad, Surat-394190.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
            <form className="space-y-4">
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* Textarea */}
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md h-32"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUS;