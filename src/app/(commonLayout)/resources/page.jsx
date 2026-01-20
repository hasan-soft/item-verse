import React from 'react';
import ResourceCard from './_components/ResourceCard';

const getResources = async () => {
    const res = await fetch(
        'https://study-shelf-chi.vercel.app/resource.json',
        { cache: 'no-store' }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch resources');
    }
    // custom delay
    await new Promise((resolve) => setTimeout(() => {
        resolve();
    }, 3000)
    );
    return res.json();
};

const Resources = async () => {
    const resources = await getResources();
    // console.log(resources)

    return (
        <div className="p-6 bg-white">
            {/* Page Header */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Lesson Resources
                </h1>
                <p className="text-gray-600">
                    Browse our curated collection of learning materials
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    resources?.map(resource => {
                        return <ResourceCard key={resource?.id} resource={resource}></ResourceCard>
                    })
                }
            </div>
            {/* Count */}
            <div className="mt-12 text-center text-gray-500">
                Showing {resources.length} resources
            </div>
        </div>
    );
};

export default Resources;
