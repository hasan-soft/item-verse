'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Code, Cpu, Layout, Wrench, Briefcase, Database, Server, Zap, Compass, ChevronRight, ChevronLeft } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: "Programming",
      subtitle: "Languages & Frameworks",
      count: "30+ Resources",
      color: "bg-gradient-to-r from-lime-400 to-lime-500",
    },
    {
      icon: Cpu,
      title: "Computer Science",
      subtitle: "Algorithms & Theory",
      count: "94+ Resources",
      color: "bg-gradient-to-r from-purple-500 to-purple-900",
    },
    {
      icon: Layout,
      title: "System Design",
      subtitle: "Architecture Patterns",
      count: "25+ Resources",
      color: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      icon: Wrench,
      title: "Web Design",
      subtitle: "UI/UX & Frontend",
      count: "88+ Resources",
      color: "bg-gradient-to-r from-emerald-400 to-cyan-400",
    },
    {
      icon: Briefcase,
      title: "Career",
      subtitle: "Interview & Growth",
      count: "55+ Resources",
      color: "from-indigo-400 to-blue-400",
    },
    {
      icon: Database,
      title: "Database",
      subtitle: "SQL & NoSQL",
      count: "26+ Resources",
      color: "bg-gradient-to-r from-red-500 to-orange-500",
    },
    {
      icon: Server,
      title: "Backend",
      subtitle: "APIs & Services",
      count: "60+ Resources",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: Zap,
      title: "Productivity",
      subtitle: "Tools & Methods",
      count: "27+ Resources",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: Compass,
      title: "Tools",
      subtitle: "Development Tools",
      count: "80+ Resources",
      color: "from-yellow-400 to-amber-400",
    },
  ];

  // Group categories into chunks of 3 for carousel
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const categoryChunks = chunkArray(categories, 3);

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Learning Categories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Curated collections organized by topic to help you focus on what matters most
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            centerMode={false}
            className="categories-carousel"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0A5C36] hover:border-[#0A5C36] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0A5C36] hover:border-[#0A5C36] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <li
                className={`inline-block mx-1 ${
                  isSelected ? 'opacity-100' : 'opacity-30'
                }`}
                key={index}
                value={index}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  isSelected ? 'bg-purple-600 w-8' : 'bg-gray-300 hover:bg-gray-400 w-2'
                } transition-all duration-300`} />
              </li>
            )}
          >
            {categoryChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chunk.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={`${chunkIndex}-${index}`}
                        className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full"
                      >
                        {/* Icon with gradient background */}
                        <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${category.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-gray-500 text-base mb-3">{category.subtitle}</p>

                        {/* Count */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <span className="text-sm font-medium text-gray-600 mb-5">{category.count}</span>
                          
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Custom Carousel Styles */}
      <style jsx>{`
        .categories-carousel .control-dots {
          margin-top: 2rem !important;
          position: relative !important;
          bottom: 0 !important;
        }
        
        .categories-carousel .slide {
          padding: 0 10px !important;
          background: transparent !important;
        }
        
        /* Hide default carousel arrows */
        .categories-carousel .control-arrow {
          display: none !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .categories-carousel .slide {
            padding: 0 5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;