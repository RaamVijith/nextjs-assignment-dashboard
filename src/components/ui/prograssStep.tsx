// components/ProgressSteps.js
import React from 'react';

const steps = [
  { name: 'New', status: 'current' },
  { name: 'Proposal Creation', status: 'upcoming' },
  { name: 'Presentation', status: 'upcoming' },
  { name: 'Negotiation', status: 'upcoming' },
  { name: 'Closed', status: 'upcoming' },
];

const ProgressSteps = () => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center justify-center px-4 py-2 my-3   ${
              step.status === 'current'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-500'
            } `}
          >
            {step.name}
          </div>
          {index < steps.length - 1 && (
            <div className="border-t-2 border-gray-200 flex-1"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
