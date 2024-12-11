import React from 'react';
import Header from '../components/Header';

const AnimalAlarm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Animal Alarm</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl text-gray-600">Coming soon with IoT devices!</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalAlarm;