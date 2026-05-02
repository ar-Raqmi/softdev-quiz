import React from 'react';

export const ERDiagram: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#f4f4f4] py-8 rounded">
      <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        
        {/* Lines */}
        <line x1="140" y1="120" x2="240" y2="120" stroke="black" strokeWidth="2" />
        <line x1="360" y1="120" x2="460" y2="120" stroke="black" strokeWidth="2" />
        <line x1="300" y1="80" x2="300" y2="60" stroke="black" strokeWidth="2" />

        {/* Cardinalities */}
        <text x="160" y="110" fontFamily="sans-serif" fontSize="16">1</text>
        <text x="400" y="110" fontFamily="sans-serif" fontSize="16">0..1</text>

        {/* Left Entity: Instructor */}
        <rect x="20" y="90" width="120" height="60" fill="#e5e5e5" stroke="black" strokeWidth="1" />
        <text x="80" y="125" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">Instructor</text>

        {/* Relationship: manages */}
        <polygon points="300,80 360,120 300,160 240,120" fill="#e5e5e5" stroke="black" strokeWidth="1" />
        <text x="300" y="125" fontFamily="sans-serif" fontSize="16" textAnchor="middle">manages</text>

        {/* Attribute: since */}
        <ellipse cx="300" cy="40" rx="60" ry="20" fill="#e5e5e5" stroke="black" strokeWidth="1" />
        <text x="300" y="45" fontFamily="sans-serif" fontSize="16" textAnchor="middle">since</text>

        {/* Right Entity: Class */}
        <rect x="460" y="90" width="120" height="60" fill="#e5e5e5" stroke="black" strokeWidth="1" />
        <text x="520" y="125" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">Class</text>

      </svg>
    </div>
  );
};
