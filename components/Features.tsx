'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faRoad, faBolt, faStar } from '@fortawesome/free-solid-svg-icons';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const defaultIcons = {
  'Autopilot': faRobot,
  'Long Range': faRoad,
  'Supercharging': faBolt
};

const defaultIconsClass = {
  'Autopilot': 'text-blue-500 text-4xl hover:text-blue-600 transform hover:scale-110 transition-all duration-10',
  'Long Range': 'text-green-500 text-4xl hover:text-green-600 transform hover:scale-110 transition-all duration-10',
  'Supercharging': 'text-red-500 text-4xl hover:text-red-600 transform hover:scale-110 transition-all duration-300'
};

// const defaultIconsClass = {
//   'Autopilot': 'text-blue-500 text-4xl hover:text-blue-600 ',
//   'Long Range': 'text-green-500 text-4xl hover:text-green-600 ',
//   'Supercharging': 'text-red-500 text-4xl hover:text-red-600'
// };


export default function Features({ features }: { features: Feature[] }) {
  // useEffect(() => {
  //   // Ensure client-side rendering
  // }, []);

  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <FontAwesomeIcon 
                icon={defaultIcons[feature.title as keyof typeof defaultIcons] || faStar} 
                className={`fas ${defaultIconsClass[feature.title as keyof typeof defaultIconsClass]} 
                w-16 h-16`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}