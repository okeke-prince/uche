// import React from 'react';
// import Image from 'next/image';
// import { getAllDestinations } from '../../../database/destination';
// const destination = getAllDestinations();

// function Page({ destination }) { 
    
//     // Set default value to empty array
//     return (
//         <div>
//             <h1>Destinations</h1>
//             <div className="m-8 border border-red-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {destinations.length === 0 ? (
//                     <p>No destinations available.</p>
//                 ) : (
//                     destinations.map((dest) => (
//                         <div key={dest.id} className="border border-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
//                             {/* Image */}
//                             <div>
//                                 {/* Assuming the first image in img_url list is the primary image */}
//                                 <Image
//                                     src={dest.img_url.split(',')[0]} // Use first image from the comma-separated list
//                                     alt={dest.name}
//                                     width={500}
//                                     height={400}
//                                     className="w-full h-auto object-cover rounded-t-lg"
//                                 />
//                             </div>

//                             <div className="p-6 flex flex-col justify-between">
//                                 {/* Name */}
//                                 <a href="#">
//                                     <h5 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
//                                         {dest.name}
//                                     </h5>
//                                 </a>

//                                 {/* Country */}
//                                 <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">{dest.country}</p>

//                                 {/* Description */}
//                                 <p className="mb-6 text-gray-700 dark:text-gray-400 text-sm md:text-base">
//                                     {dest.description ? dest.description : "No description available."}
//                                 </p>

//                                 {/* Current Weather */}
//                                 <div className="mb-4">
//                                     <span className="font-bold text-gray-900">Weather: </span>
//                                     <span className="text-gray-700">{dest.current_weather}</span>
//                                 </div>

//                                 {/* Best Time to Visit */}
//                                 <div className="mb-4">
//                                     <span className="font-bold text-gray-900">Best Time to Visit: </span>
//                                     <span className="text-gray-700">{dest.best_time_to_visit}</span>
//                                 </div>

//                                 {/* Estimated Budget */}
//                                 <div className="mb-4">
//                                     <span className="font-bold text-gray-900">Estimated Budget: </span>
//                                     <span className="text-gray-700">${dest.estimated_budget}</span>
//                                 </div>

//                                 {/* Latitude and Longitude */}
//                                 <div className="mb-4">
//                                     <span className="font-bold text-gray-900">Location: </span>
//                                     <span className="text-gray-700">{`Lat: ${dest.latitude}, Lon: ${dest.longitude}`}</span>
//                                 </div>

//                                 {/* Destination Type */}
//                                 <div className="mb-4">
//                                     <span className="font-bold text-gray-900">Destination Type: </span>
//                                     <span className="text-gray-700">{dest.destination_type_name}</span>
//                                 </div>

//                                 {/* Read More Button */}
//                                 <a
//                                     href="#"
//                                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
//                                 >
//                                     Read more
//                                     <svg
//                                         className="rtl:rotate-180 w-4 h-4 ml-2"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 14 10"
//                                     >
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M1 5h12m0 0L9 1m4 4L9 9"
//                                         />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Page;