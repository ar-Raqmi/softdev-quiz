import React from 'react';

export default function ArchitectureDiagram() {
  return (
    <div className="flex justify-center items-center w-full p-4 overflow-x-auto">
      <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* User-interface Box */}
        <rect x="20" y="40" width="160" height="120" stroke="#1D1B1E" strokeWidth="2" fill="white"/>
        <rect x="30" y="70" width="140" height="60" stroke="#1D1B1E" strokeWidth="2" fill="white"/>
        <text x="100" y="105" textAnchor="middle" fill="#1c3879" fontSize="16" fontFamily="serif">User-interface</text>

        {/* Request Arrow */}
        <text x="300" y="55" textAnchor="middle" fill="#1c3879" fontSize="14" fontFamily="serif">Request</text>
        <line x1="180" y1="70" x2="410" y2="70" stroke="#1D1B1E" strokeWidth="2"/>
        <polygon points="410,70 400,64 400,76" fill="#1D1B1E"/>

        {/* Response Arrow */}
        <text x="300" y="145" textAnchor="middle" fill="#1c3879" fontSize="14" fontFamily="serif">Response</text>
        <line x1="190" y1="130" x2="420" y2="130" stroke="#1D1B1E" strokeWidth="2"/>
        <polygon points="190,130 200,124 200,136" fill="#1D1B1E"/>

        {/* Program Logic Box */}
        <rect x="420" y="40" width="160" height="120" stroke="#1D1B1E" strokeWidth="2" fill="white"/>
        <rect x="430" y="70" width="140" height="80" stroke="#1D1B1E" strokeWidth="2" fill="white"/>
        <text x="440" y="95" fill="#1c3879" fontSize="14" fontFamily="serif">Program Logic</text>
        <text x="440" y="115" fill="#1c3879" fontSize="14" fontFamily="serif">Data</text>
        <text x="440" y="135" fill="#1c3879" fontSize="14" fontFamily="serif">management</text>
      </svg>
    </div>
  );
}
