// import React, { useState } from "react";

// const ProductImagePreview = ({ images = [] }) => {
//   const [activeImage, setActiveImage] = useState(images[0]);

//   return (
//     <div className="w-full lg:w-1/2">
//       <div className="border rounded-xl overflow-hidden mb-4">
//         <img
//           src={activeImage}
//           alt="Product Preview"
//           className="w-full h-96 object-contain transition-all duration-300"
//         />
//       </div>
//       <div className="flex gap-3 justify-center">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Thumb-${index}`}
//             onClick={() => setActiveImage(img)}
//             className={`w-20 h-20 object-cover border-2 rounded-lg cursor-pointer ${
//               activeImage === img ? "border-orange-500" : "border-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductImagePreview;

import React, { useState } from "react";

const ProductImagePreview = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div className="w-full max-w-md">
      <div className="border rounded-lg p-2 mb-3">
        <img
          src={selectedImage}
          alt="Main"
          className="w-full h-72 object-contain rounded-lg"
        />
      </div>
      <div className="flex gap-2">
        <img
          src={image}
          alt="Thumb"
          className="w-20 h-20 object-contain border rounded cursor-pointer"
          onClick={() => setSelectedImage(image)}
        />
      </div>
    </div>
  );
};

export default ProductImagePreview;
