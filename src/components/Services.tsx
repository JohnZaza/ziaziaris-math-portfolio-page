
import { Users, User, BookOpen, Brain, Clock, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

// export const Services = () => {
//   const services = [
//     {
//       icon: User,
//       title: "One-on-One Tutoring",
//       description: "Personalized mathematics instruction tailored to your specific needs and learning style.",
//       features: ["Customized lesson plans", "Flexible scheduling", "Progress tracking", "Homework support"],
//       color: "blue"
//     },
//     {
//       icon: Users,
//       title: "Small Group Sessions",
//       description: "Collaborative learning environment with 2-4 students for peer interaction and support.",
//       features: ["Interactive discussions", "Peer learning", "Cost-effective", "Group problem solving"],
//       color: "green"
//     },
//     {
//       icon: BookOpen,
//       title: "Exam Preparation",
//       description: "Comprehensive preparation for standardized tests, final exams, and entrance examinations.",
//       features: ["Practice tests", "Strategy development", "Time management", "Confidence building"],
//       color: "purple"
//     },
//     {
//       icon: Brain,
//       title: "Concept Mastery",
//       description: "Deep understanding of mathematical concepts from basic arithmetic to advanced calculus.",
//       features: ["Foundation building", "Advanced topics", "Real-world applications", "Critical thinking"],
//       color: "orange"
//     }
//   ];

//   const getColorClasses = (color: string) => {
//     const colors = {
//       blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
//       green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
//       purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
//       orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
//     };
//     return colors[color as keyof typeof colors];
//   };

//   return (
//     <section id="services" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive mathematics education tailored to help you achieve your academic goals
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//               <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
//                 <service.icon className="w-8 h-8 text-white" />
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//               <p className="text-gray-600 mb-6">{service.description}</p>

//               <ul className="space-y-3">
//                 {service.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
//           <Clock className="w-12 h-12 mx-auto mb-4" />
//           <h3 className="text-2xl font-bold mb-4">Ready to Start Your Math Journey?</h3>
//           <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
//             Don't let mathematics hold you back. Whether you're struggling with basics or aiming for advanced concepts, 
//             I'm here to guide you every step of the way.
//           </p>
//           <button 
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//           >
//             Schedule Your First Session
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: User,
      title: t("services.oneOnOne.title"),
      description: t("services.oneOnOne.description"),
      features: [
        t("services.oneOnOne.features.0"),
        t("services.oneOnOne.features.1"),
        t("services.oneOnOne.features.2"),
        t("services.oneOnOne.features.3")
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: t("services.group.title"),
      description: t("services.group.description"),
      features: [
        t("services.group.features.0"),
        t("services.group.features.1"),
        t("services.group.features.2"),
        t("services.group.features.3")
      ],
      color: "green"
    },
    {
      icon: BookOpen,
      title: t("services.exam.title"),
      description: t("services.exam.description"),
      features: [
        t("services.exam.features.0"),
        t("services.exam.features.1"),
        t("services.exam.features.2"),
        t("services.exam.features.3")
      ],
      color: "purple"
    },
    {
      icon: Brain,
      title: t("services.mastery.title"),
      description: t("services.mastery.description"),
      features: [
        t("services.mastery.features.0"),
        t("services.mastery.features.1"),
        t("services.mastery.features.2"),
        t("services.mastery.features.3")
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.description")}</p>
        </div>

        {/* ...service boxes... */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <Clock className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">{t("services.cta.title")}</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t("services.cta.description")}</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {t("services.cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
};
