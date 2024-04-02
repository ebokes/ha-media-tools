import Link from "next/link";
import React from "react";

interface ToolData {
  id: number;
  title: string;
  desc: string;
  path: string;
}

const HomePage = () => {
  const toolsData = [
    {
      id: 1,
      title: "QR Code Generator",
      desc: " Generate QR codes quickly and easily for your website.",
      path: "/qr-code-generator",
    },
    {
      id: 2,
      title: "Designer",
      desc: "Create and edit text designs that can be reused across multiple projects",
      path: "/designer",
    },
  ];

  return (
    <div>
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Media Toolkit</h1>
        <p className="text-lg text-blue-200 mb-8">
          Enhance your media production with our powerful tools
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[900px]">
          {toolsData.map(({ id, title, desc, path }: ToolData) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                {title}
              </h2>
              <p className="text-gray-700">{desc}</p>
              <Link href={path}>
                <div className="bg-blue-700 py-2 px-3 rounded-lg mt-4 max-w-[200px] w-full mx-auto ">
                  Get Started
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
