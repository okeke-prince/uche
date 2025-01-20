"use server"
import React from "react";
import handleSubmit from "../../actions/productAction.js"
import sqlite3 from "better-sqlite3";
const db = sqlite3("destination.sqlite");
const product = db.prepare(`SELECT * FROM destinations`).all();
// console.log("hello");
// submit


function Page() {
  

  async function handleSubmit(formData) {
   
    console.log("Data successfully inserted into the database!");
  }
  
  
  

  return (
    <div className="grid grid-cols-1 mx-9 my-10 justify-items-center">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base/7 font-semibold text-gray-900">
              Contact Us
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Name Field */}
              <div className="sm:col-span-3">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Jane Smith"
                      className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="email"
                      name="email"

                      type="email"
                      placeholder="email@example.com"
                      className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="sm:col-span-full">
                <label htmlFor="subject" className="block text-sm/6 font-medium text-gray-900">
                  Subject
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="subject"
                      name="subject"

                      type="text"
                      placeholder="Subject"
                      className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="col-span-full">
                <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"

                    rows={4}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            // onClick={()=> submit()}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;

// "use server";

// import React from "react";
// import sqlite3 from "better-sqlite3";

// // Query the database
// const db = sqlite3("destination.sqlite");
// const product = db.prepare(`SELECT * FROM destinations`).all();

// function Page() {
//   console.log(product); // This will log on the server console
//   console.log("hello");

//   return (
//     <div className="grid grid-cols-1 mx-9 my-10 justify-items-center">
//       <form >
//         <div className="space-y-12">
//           <div className="border-b border-gray-900/10 pb-12">
//             <h1 className="text-base/7 font-semibold text-gray-900">
//               Contact Us
//             </h1>
//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               {/* Name Field */}
//               <div className="sm:col-span-3">
//                 <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//                     <input
//                       id="username"
//                       name="username"
//                       type="text"
//                       placeholder="Jane Smith"
//                       className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div className="sm:col-span-3">
//                 <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                   Email
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="email@example.com"
//                       className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Subject Field */}
//               <div className="sm:col-span-full">
//                 <label htmlFor="subject" className="block text-sm/6 font-medium text-gray-900">
//                   Subject
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//                     <input
//                       id="subject"
//                       name="subject"
//                       type="text"
//                       placeholder="Subject"
//                       className="block min-w-0 grow py-1.5 border-none pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Message Field */}
//               <div className="col-span-full">
//                 <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
//                   Message
//                 </label>
//                 <div className="mt-2">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                     placeholder="Write your message here..."
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button
//             // onClick={()=> submit()}
//             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Page;