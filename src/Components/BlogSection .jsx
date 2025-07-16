import React from 'react';
import blog1 from '../assets/slider1.jpg'
import blog2 from '../assets/B1-1.jpg'
import blog3 from '../assets/B1-3.jpg'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Have Car Accessories in 2024',
    description: 'Explore the latest trends and essential car accessories that enhance both safety and style.',
    image: blog1, // Make sure the image exists or import
  },
  {
    id: 2,
    title: 'How to Maintain Your Car in Rainy Season',
    description: 'Car care is important during monsoon. Here are tips to protect your vehicle from rain damage.',
    image: blog2,
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Car Engine Health',
    description: 'Understand how to keep your car engine running smoothly with expert tips and maintenance hacks.',
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest from Our Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <button className="text-yellow-500 font-medium hover:underline">Read more →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
