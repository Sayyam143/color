import React, { useState } from "react";
import back from "../image/back.png";

const DyesColors = () => {
  const [selectedCategory, setSelectedCategory] = useState("Disperse Dyes");

  const categories = [
    "Disperse Dyes",
    "Reactive Dyes",
    "Direct Dyes",
    "Acid Dyes",
    "Vat Dyes",
    "Solvent Dyes",
    "Basic Dyes",
    "Pigments (Organic & Inorganic)",
    "Construction chemicals",
    "Natural Colors",
    "Synthetic Food Colors",
    "Pharma Colors",
    "Cosmetic Colors",
    "Home Care Products Colors",
    "Personal Care Products Colors",
    "Animal Feed Colors",
    "Fertilizer Colors",
  ];

  const dyeDetails = [
    {
      category: "Disperse Dyes",
      description:
        "Disperse Dyes are synthetic colorants primarily used for dyeing hydrophobic fibers such as polyester, acetate, and nylon. These dyes are finely ground and dispersed in water, as they do not dissolve completely. Disperse dyes are applied to fabrics through methods like high-temperature dyeing or heat transfer printing, ensuring even color penetration. They offer vibrant, deep colors with excellent colorfastness against washing, light, and rubbing. Ideal for textile applications, these dyes are widely used in the fashion and fabric industries.",
      table: [
        {
          colorName: "Lake Tartrazine",
          indexNo: "19140",
          ecNo: "E 102",
          casNo: "1934-21-0",
          einecsNo: "217-699-5",
        },
        {
          colorName: "Sunset Yellow FCF",
          indexNo: "15985",
          ecNo: "E 110",
          casNo: "2783-94-0",
          einecsNo: "220-491-7",
        },
      ],
    },
    {
      category: "Reactive Dyes",
      description:
        "Reactive Dyes are widely used for dyeing cellulose fibers such as cotton and rayon. These dyes form covalent bonds with fibers, ensuring excellent wash fastness and vibrant colors. They are ideal for textile applications requiring durability and brilliance.",
      table: [
        {
          colorName: "Reactive Black KN-B",
          indexNo: "10095",
          ecNo: "-",
          casNo: "12225-26-2",
          einecsNo: "241-165-5",
        },
        {
          colorName: "Reactive Red X-BR",
          indexNo: "17752",
          ecNo: "-",
          casNo: "17804-49-8",
          einecsNo: "-",
        },
      ],
    },
    {
      category: "Direct Dyes",
      description:
        "Direct Dyes are water-soluble dyes that are applied directly to cellulose fibers such as cotton without requiring a mordant. They provide bright shades but have moderate wash fastness.",
      table: [
        {
          colorName: "Direct Blue 86",
          indexNo: "-",
          ecNo: "-",
          casNo: "-",
          einecsNo: "-",
        },
        {
          colorName: "Direct Red 23",
          indexNo: "-",
          ecNo: "-",
          casNo: "-",
          einecsNo: "-",
        },
      ],
    },
    {
    category: "Acid Dyes",
    description: "Acid dyes are water-soluble anionic dyes that are applied to fibers such as silk, wool, nylon, and modified acrylic fibers using acidic conditions. They are widely used in the textile, leather, and paper industries.",
    table: [
      {
        colorName: "Acid Red 1",
        indexNo: "18050",
        ecNo: "-",
        casNo: "3734-67-6",
        einecsNo: "-",
      },
      {
        colorName: "Acid Yellow 17",
        indexNo: "18965",
        ecNo: "-",
        casNo: "6359-98-4",
        einecsNo: "-",
      },
      {
        colorName: "Acid Yellow 23",
        indexNo: "19140",
        ecNo: "-",
        casNo: "1934-21-0",
        einecsNo: "-",
      },
      {
        colorName: "Acid Orange 3",
        indexNo: "10385",
        ecNo: "-",
        casNo: "6373-74-6",
        einecsNo: "-",
      },
      {
        colorName: "Acid Orange 7",
        indexNo: "15510",
        ecNo: "-",
        casNo: "633-96-5",
        einecsNo: "-",
      },
      {
        colorName: "Acid Blue 80",
        indexNo: "61585",
        ecNo: "-",
        casNo: "4474-24-2",
        einecsNo: "224-748-4",
      },
      {
        colorName: "Acid Black 52",
        indexNo: "15711",
        ecNo: "-",
        casNo: "5610-64-0",
        einecsNo: "-",
      },
      {
        colorName: "Acid Black 234",
        indexNo: "-",
        ecNo: "-",
        casNo: "157577-99-6",
        einecsNo: "-",
      },
    ],
  },
  
  {
    category: "Vat Dyes",
    description:
      "Vat dyes are water-insoluble dyes that are reduced to their soluble leuco form using a reducing agent under alkaline conditions. They are widely used for dyeing cellulose fibers like cotton due to their excellent fastness properties.",
    table: [
      {
        colorName: "Vat Blue 1 (Indigo)",
        indexNo: "73000",
        ecNo: "-",
        casNo: "482-89-3",
        einecsNo: "-",
      },
      {
        colorName: "Vat Green 1 (Indanthrene Green FFB)",
        indexNo: "59825",
        ecNo: "-",
        casNo: "128-58-5",
        einecsNo: "-",
      },
      {
        colorName: "Vat Orange 1 (Indanthrene Orange G)",
        indexNo: "59105",
        ecNo: "-",
        casNo: "1324-11-4",
        einecsNo: "-",
      },
      {
        colorName: "Vat Red 10 (Indanthrene Brilliant Scarlet)",
        indexNo: "73300",
        ecNo: "-",
        casNo: "12237-62-6 ",
        einecsNo: "-",
      },
      {
        colorName: "Vat Black 27 (Indanthrene Black FBB)",
        indexNo: "69025 ",
        ecNo: "-",
        casNo: "12677-15-5 ",
        einecsNo: "-",
      },
    ],
  },

  {
    category: "Direct Dyes",
    description:
      "Direct Dyes are water-soluble dyes that are applied directly to cellulose fibers such as cotton without requiring a mordant. They provide bright shades but have moderate wash fastness.",
    table: [
      {
        colorName: "Direct Blue 86",
        indexNo: "74180",
        ecNo: "-",
        casNo: "1330-38-7",
        einecsNo: "-",
      },
      {
        colorName: "Direct Red 23",
        indexNo: "29160",
        ecNo: "-",
        casNo: "3441-14-3",
        einecsNo: "-",
      },
      {
        colorName: "Direct Black 38",
        indexNo: "30235",
        ecNo: "217-710-3",
        casNo: "1937-37-7",
        einecsNo: "-",
      },
      {
        colorName: "Direct Red 79",
        indexNo: "29065",
        ecNo: "-",
        casNo: "1937-34-4",
        einecsNo: "-",
      },
    ],
  },
  {
    category: "Solvent Dyes",
    description:
      "Solvent dyes are non-polar dyes that are soluble in organic solvents. They are commonly used for coloring plastics, waxes, fuels, and other hydrocarbon-based materials.",
    table: [
      {
        colorName: "Solvent Blue 35",
        indexNo: "61554",
        ecNo: "-",
        casNo: "17354-14-2",
        einecsNo: "-",
      },
      {
        colorName: "Solvent Red 24",
        indexNo: "26105",
        ecNo: "-",
        casNo: "85-83-6",
        einecsNo: "-",
      },
      {
        colorName: "Solvent Yellow 56",
        indexNo: "11021",
        ecNo: "-",
        casNo: "2481-94-9",
        einecsNo: "-",
      },
      {
        colorName: "Solvent Green 3 (Malachite Green)",
        indexNo: "42000",
        ecNo: "-",
        casNo: "569-64-2",
        einecsNo: "-",
      },
    ],
  },

  {
    category: "Basic Dyes",
    description:
      "Basic dyes are water-soluble cationic dyes that are primarily used for dyeing acrylic fibers but can also be used on wool and silk. They provide bright and vibrant shades with good affinity to negatively charged surfaces.",
    table: [
      {
        colorName: "Basic Violet 1 (Crystal Violet)",
        indexNo: "42535",
        ecNo: "-",
        casNo: "548-62-9",
        einecsNo: "-",
      },
      {
        colorName: "Basic Green 4 (Malachite Green)",
        indexNo: "42000",
        ecNo: "-",
        casNo: "569-64-2",
        einecsNo: "-",
      },
      {
        colorName: "Basic Blue 7 (Methylene Blue)",
        indexNo: "52015",
        ecNo: "-",
        casNo: "61-73-4",
        einecsNo: "-",
      },
      {
        colorName: "Basic Red 18 (Rhodamine B)",
        indexNo: "45170",
        ecNo: "-",
        casNo: "81-88-9",
        einecsNo: "-",
      },
    ],
  },
  {
    category: "Pigments (Organic & Inorganic)",
    description:
      "Pigments are insoluble colorants that impart color to various materials. Organic pigments are carbon-based compounds offering vibrant colors, while inorganic pigments are derived from mineral sources, providing excellent durability and opacity. They are widely used in paints, coatings, plastics, and printing inks.",
    table: [
      {
        colorName: "Pigment Red 122 (Quinacridone)",
        indexNo: "73915",
        ecNo: "-",
        casNo: "980-26-7",
        einecsNo: "-",
      },
      {
        colorName: "Pigment Yellow 74 (Arylide Yellow)",
        indexNo: "11741",
        ecNo: "-",
        casNo: "6358-31-2",
        einecsNo: "-",
      },
      {
        colorName: "Pigment Blue 15 (Phthalocyanine Blue)",
        indexNo: "74160",
        ecNo: "-",
        casNo: "147-14-8",
        einecsNo: "-",
      },
      {
        colorName: "Titanium Dioxide (Inorganic White Pigment)",
        indexNo: "-",
        ecNo: "-",
        casNo: "13463-67-7",
        einecsNo: "-",
      },
    ],
  },
  {
    category: "Construction chemicals",
    description:
      "Construction chemicals are specially manufactured chemical compounds that are mixed with concrete, mortar, and other construction components to improve certain properties. They enhance strength, durability, surface finish, and resistance to undesirable weather conditions.",
    table: [
      {
        colorName: "Admixtures (Plasticizers & Superplasticizers)",
        indexNo: "-",
        ecNo: "-",
        casNo: "-",
        einecsNo: "-",
      },
      {
        colorName: "Waterproofing Chemicals (Coatings & Membranes)",
        indexNo: "-",
        ecNo: "-",
        casNo: "-",
        einecsNo: "-",
      },
      {
        colorName: "Concrete Repair Compounds (Epoxy Resins)",
        indexNo: "-",
        ecNo: "-",
        casNo: "-",
        einecsNo: "-",
      },
      {
        colorName: "Protective Coatings (Anti-Corrosion Coatings)",
        indexNo: "-",
        ecNo: "-",
        casNo: "-",
        einecsNo: "-",
      },
      {
        colorName: "Flooring Compounds (Epoxy Flooring Systems)",
        indexNo: "-",
        ecNo: "-",
        casNo: "-",
        einecsNo: "-",
      },
    ],
  },
  {
    category: "Natural Colors",
    description:
      "Natural colors are derived from plant, animal, or mineral sources and are used as safe and eco-friendly alternatives to synthetic dyes. These colors are widely used in food, cosmetics, textiles, and pharmaceuticals.",
    table: [
      {
        colorName: "Annatto Extract (Yellow-Orange)",
        indexNo: "75120",
        ecNo: "E160b",
        casNo: "1393-63-1",
        einecsNo: "215-735-4",
      },
      {
        colorName: "Carmine (Red Color from Cochineal)",
        indexNo: "75470",
        ecNo: "E120",
        casNo: "1390-65-4",
        einecsNo: "215-724-4",
      },
      {
        colorName: "Curcumin (Turmeric Yellow)",
        indexNo: "75300",
        ecNo: "E100",
        casNo: "458-37-7",
        einecsNo: "207-280-5",
      },
      {
        colorName: "Chlorophyllin (Green Color from Chlorophyll)",
        indexNo: "-",
        ecNo: "E140",
        casNo: "11006-34-1",
        einecsNo: "-",
      },
      {
        colorName: "Beetroot Red (Betanin)",
        indexNo: "-",
        ecNo: "E162",
        casNo: "7659-95-2",
        einecsNo: "-",
      },
    ],
  },

  {
    category: "Synthetic Food Colors",
    description:
      "Synthetic food colors are chemically synthesized additives used to enhance the appearance of food and beverages. They are widely used due to their stability, vibrant hues, and cost-effectiveness. However, they must adhere to strict safety regulations to ensure consumer health.",
    table: [
      {
        colorName: "Tartrazine (Yellow)",
        indexNo: "19140",
        ecNo: "E102",
        casNo: "1934-21-0",
        einecsNo: "-",
      },
      {
        colorName: "Sunset Yellow FCF (Orange)",
        indexNo: "15985",
        ecNo: "E110",
        casNo: "2783-94-0",
        einecsNo: "-",
      },
      {
        colorName: "Brilliant Blue FCF (Blue)",
        indexNo: "42090",
        ecNo: "E133",
        casNo: "3844-45-9",
        einecsNo: "-",
      },
      {
        colorName: "Allura Red AC (Red)",
        indexNo: "16035",
        ecNo: "E129",
        casNo: "25956-17-6",
        einecsNo: "-",
      },
      {
        colorName: "Indigotine (Blue Indigo Shade)",
        indexNo: "73015",
        ecNo: "E132",
        casNo: "860-22-0",
        einecsNo: "-",
      },
    ],
  },

  {
    category: "Pharma Colors",
    description:
      "Pharma colors are specially formulated dyes and pigments used in the pharmaceutical industry for coloring tablets, capsules, syrups, and other medicinal products. These colors comply with stringent safety and regulatory standards.",
    table: [
      {
        colorName: "FD&C Red No. 40 (Allura Red AC)",
        indexNo: "16035",
        ecNo: "-",
        casNo: "25956-17-6",
        einecsNo: "-",
      },
      {
        colorName: "FD&C Yellow No. 5 (Tartrazine)",
        indexNo: "19140",
        ecNo: "-",
        casNo: "1934-21-0",
        einecsNo: "-",
      },
      {
        colorName: "FD&C Blue No. 1 (Brilliant Blue FCF)",
        indexNo: "42090",
        ecNo: "-",
        casNo: "3844-45-9",
        einecsNo: "-",
      },
      {
        colorName: "Iron Oxide Red (Inorganic Pigment for Pharma)",
        indexNo: "-",
        ecNo: "-",
        casNo: "1309-37-1",
        einecsNo: "-",
      },
    ],
  },

  {
    category: "Cosmetic Colors",
    description:
      "Cosmetic colors are dyes and pigments used in beauty and personal care products such as lipsticks, eyeshadows, nail polishes, and skincare items. These colors are safe for skin application and comply with cosmetic safety standards.",
    table: [
      {
        colorName: "D&C Red No. 7 Calcium Lake (Lipstick Red)",
        indexNo: "-",
        ecNo: "-",
        casNo: "5281-04-9",
        einecsNo: "-",
      },
      {
        colorName: "D&C Yellow No. 10 Aluminum Lake (Eyeshadow Yellow)",
        indexNo: "-",
        ecNo: "-",
        casNo: "8004-92-0 ",
        einecsNo: "-",
      },
      {
        colorName: "Mica-Based Pigments (Shimmery Effect Pigments)",
        indexNo: "-",
        ecNo: "-",
        casNo: "- ",
        einecsNo: "- ",
      },
      {
        colorName:
          "Titanium Dioxide (White Pigment for Skincare & Foundation)",
        indexNo: "- ",
        ecNo: "- ",
        casNo: "13463-67-7 ",
        einecsNo: "- ",
      },
    ],
  },

  {
    category: "Home Care Products Colors",
    description:
      "Home care product colors are dyes and pigments used in household cleaning products such as detergents, dishwashing liquids, and surface cleaners. These colors enhance the visual appeal of the products while ensuring compatibility with cleaning agents.",
    table: [
      {
        colorName: "Acid Blue 9 (Detergent Blue)",
        indexNo: "42090",
        ecNo: "-",
        casNo: "3844-45-9",
        einecsNo: "-",
      },
      {
        colorName: "Direct Yellow 86 (Dishwashing Liquid Yellow)",
        indexNo: "-",
        ecNo: "-",
        casNo: "61725-08-4",
        einecsNo: "-",
      },
      {
        colorName: "Solvent Green 7 (Surface Cleaner Green)",
        indexNo: "59040",
        ecNo: "-",
        casNo: "6358-69-6",
        einecsNo: "-",
      },
    ],
  },
  {
    category: "Personal Care Products Colors",
    description:
      "Personal care product colors are used in shampoos, soaps, lotions, and other personal care items to enhance their appearance. These colors are safe for skin and hair applications and comply with regulatory standards.",
    table: [
      {
        colorName: "FD&C Red No. 40 (Shampoo Red)",
        indexNo: "16035",
        ecNo: "-",
        casNo: "25956-17-6",
        einecsNo: "-",
      },
      {
        colorName: "FD&C Blue No. 1 (Soap Blue)",
        indexNo: "42090",
        ecNo: "-",
        casNo: "3844-45-9",
        einecsNo: "-",
      },
      {
        colorName:
          "Iron Oxide Yellow (Foundation Yellow for Personal Care Products)",
        indexNo: "-",
        ecNo: "-",
        casNo: "51274-00-1",
        einecsNo: "- ",
      },
    ],
  },
  {
    category: "Animal Feed Colors",
    description:
      "Animal feed colors are used to enhance the appearance of animal feed products, making them visually appealing. These colors are safe for consumption by animals and comply with feed safety regulations.",
    table: [
      {
        colorName:
          "Canthaxanthin (Red Color for Poultry Feed & Aquaculture Feed)",
        indexNo: "- ",
        ecNo: "- ",
        casNo: "514-78-3 ",
        einecsNo: "- ",
      },
      {
        colorName:
          "Beta-Carotene (Yellow Color for Animal Feed & Supplements)",
        indexNo: "- ",
        ecNo: "- ",
        casNo: "7235-40-7 ",
        einecsNo: "- ",
      },
    ],
  },
  {
    category: "Fertilizer Colors",
    description:
      "Fertilizer colors are used to differentiate various types of fertilizers and improve their visual appeal. These colors are compatible with fertilizer formulations and do not affect their efficacy.",
    table: [
      {
        colorName:
          "Chromium Oxide Green (Green Color for Fertilizers & Coatings)",
        indexNo: "- ",
        ecNo: "- ",
        casNo: "1308-38-9 ",
        einecsNo: "- ",
      },
      {
        colorName:
          "Ultramarine Blue (Blue Color for Fertilizers & Granules)",
        indexNo: "- ",
        ecNo: "- ",
        casNo: "57455-37-5 ",
        einecsNo:" - ",
      },
    ],
  },

  ];

  const selectedDye = dyeDetails.find((dye) => dye.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <h1 className="text-white text-4xl font-bold">DYES & COLORS</h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row py-8 px-4 gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-bold mb-4 text-center">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-3 rounded-md cursor-pointer text-center font-medium ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
          <p className="text-gray-700 mb-6">{selectedDye?.description}</p>

          {/* Table */}
          {selectedDye?.table && selectedDye.table.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">Color Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Index No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">E.C. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CAS No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EINECS No.</th>
                </tr>
              </thead>
              <tbody>
                {selectedDye.table.map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "" : "bg-gray-100"}`}>
                    <td className="border border-gray-300 px-4 py-2">{row.colorName}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.indexNo}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.ecNo}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.casNo}</td>
                    <td className="border border-gray-300 px-4 py-2">{row.einecsNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DyesColors;
