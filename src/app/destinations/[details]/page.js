"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
// import { console } from 'inspector';
// type Props = {}

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


const page = (props) => {
  const router = useRouter();

  // Extract the slug from the route (e.g., /destination/[slug])
  const slug = router.query?.slug;
  console.log(props.country)
  
  return (
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base/7 font-semibold text-indigo-600"></p>
          <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">About</h1>
          <p class="mt-6 text-xl/8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestasAliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestasAliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestasAliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestasAliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
        </div>
      </div>
    </div>
    <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/img/thai1.jpg" alt=""/>
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
      
      </div>
    </div>
  </div>
</div>

  )
}

export default page