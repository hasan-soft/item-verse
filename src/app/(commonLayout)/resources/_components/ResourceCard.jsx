// components/ResourceCard.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ resource }) => {
    const isFree = resource.price.toLowerCase() === "free";

    return (
        <div className="group relative bg-white rounded-2xl border border-gray-200 h-105 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">

            {/* Image/Thumbnail Section */}
            <div className="relative h-48 overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-full">
                    <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-fuchsia-300 backdrop-blur-sm text-black text-xs font-semibold rounded-full border border-gray-200">
                            {resource.category}
                        </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 rounded text-sm font-bold shadow-md ${isFree
                            ? 'bg-gradient-to-r from-purple-800 to-purple-500 text-white'
                            : 'bg-gradient-to-r from-purple-800 to-purple-400 text-white'
                            }`}>
                            {isFree ? 'FREE' : resource.price}
                        </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight transition-colors">
                    {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                    {resource.shortDescription}
                </p>

                {/* View Details Button - Bottom */}
                <div className="mt-auto pt-4">
                    <Link
                        href={`/resources/${resource.id}`}
                        className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-3 rounded-tl-xl rounded-br-xl transition-all duration-300 hover:shadow-md"
                    >
                        <span className="font-semibold">View Details</span>
                        <ChevronRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 pointer-events-none" />
        </div>
    );
};

export default ResourceCard;