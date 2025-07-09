
// import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// export const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://formspree.io/f/xrbkrppj", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         }),
//       });

//       if (response.ok) {
//         toast({
//           title: "Message Sent!",
//           description: "Thank you for your message. I'll get back to you within 24 hours.",
//         });
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } else {
//         toast({
//           title: "Error",
//           description: "Something went wrong. Please try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Network Error",
//         description: "Please check your internet connection and try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <section id="contact" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to start your mathematics journey? I'd love to hear from you and discuss how I can help you achieve your goals!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <Mail className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
//                   <p className="text-gray-600">geoziaziaris@gmail.com</p>
//                   <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <Phone className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
//                   <p className="text-gray-600">+30 (698) 288-1164</p>
//                   <p className="text-sm text-gray-500">Call or text for quick questions</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <Clock className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
//                   <p className="text-gray-600">Monday - Saturday</p>
//                   <p className="text-sm text-gray-500">Flexible scheduling to fit your needs</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
//                   <p className="text-gray-600">Online & In-Person</p>
//                   <p className="text-sm text-gray-500">Serving students worldwide via video calls</p>
//                   <p className="text-sm text-gray-500">Μυστρά 54, Γλυφάδα 165 61 </p>

//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="Your full name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="your@email.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <select
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                 >
//                   <option value="">Select a subject</option>
//                   <option value="tutoring">Individual Tutoring</option>
//                   <option value="group">Group Sessions</option>
//                   <option value="exam">Exam Preparation</option>
//                   <option value="general">General Inquiry</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   placeholder="Tell me about your math goals and how I can help you..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbkrppj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: t("contact.toast.success.title"),
          description: t("contact.toast.success.description"),
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: t("contact.toast.error.title"),
          description: t("contact.toast.error.description"),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("contact.toast.network.title"),
        description: t("contact.toast.network.description"),
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("contact.connectTitle")}</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t("contact.email.title")}</h4>
                  <p className="text-gray-600">geoziaziaris@gmail.com</p>
                  <p className="text-sm text-gray-500">{t("contact.email.note")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t("contact.phone.title")}</h4>
                  <p className="text-gray-600">+30 (698) 288-1164</p>
                  <p className="text-sm text-gray-500">{t("contact.phone.note")}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t("contact.availability.title")}</h4>
                  <p className="text-gray-600">{t("contact.availability.days")}</p>
                  <p className="text-sm text-gray-500">{t("contact.availability.note")}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t("contact.location.title")}</h4>
                  <p className="text-gray-600">{t("contact.location.mode")}</p>
                  <p className="text-sm text-gray-500">{t("contact.location.note")}</p>
                  <p className="text-sm text-gray-500">Μυστρά 54, Γλυφάδα 165 61</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.form.title")}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t("contact.form.selectSubject")}</option>
                  <option value="tutoring">{t("contact.form.subjects.tutoring")}</option>
                  <option value="group">{t("contact.form.subjects.group")}</option>
                  <option value="exam">{t("contact.form.subjects.exam")}</option>
                  <option value="general">{t("contact.form.subjects.general")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t("contact.form.sendButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
