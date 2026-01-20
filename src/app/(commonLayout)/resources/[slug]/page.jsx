import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, User, FileText, Tag, Globe, Download, Share2, Bookmark, Layers, Award, Calendar, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const getSingleResource = async (id) => {
  const res = await fetch(
    'https://study-shelf-chi.vercel.app/resource.json',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch resources');
  }

  const data = await res.json();
  return data.find((item) => item.id === id);
};

const ResourceDetails = async ({ params }) => {
    const { slug } = await params;
    const resource = await getSingleResource(slug);

    if (!resource) {
        return <h2 className='text-center flex justify-center items-center font-bold'>Resource Not Found..</h2>
    }

    const isFree = resource.price.toLowerCase() === "free";

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="border-b border-gray-200 py-4">
                <div className="container mx-auto px-4">
                    <Link
                        href="/resources"
                        className="inline-flex items-center text-gray-600 hover:text-purple-800 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Resources
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        {/* Image */}
                        <div className="mb-8">
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Title & Category */}
                        <div className="mb-6">
                            <div className="inline-flex items-center px-4 py-2 bg-purple-800 rounded-full text-sm font-semibold mb-4">
                                {resource.category}
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {resource.title}
                            </h1>
                            <p className="text-xl text-gray-600">
                                {resource.shortDescription}
                            </p>
                        </div>

                        {/* Full Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {resource.fullDescription}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Topics Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {resource.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                                    >
                                        <Tag className="h-4 w-4 mr-2" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-8">
                            {/* Price & Actions */}
                            <div className="mb-6">
                                <div className={`text-center py-3 text-xl font-bold mb-4 ${
                                    isFree 
                                        ? 'bg-gradient-to-r from-purple-800 to-purple-500 text-white' 
                                        : 'bg-gradient-to-r from-purple-800 to-purple-400 text-white'
                                }`}>
                                    {isFree ? 'FREE DOWNLOAD' : resource.price}
                                </div>
                                
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-gradient-to-r from-purple-800 to-purple-600 text-white py-3 transition-colors font-semibold">
                                        {isFree ? 'Download Now' : 'Get Access'}
                                    </button>
                                </div>
                            </div>

                            {/* Resource Details */}
                            <div className="space-y-4 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Resource Details</h3>
                                
                                <div className="flex items-center text-gray-600">
                                    <User className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Author</div>
                                        <div className="font-medium">{resource.author}</div>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Last Updated</div>
                                        <div className="font-medium">
                                            {new Date(resource.lastUpdated).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Format</div>
                                        <div className="font-medium">{resource.format}</div>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <Layers className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Level</div>
                                        <div className="font-medium">{resource.level}</div>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-500">Language</div>
                                        <div className="font-medium">{resource.language}</div>
                                    </div>
                                </div>

                                {resource.pages && (
                                    <div className="flex items-center text-gray-600">
                                        <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                                        <div>
                                            <div className="text-sm text-gray-500">Pages</div>
                                            <div className="font-medium">{resource.pages} pages</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* What You'll Get */}
                            <div className="pt-6 border-t border-gray-200">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">What You&#39;ll Get</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-purple-800 mr-2" />
                                        Complete {resource.format} resource
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-purple-800 mr-2" />
                                        {resource.level} level content
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-purple-800 mr-2" />
                                        Regular updates
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <CheckCircle className="h-5 w-5 text-purple-800 mr-2" />
                                        Practical examples
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceDetails;