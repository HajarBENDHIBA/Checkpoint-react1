import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Hajar";

function App() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          <div className="text-center mb-8">
              <h4 className="text-3xl">
                  {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
              </h4>
          </div>

          {/* Product Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
              <Image />
              <div className="mt-8">
                  <Name />
                  <Price />
                  <Description />
              </div>
          </div>
      </div>
  );
}

export default App;
