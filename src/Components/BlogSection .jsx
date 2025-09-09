// import React from 'react';
// import blog1 from '../assets/slider1.jpg'
// import blog2 from '../assets/B1-1.jpg'
// import blog3 from '../assets/B1-3.jpg'

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Top 10 Must-Have Car Accessories in 2024',
//     description: 'Explore the latest trends and essential car accessories that enhance both safety and style.',
//     image: blog1, // Make sure the image exists or import
//   },
//   {
//     id: 2,
//     title: 'How to Maintain Your Car in Rainy Season',
//     description: 'Car care is important during monsoon. Here are tips to protect your vehicle from rain damage.',
//     image: blog2,
//   },
//   {
//     id: 3,
//     title: 'The Ultimate Guide to Car Engine Health',
//     description: 'Understand how to keep your car engine running smoothly with expert tips and maintenance hacks.',
//     image: blog3,
//   },
// ];

// const BlogSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest from Our Blog</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
//             <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{post.description}</p>
//               <button className="text-yellow-500 font-medium hover:underline">Read more →</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;


import React from 'react';
import blog1 from '../assets/slider1.jpg';
import blog2 from '../assets/B1-1.jpg';
import blog3 from '../assets/B1-3.jpg';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Have Car Accessories in 2024',
    description: 'Explore the latest trends and essential car accessories that enhance both safety and style for your vehicle.',
    image: blog1,
    author: 'Sarah Johnson',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Accessories'
  },
  {
    id: 2,
    title: 'How to Maintain Your Car in Rainy Season',
    description: 'Car care is important during monsoon. Here are expert tips to protect your vehicle from rain damage and ensure optimal performance.',
    image: blog2,
    author: 'Mike Chen',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    category: 'Maintenance'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Car Engine Health',
    description: 'Understand how to keep your car engine running smoothly with professional tips, maintenance hacks, and preventive care strategies.',
    image: blog3,
    author: 'Emily Davis',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    category: 'Engine Care'
  },
];

const BlogSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            From Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover expert tips, industry insights, and the latest trends in automotive care and accessories
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FaUser className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all duration-300">
                  Read More
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Blog Posts
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;