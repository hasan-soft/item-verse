
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const getFeaturedResources = async () => {
    const res = await fetch(
        'https://study-shelf-chi.vercel.app/resource.json',
        { cache: 'no-store' }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch resources');
    }
    const resources = await res.json();
    return resources.slice(0, 5);
};

const FeaturedResources = async () => {
    const resources = await getFeaturedResources();
    
    if (!resources || resources.length === 0) {
        return null;
    }

    const mainResource = resources[0];
    const sideResources = resources.slice(1, 5);
    const isFree = mainResource.price.toLowerCase() === "free";

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        Featured Lessons
                    </h2>
                    <p className="text-gray-600">Curated study materials for effective learning</p>
                </div>

                {/* Featured Resources Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Main Featured Resource */}
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {/* Image */}
                        <div className="relative h-64 w-full">
                            <Image
                                src={mainResource.image}
                                alt={mainResource.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            {/* Category & Price */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 bg-fuchsia-300 text-gray-800 text-xs font-semibold rounded-full">
                                    {mainResource.category}
                                </span>
                                <span className={`px-3 py-1 rounded-tl-xl rounded-br-xl text-xs font-bold text-white ${
                                    isFree ? 'bg-purple-800' : 'bg-purple-800'
                                }`}>
                                    {isFree ? 'FREE' : mainResource.price}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {mainResource.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {mainResource.shortDescription}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {mainResource.fullDescription}
                            </p>
                            <Link
                                href={`/resources/${mainResource.id}`}
                                className="inline-flex items-center mt-6 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                            >
                                View Full Resource
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - 4 Small Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {sideResources.map((resource, index) => {
                            const isFree = resource.price.toLowerCase() === "free";
                            return (
                                <div 
                                    key={resource.id}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
                                >
                                    {/* Image */}
                                    <div className="relative h-32">
                                        <Image
                                            src={resource.image}
                                            alt={resource.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Price Badge */}
                                        <div className="absolute top-2 right-2">
                                            <span className={`px-2 py-1 rounded-tl-xl rounded-br-xl text-xs font-bold text-white ${
                                                isFree ? 'bg-purple-800' : 'bg-purple-800'
                                            }`}>
                                                {isFree ? 'FREE' : resource.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                                            {resource.title}
                                        </h4>
                                        <p className="text-gray-600 text-xs line-clamp-2">
                                            {resource.shortDescription}
                                        </p>
                                        <Link
                                            href={`/resources/${resource.id}`}
                                            className="inline-block mt-3 text-purple-600 text-lg font-medium hover:text-purple-800 transition-colors"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                    <Link
                        href="/resources"
                        className="inline-flex items-center bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-3 rounded-tl-xl rounded-br-xl transition-colors font-semibold"
                    >
                        View All Resources
                        <ChevronRight className="h-5 w-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedResources;