// import React from 'react';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import img1 from '../assets/slider1.jpg';
// import img2 from '../assets/slider2.jpg';
// import img3 from '../assets/slider3.jpg';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Hero = () => {
//   const data = [
//     {
//       id: 0,
//       title: "New Arrival 2024",
//       subtitle: "Discover the Latest Collection",
//       des: "Upgrade your ride with top-quality auto parts. Stylish, durable and reliable – just for you.",
//       img: img1
//     },
//     {
//       id: 1,
//       title: "Hot Deals This Week",
//       subtitle: "Save Big on Essentials",
//       des: "Unbeatable prices on must-have items. Limited time offer – don't miss out!",
//       img: img2
//     },
//     {
//       id: 2,
//       title: "Exclusive Auto Gears",
//       subtitle: "Premium Quality Guaranteed",
//       des: "From performance to style, find everything your vehicle needs in one place.",
//       img: img3
//     }
//   ];

//   // Custom Left Arrow
//   const PrevArrow = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
//     >
//       <FaChevronLeft size={20} />
//     </button>
//   );

//   // Custom Right Arrow
//   const NextArrow = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
//     >
//       <FaChevronRight size={20} />
//     </button>
//   );

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />
//   };

//   return (
//     <div className="mt-[70px] relative">
//       <Slider {...settings}>
//         {data.map((item) => (
//           <div key={item.id}>
//             <div
//               className="h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-center px-4"
//               style={{ backgroundImage: `url(${item.img})` }}
//             >
//               <div>
//                 <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
//                 <h3 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-2">{item.subtitle}</h3>
//                 <p className="text-gray-200 mb-4 text-sm md:text-base">{item.des}</p>
//                 <Link to="/shop">
//                   <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded transition duration-300">
//                     Shop Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from '../assets/slider1.jpg';
import img2 from '../assets/slider2.jpg';
import img3 from '../assets/slider3.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const data = [
    {
      id: 0,
      title: "New Arrival 2024",
      subtitle: "Discover the Latest Collection",
      des: "Upgrade your ride with top-quality auto parts. Stylish, durable and reliable – just for you.",
      img: img1,
      btnText: "Shop Now",
      btnLink: "/shop"
    },
    {
      id: 1,
      title: "Hot Deals This Week",
      subtitle: "Save Big on Essentials",
      des: "Unbeatable prices on must-have items. Limited time offer – don't miss out!",
      img: img2,
      btnText: "View Deals",
      btnLink: "/deals"
    },
    {
      id: 2,
      title: "Exclusive Auto Gears",
      subtitle: "Premium Quality Guaranteed",
      des: "From performance to style, find everything your vehicle needs in one place.",
      img: img3,
      btnText: "Explore Products",
      btnLink: "/products"
    }
  ];

  // Custom Left Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-80 hover:opacity-100"
      aria-label="Previous slide"
    >
      <FaChevronLeft size={20} />
    </button>
  );

  // Custom Right Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-80 hover:opacity-100"
      aria-label="Next slide"
    >
      <FaChevronRight size={20} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition"></div>
    )
  };

  return (
    <div className="mt-[70px] relative">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <div
              className="h-[60vh] min-h-[400px] md:h-[70vh] w-full bg-cover bg-center flex items-center justify-center text-center px-4 relative"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 animate-fadeIn">
                  {item.title}
                </h2>
                <h3 className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4 animate-fadeIn delay-200">
                  {item.subtitle}
                </h3>
                <p className="text-gray-100 mb-6 md:mb-8 text-sm md:text-base lg:text-lg max-w-2xl mx-auto animate-fadeIn delay-400">
                  {item.des}
                </p>
                <Link to={item.btnLink} className="animate-fadeIn delay-600">
                  <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-3 rounded transition duration-300 transform hover:scale-105 font-medium">
                    {item.btnText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;


