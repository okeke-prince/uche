import Link from 'next/link';
import React from 'react';

const data = [
  {
    name: "Eiffel Tower",
    country: "France",
    description: "Iconic iron structure in Paris.",
    current_weather: "Cloudy, 12°C",
    img_url: "paris.jpg,paris1.jpg,paris2.jpg,paris3.jpg",
    best_time_to_visit: "April to June",
    destination_type_name: "Landmark",
    estimated_budget: 1500.0,
    latitude: 48.8584,
    longitude: 2.2945,
    type_id: 1,
  },
  {
    name: "Grand Canyon",
    country: "USA",
    description: "Massive natural canyon in Arizona.",
    current_weather: "Sunny, 25°C",
    img_url: "la1.jpg",
    best_time_to_visit: "March to May",
    destination_type_name: "Natural Wonder",
    estimated_budget: 1200.0,
    latitude: 36.1069,
    longitude: -112.1129,
    type_id: 2,
  },
  {
    name: "Great Wall",
    country: "China",
    description: "Historic wall spanning China.",
    current_weather: "Clear, 18°C",
    img_url: "rom1.jpg,rom2.jpg,rom3.jpg",
    best_time_to_visit: "September to November",
    destination_type_name: "Historic",
    estimated_budget: 1000.0,
    latitude: 40.4319,
    longitude: 116.5704,
    type_id: 3,
  },
  {
    name: "Sydney Opera House",
    country: "Australia",
    description: "Famous architectural marvel.",
    current_weather: "Rainy, 20°C",
    img_url: "beach1.jpg,beach2.jpg,beach3.jpg",
    best_time_to_visit: "October to February",
    destination_type_name: "Landmark",
    estimated_budget: 2000.0,
    latitude: -33.8568,
    longitude: 151.2153,
    type_id: 1,
  },
  {
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    description: "Highest peak in Africa.",
    current_weather: "Sunny, 15°C",
    img_url: "saf1.jpg,saf2.jpg,saf3.jpg",
    best_time_to_visit: "June to October",
    destination_type_name: "Mountain",
    estimated_budget: 2500.0,
    latitude: -3.0674,
    longitude: 37.3556,
    type_id: 2,
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Beautiful island with white-washed houses.",
    current_weather: "Clear, 22°C",
    img_url: "thai1.jpg,thai2.jpg,thai3.jpg,thai4.jpg",
    best_time_to_visit: "May to October",
    destination_type_name: "Island",
    estimated_budget: 1800.0,
    latitude: 36.3932,
    longitude: 25.4615,
    type_id: 1,
  },
  {
    name: "Pyramids of Giza",
    country: "Egypt",
    description: "Ancient pyramids built as tombs.",
    current_weather: "Sunny, 30°C",
    img_url: "trop1.jpg",
    best_time_to_visit: "October to March",
    destination_type_name: "Historic",
    estimated_budget: 800.0,
    latitude: 29.9792,
    longitude: 31.1342,
    type_id: 3,
  },
  {
    name: "Banff National Park",
    country: "Canada",
    description: "Stunning national park in Alberta.",
    current_weather: "Snowy, -5°C",
    img_url: "uk1.jpg,uk2.jpg,uk3.jpg",
    best_time_to_visit: "June to September",
    destination_type_name: "Nature",
    estimated_budget: 1500.0,
    latitude: 51.4968,
    longitude: -115.9281,
    type_id: 2,
  },
  {
    name: "Dubai Marina",
    country: "UAE",
    description: "Modern waterfront in Dubai.",
    current_weather: "Hot, 35°C",
    img_url: "dubai1.jpg,dubai2.jpg",
    best_time_to_visit: "November to March",
    destination_type_name: "Landmark",
    estimated_budget: 2000.0,
    latitude: 25.1972,
    longitude: 55.2744,
    type_id: 1,
  },
  {
    name: "Bali",
    country: "Indonesia",
    description: "Famous tropical paradise island.",
    current_weather: "Humid, 30°C",
    img_url: "turkey.jpg",
    best_time_to_visit: "April to October",
    destination_type_name: "Island",
    estimated_budget: 2000.0,
    latitude: -8.3405,
    longitude: 115.092,
    type_id: 1,
  },
];

function Page() {
  return (
    <div>
      <h1>Destinations</h1>
      <ul>
        {data.map((destination, index) => (
          <li key={index}>
            <Link
              href={{
                pathname: `/destinations/${destination.name.toLowerCase().replace(/ /g, '-')}`,
                query: {
                  name: destination.name,
                  country: destination.country,
                  description: destination.description,
                  current_weather: destination.current_weather,
                  img_url: destination.img_url,
                },
              }}
            >
              {destination.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;