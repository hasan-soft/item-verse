import { UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" flex items-center overflow-hidden bg-gradient-to-r from-[#4A00E0] via-purple-600 to-[#8E2DE2]">
      <div className="container mx-auto py-32 px-6">
        <div className="text-center gap-12 items-center">
          {/* Left Column - Image */}


          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6">
              <UsersRound className="h-4 w-4 text-white mr-2" />
              <span className="text-sm font-xl text-white">
                Trusted by 50,000+ learners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your{" "}Learning Journey


            </h1>

            <p className="text-xl mx-auto text-white mb-8 max-w-lg">
              Access curated study resources, interview packs, and learning materials
              designed to accelerate your growth as a student or developer.
            </p>

            <div className="flex justify-center items-center text-center gap-4">
              <Link
                href="/resources"
                className="group inline-flex items-center justify-center bg-white px-8 py-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold text-black">Explore Resources</span>
              </Link>

              <Link
                href="#how-it-works"
                className="group inline-flex items-center justify-center bg-white px-8 py-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold text-black">How It Works</span>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;