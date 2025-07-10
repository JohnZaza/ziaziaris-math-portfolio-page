import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import axios from "axios";

type Exam = {
    _id: string;
    grade: string;
    title: string;
    url: string;
};

const grades = [
    { id: "gymnasium-a", name: "A’ Γυμνασίου" },
    { id: "gymnasium-b", name: "B’ Γυμνασίου" },
    { id: "gymnasium-c", name: "Γ’ Γυμνασίου" },
    { id: "lyceum-a", name: "A’ Λυκείου" },
    { id: "lyceum-b", name: "B’ Λυκείου" },
    { id: "lyceum-c", name: "Γ’ Λυκείου" },
];

export const Exams = () => {
    const { t } = useTranslation();
    const [exams, setExams] = useState<Exam[]>([]);

    useEffect(() => {

        // axios.get("http://localhost:3001/api/exams") //test
        axios.get("https://ziaziaris-backend.onrender.com/api/exams") // prod
            // href={`https://math-backend.onrender.com${exam.url}`}


            .then((res) => {
                console.log("📦 Exams API response:", res.data);

                if (Array.isArray(res.data)) {
                    setExams(res.data);
                } else if (Array.isArray(res.data.exams)) {
                    setExams(res.data.exams);
                } else {
                    console.error("❌ Exams API did not return an array");
                }
            })
            .catch((err) => {
                console.error("❌ Error fetching exams:", err);
            });
    }, []);

    return (
        <section id="exams" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
                    {t("exams.title")}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {grades.map((grade) => (
                        <div key={grade.id} className="bg-white shadow-lg rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
                                {grade.name}
                            </h3>

                            <ul className="space-y-3">
                                {exams
                                    .filter((exam) => exam.grade === grade.id)
                                    .map((exam) => (
                                        <li key={exam._id} className="flex items-center justify-between">
                                            <span className="text-gray-700">{exam.title}</span>
                                            <a
                                                // href={`http://localhost:3001${exam.url}`}
                                                href={`https://ziaziaris-backend.onrender.com${exam.url}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                <Download className="w-5 h-5" />
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
