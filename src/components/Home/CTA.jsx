
'use client'
import { ArrowRight, Sparkles, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-5 bg-white">
      {/* Background Layer */}
      <div className="relative overflow-hidden">
        {/* Content */}
        <div className="relative">
          {/* Main CTA Card - Full Width */}
          <div className="">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="relative  ">
                  {/* Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 justify-center">
                      <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm font-semibold text-purple-600 text-center">Limited Time Offer</span>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                    Start Your Free Learning Journey Today
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xl text-gray-600 mb-16 max-w-3xl text-center">
                    Join thousands of successful learners. No credit card required. Get instant access to 50+ premium resources.
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                      { text: "500+ Study Resources", icon: "📚" },
                      { text: "Structured Learning Paths", icon: "🗺️" },
                      { text: "Progress Tracking", icon: "📊" },
                      { text: "Community Support", icon: "👥" },
                      { text: "Weekly Updates", icon: "🔄" },
                      { text: "No Hidden Fees", icon: "🛡️" },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center p-4 bg-white/50 rounded-xl border border-gray-300 hover:border-[#0A5C36] transition-colors duration-300">
                        <div className="text-2xl mr-4">{feature.icon}</div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Link
                      href="/login"
                      className="group bg-purple-600 text-white px-8 py-5 hover:bg-purple-600 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col items-center justify-center"
                    >
                      <div className="flex items-center justify-center mb-1">
                        <span className="font-semibold text-lg">Get Started Free</span>
                        <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                      <p className="text-sm text-white/80">No credit card required</p>
                    </Link>

                    <Link
                      href="/resources"
                      className="group border-2 border-gray-300 text-gray-700 px-8 py-5 hover:text-purple-800 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                    >
                      <span className="font-semibold text-lg">Browse Lesson First</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s infinite ease-in-out;
        }
        
        .animate-float-medium {
          animation: float-medium 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;