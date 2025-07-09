import { Calculator, BookOpen, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import slide2 from "../assets/slide2.png";
import bg from "../assets/bg.png";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 🌌 Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // αυξημένη
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />

      {/* 🧩 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-white-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>
            {/* <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-white-500 to-indigo-600 rounded-full flex items-center justify-center">
              <img src={slide2} alt="Logo" />
            </div> */}
            <div
              className="relative w-32 h-32 mx-auto bg-gradient-to-br from-white-500 to-indigo-600 rounded-full flex items-center justify-center group cursor-pointer transition-transform"
            >
              <img
                src={slide2}
                alt="Logo"
                className="rounded-full w-full h-full object-cover transition-transform duration-500 ease-out group-hover:animate-zoom-bounce"
              />
            </div>


          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("hero.name")}
          </h1>

          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            {t("hero.title")}
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("hero.cta")}
            </button>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {t("hero.learnMore")}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">{t("hero.stats.students")}</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">{t("hero.stats.success")}</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Calculator className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">{t("hero.stats.experience")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
