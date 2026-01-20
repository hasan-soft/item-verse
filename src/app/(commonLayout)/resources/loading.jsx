// components/ResourceSkeleton.tsx
const ResourceSkeleton = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 h-105 overflow-hidden animate-pulse"
                    >
                        {/* Image skeleton */}
                        <div className="h-48 bg-linear-to-br from-gray-200 to-gray-300" />

                        {/* Content skeleton */}
                        <div className="p-6">
                            {/* Title skeleton */}
                            <div className="h-6 bg-gray-200 rounded-full mb-3 w-3/4" />

                            {/* Description skeleton */}
                            <div className="space-y-2 mb-4">
                                <div className="h-4 bg-gray-200 rounded-full" />
                                <div className="h-4 bg-gray-200 rounded-full w-5/6" />
                                <div className="h-4 bg-gray-200 rounded-full w-4/6" />
                            </div>

                            {/* Category badge skeleton */}
                            <div className="h-6 bg-gray-200 rounded-full w-20 mb-6" />

                            {/* Button skeleton */}
                            <div className="mt-8 pt-4 border-t border-gray-100">
                                <div className="h-10 bg-linear-to-r from-gray-200 to-gray-300 rounded-tl-xl rounded-br-xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceSkeleton;