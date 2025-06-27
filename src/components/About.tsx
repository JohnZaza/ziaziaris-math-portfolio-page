
import { GraduationCap, Target, Heart, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to transforming how students perceive and excel in mathematics
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Teaching Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that every student has the potential to excel in mathematics. My approach 
              focuses on building a strong foundation, developing problem-solving skills, and 
              fostering a genuine appreciation for the beauty and logic of mathematical concepts.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Through personalized instruction, real-world applications, and patient guidance, 
              I help students overcome their fears and build the confidence they need to succeed 
              not just in mathematics, but in all areas of their academic journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-gray-700">Master's in Mathematics</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 text-green-600 mr-3" />
                <span className="text-gray-700">Results-Oriented</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-red-600 mr-3" />
                <span className="text-gray-700">Passionate Teacher</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-600 mr-3" />
                <span className="text-gray-700">Proven Methods</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Me Different</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Personalized Approach:</strong> 
                  <span className="text-gray-600 ml-2">Tailored lessons that adapt to each student's learning style and pace.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Real-World Connections:</strong> 
                  <span className="text-gray-600 ml-2">Making math relevant through practical applications and examples.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Confidence Building:</strong> 
                  <span className="text-gray-600 ml-2">Creating a supportive environment where students feel safe to make mistakes and learn.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">Continuous Support:</strong> 
                  <span className="text-gray-600 ml-2">Available for questions and guidance beyond regular session times.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
