import React, { useEffect, useState } from "react";

function Raf() {
  const [data, setData] = useState("");

  useEffect(() => {
    /**********************
     {
      "Type": "Bed Sheet with Pillow Covers",
      "Color": "Multicolor",
      "Material": "Cotton",
      "Size": "7.5 X 8.5 Feet",
      "something_else": "Double Size Bed Sheet",
      "something_else_two": "Bed Sheet with Matching 2 Pillow Covers"
    }
     */

    fetch("../public/productData.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      className="mt-32 container mx-auto
    "
    >
      <h1 className="pb-8">
        Product details of Double King Size Cotton Bed Sheet With 2 Pillow
        Covers - Multicolor
      </h1>
      <div className="flex flex-row justify-between">
        <div>
          <ol className="list-disc">
            <li>Product Type: {data.Type}</li>
            <li>Color: {data.Color} </li>
            <li>Main Material: {data.Material} </li>
          </ol>
        </div>
        <div>
          <ol className="list-disc">
            <li>Size: {data.Size}</li>
            <li>{data.something_else} </li>
            <li>{data.something_else_two} </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Raf;
