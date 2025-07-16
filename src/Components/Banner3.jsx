import React from 'react';
import toyota from '../assets/partners/toyota.png';
import bmw from '../assets/partners/bmw.png';
import ford from '../assets/partners/ford.png';
import nissan from '../assets/partners/nissan.png';
import audi from '../assets/partners/audi.png';
import honda from '../assets/partners/honda.png';

const companies = [
  { id: 1, name: 'Toyota', logo: toyota },
  { id: 2, name: 'BMW', logo: bmw },
  { id: 3, name: 'Ford', logo: ford },
  { id: 4, name: 'Nissan', logo: nissan },
  { id: 5, name: 'Audi', logo: audi },
  { id: 6, name: 'Honda', logo: honda },
];

const Banner3 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold text-center mb-8">Our Partner Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {companies.map((company) => (
          <div key={company.id} className="flex flex-col items-center space-y-2">
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <p className="text-gray-600 font-medium text-sm">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
