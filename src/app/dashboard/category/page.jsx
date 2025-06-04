// 'use client'

// import { BiCategory } from 'react-icons/bi';
// import { FaGlobe, FaUsers, FaPalette, FaBook, FaBriefcase, FaMicrochip, FaNewspaper, FaFlask } from 'react-icons/fa';
// import { handleCategory } from '../../api/category';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const categories = [
//     { name: "Society & Culture", color: "bg-teal-200", icon: <FaGlobe className="text-white text-2xl" /> },
//     { name: "Kids & Family", color: "bg-blue-200", icon: <FaUsers className="text-white text-2xl" /> },
//     { name: "Arts", color: "bg-purple-300", icon: <FaPalette className="text-white text-2xl" /> },
//     { name: "Education", color: "bg-orange-300", icon: <FaBook className="text-white text-2xl" /> },
//     { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
//     { name: "Technology", color: "bg-cyan-300", icon: <FaMicrochip className="text-white text-2xl" /> },
//     { name: "News", color: "bg-rose-300", icon: <FaNewspaper className="text-white text-2xl" /> },
//     { name: "Science", color: "bg-orange-200", icon: <FaFlask className="text-white text-2xl" /> },
//     { name: "Education", color: "bg-orange-300", icon: <FaBook className="text-white text-2xl" /> },
//     { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
//     { name: "Technology", color: "bg-cyan-300", icon: <FaMicrochip className="text-white text-2xl" /> },
//     { name: "News", color: "bg-rose-300", icon: <FaNewspaper className="text-white text-2xl" /> },
//     { name: "Science", color: "bg-orange-200", icon: <FaFlask className="text-white text-2xl" /> },
//     { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
// ];

// export default function CategoryGrid() {

//     const [topCategoryData, setTopCategoryData] = useState();
//     const [allCategoryData, setAllCategoryData] = useState();

//     const getCategoryData = async () => {
//         try {
//             const res = await handleCategory();
//             console.log(res.response.data.featured_contents, "result");
//             setTopCategoryData(res.response.data.featured_contents);
//             setAllCategoryData(res.response.data.contents);
//         } catch (error) {
//             console.log("Error in login api", error);
//             showError("Category data fetch failed");
//         }
//     }

//     useEffect(() => {
//         getCategoryData();
//     }, [])

//     return (
//         <div className="max-w-4xl p-6 border border-gray-200 rounded-lg">
//             <div className="flex items-center mb-6">
//                 <div>
//                     <BiCategory className="w-6 h-6 text-gradient-to-r text-purple-500 text-pink-500 rounded-md mr-2" />
//                 </div>
//                 <h1 className="text-2xl font-bold text-black dark:text-gray-100">Top Category</h1>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//                 {topCategoryData?.map((category, index) => (
//                     <div
//                         key={index}
//                         style={{ backgroundColor: category["bg-color"], color: category["text-color"] }}
//                         className="flex items-center justify-between p-4 rounded-2xl"
//                     >
//                         <span className="text-base font-medium">{category.conName}</span>

//                         <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
//                             <Image
//                                 src={category.imgIrl}
//                                 alt={category.conName}
//                                 width={40}
//                                 height={40}
//                                 className="object-contain"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>



//             <div className="flex items-center mb-6">
//                 <div>
//                     <BiCategory className="w-6 h-6 text-gradient-to-r text-purple-500 text-pink-500 rounded-md mr-2" />
//                 </div>
//                 <h1 className="text-2xl font-bold text-black dark:text-gray-100">All Category</h1>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//                 {allCategoryData?.map((category, index) => (
//                     // <div
//                     //     key={index}
//                     //     style={{ backgroundColor: category["bg-color"], color: category["text-color"] }}
//                     //     className="flex items-center justify-between p-4 rounded-2xl"
//                     // >
//                     //     <span className="text-base font-medium">{category.conName}</span>
//                     //     {/* {category.icon} */}
//                     //     <Image
//                     //         src={category.imgIrl}
//                     //         alt={category.conName}
//                     //         width={40}
//                     //         height={40}
//                     //         className="object-cover"
//                     //     />
//                     // </div>
//                     <div className="grid grid-cols-2 gap-4">
//                         {topCategoryData?.map((category, index) => (
//                             <div className="grid grid-cols-2 gap-4">
//                                 {topCategoryData?.map((category, index) => (
//                                     <div
//                                         key={index}
//                                         style={{
//                                             backgroundColor: category["bg-color"],
//                                             color: category["text-color"],
//                                         }}
//                                         className="flex items-center gap-4 p-4 rounded-2xl"
//                                     >
//                                         <div className="w-10 h-10 relative">
//                                             <Image
//                                                 src={category.imgIrl}
//                                                 alt={category.conName}
//                                                 fill
//                                                 className="object-contain"
//                                             />
//                                         </div>
//                                         <span className="text-sm font-semibold">{category.conName}</span>
//                                     </div>
//                                 ))}
//                             </div>

//                         ))}
//                     </div>

//                 ))}
//             </div>
//         </div>
//     );
// }

import { BiCategory } from 'react-icons/bi';
import { FaGlobe, FaUsers, FaPalette, FaBook, FaBriefcase, FaMicrochip, FaNewspaper, FaFlask } from 'react-icons/fa';

const categories = [
    { name: "Society & Culture", color: "bg-teal-200", icon: <FaGlobe className="text-white text-2xl" /> },
    { name: "Kids & Family", color: "bg-blue-200", icon: <FaUsers className="text-white text-2xl" /> },
    { name: "Arts", color: "bg-purple-300", icon: <FaPalette className="text-white text-2xl" /> },
    { name: "Education", color: "bg-orange-300", icon: <FaBook className="text-white text-2xl" /> },
    { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
    { name: "Technology", color: "bg-cyan-300", icon: <FaMicrochip className="text-white text-2xl" /> },
    { name: "News", color: "bg-rose-300", icon: <FaNewspaper className="text-white text-2xl" /> },
    { name: "Science", color: "bg-orange-200", icon: <FaFlask className="text-white text-2xl" /> },
    { name: "Education", color: "bg-orange-300", icon: <FaBook className="text-white text-2xl" /> },
    { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
    { name: "Technology", color: "bg-cyan-300", icon: <FaMicrochip className="text-white text-2xl" /> },
    { name: "News", color: "bg-rose-300", icon: <FaNewspaper className="text-white text-2xl" /> },
    { name: "Science", color: "bg-orange-200", icon: <FaFlask className="text-white text-2xl" /> },
    { name: "Business", color: "bg-purple-400", icon: <FaBriefcase className="text-white text-2xl" /> },
];

export default function CategoryGrid() {
    return (
        <div className="max-w-4xl p-6 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-6">
                <div>
                    <BiCategory className="w-6 h-6 text-gradient-to-r text-purple-500 text-pink-500 rounded-md mr-2" />
                </div>
                <h1 className="text-2xl font-bold text-black dark:text-gray-100">Category</h1>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`flex justify-between items-center ${category.color} text-white p-6 rounded-2xl`}
                    >
                        <span>{category.name}</span>
                        {category.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}
