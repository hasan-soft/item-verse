import Image from "next/image";
import { Clock, Target, Users, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time-Efficient Learning",
      description: "Learn together with motivated students worldwide, share ideas, exchange knowledge, and grow faster by collaborating with a global community that inspires learning, creativity, and continuous improvement.",
      color: "bg-gradient-to-r from-purple-500 to-purple-900",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with curious learners across the globe and grow together through shared knowledge, collaboration, and a passion for continuous learning.",
      color: "bg-gradient-to-r from-purple-500 to-purple-900",
    },
    {
      icon: Award,
      title: "Quality Resources",
      description: "Spend less time searching and more time learning—focus on what truly matters. With everything organized and easy to access, you can explore new topics faster, build skills efficiently, and turn curiosity into real knowledge without unnecessary distractions.",
      color: "bg-gradient-to-r from-purple-500 to-purple-900",
    },
  ];

  return (
    <section className="py-10 bg-white mb-16">
      <div className="container pt-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ItemVerse?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover the advantages of our curated learning platform
          </p>
        </div>

        {/* Main Grid - Equal Height Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">
          {/* Left: Benefits Cards */}
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-xl border border-gray-200 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer min-h-30 flex"
                >
                  <div className="flex items-start gap-6 w-full">
                    {/* Icon Container with Increased Spacing */}
                    <div className={`p-4 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Text Content with Increased Spacing */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0A5C36] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                      </p>
                      
                     
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image Section */}
          <div className="relative group h-full">
            <div className="relative h-full rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
              {/* Image Container with Fixed Dimensions */}
              <div className="relative w-full h-full min-h-150 md:min-h-175 lg:min-h-170">
                <Image
                  src="https://i.ibb.co.com/w3QfXYQ/learn.jpg"
                  alt="Why choose ItemVerse"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                
                
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;