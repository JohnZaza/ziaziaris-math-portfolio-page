// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import slide2 from "@/assets/slide2.png";
// import { motion } from "framer-motion";

// export const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false);
//     }
//   };

//   const changeLanguage = (lng: "en" | "el") => {
//     i18n.changeLanguage(lng);
//   };

//   const navItems = [
//     { id: "home", label: t("nav.home") },
//     { id: "about", label: t("nav.about") },
//     { id: "services", label: t("nav.services") },
//     { id: "exams", label: t("nav.exams") },
//     { id: "contact", label: t("nav.contact") },
//   ];

//   return (
//     <motion.nav
//       className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100"
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* 👤 Logo + Όνομα */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center space-x-3 group cursor-pointer"
//             onClick={() => scrollToSection("home")}
//           >
//             <motion.img
//               src={slide2}
//               alt="Logo"
//               className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-400 group-hover:ring-indigo-500"
//               whileHover={{ rotate: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//             <motion.span
//               className="font-extrabold text-xl text-blue-900 group-hover:text-indigo-600"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               {t("navbar.name")}
//             </motion.span>
//           </motion.div>

//           {/* 🖥 Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-gray-700 font-medium px-3 py-2 rounded-md hover:text-blue-700 hover:bg-blue-100 transition"
//               >
//                 {item.label}
//               </motion.button>
//             ))}

//             {/* 🌐 Language Selector */}
//             <motion.select
//               onChange={(e) => changeLanguage(e.target.value as "en" | "el")}
//               value={i18n.language}
//               className="border border-gray-300 rounded px-2 py-1 text-sm bg-white hover:ring-2 hover:ring-indigo-500 transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <option value="en">🇬🇧 EN</option>
//               <option value="el">🇬🇷 EL</option>
//             </motion.select>
//           </div>

//           {/* 📱 Mobile Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* 📱 Mobile Nav */}
//         {isOpen && (
//           <motion.div
//             className="md:hidden"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="px-2 pt-2 pb-3 space-y-2 bg-white border-t border-blue-100">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   whileHover={{ scale: 1.05 }}
//                   className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700"
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}

//               {/* 🌐 Mobile Language */}
//               <div className="flex justify-center gap-4 pt-4 border-t border-blue-100">
//                 {["en", "el"].map((lng) => (
//                   <button
//                     key={lng}
//                     onClick={() => changeLanguage(lng as "en" | "el")}
//                     className={`text-sm px-3 py-1 rounded-full border ${i18n.language === lng
//                         ? "bg-blue-600 text-white"
//                         : "text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
//                       }`}
//                   >
//                     {lng.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import slide2 from "@/assets/slide2.png";
import { motion } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const changeLanguage = (lng: "en" | "el") => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "exams", label: t("nav.exams") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 👤 Logo + Όνομα */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <motion.img
              src={slide2}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-400 group-hover:ring-indigo-500"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.span
              className="font-extrabold text-xl text-blue-900 group-hover:text-indigo-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t("navbar.name")}
            </motion.span>
          </motion.div>

          {/* 🖥 Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 font-medium px-3 py-2 rounded-md hover:text-blue-700 hover:bg-blue-100 transition"
              >
                {item.label}
              </motion.button>
            ))}

            {/* 🌐 Language Selector (Greek first) */}
            <motion.select
              onChange={(e) => changeLanguage(e.target.value as "en" | "el")}
              value={i18n.language}
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-white hover:ring-2 hover:ring-indigo-500 transition"
              whileHover={{ scale: 1.05 }}
            >
              <option value="el">🇬🇷 EL</option>
              <option value="en">🇬🇧 EN</option>
            </motion.select>
          </div>

          {/* 📱 Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Nav */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white border-t border-blue-100">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* 🌐 Mobile Language (Greek first) */}
              <div className="flex justify-center gap-4 pt-4 border-t border-blue-100">
                {["el", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng as "en" | "el")}
                    className={`text-sm px-3 py-1 rounded-full border ${i18n.language === lng
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                      }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
