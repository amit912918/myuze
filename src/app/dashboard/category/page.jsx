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
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mr-2"></div>
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
