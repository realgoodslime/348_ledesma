import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen md:flex-row lg:flex-row xl:flex-row">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6 text-gray-800">
        <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04081908/small-business-website.png" alt="Image" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6 text-gray-800">
        <h3 className="text-3xl font-bold leading-tight mb-4">Welcome to my website</h3>
        <p className="text-lg leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
      </div>
    </div>
  );
}
