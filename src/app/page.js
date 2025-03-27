import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-6 w-full flex justify-between items-center px-8 rounded-lg">
        <h1 className="text-xl font-bold text-blue-600 italic">Well Being</h1>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/login" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
            Log in
          </Link>
          <Link href="/calm-zone" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
            Calm zone
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center p-12 space-y-6 md:space-y-0 md:space-x-12">
        {/* Bunny Image */}
        <div className="w-64 h-64 md:w-150 md:h-150 relative">
          <Image src="/bunny2.png" alt="Cute Bunny" layout="fill" objectFit="contain" />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-gray-700">Hey Cookies, it&apos;s</h2>
          <h1 className="text-4xl font-bold text-blue-600">WELL <span className="text-gray-700">BEING</span></h1>
          <p className="text-gray-700 mt-4 mb-10">Your AI Mental Health Companion for Your Happier and Healthy Mind</p>
          <Link href="/chat" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-colors">
            Chat Now
          </Link>
        </div>
      </div>
    </div>
  );
}
