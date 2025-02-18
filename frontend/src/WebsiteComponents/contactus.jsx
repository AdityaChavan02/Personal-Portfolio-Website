import React, { useState } from "react";
import Modal from "react-modal"; // Import modal package
import { useTheme } from "next-themes";

export default function ContactUs() {
  const { theme } = useTheme(); // ✅ Fix: Get current theme from next-themes
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    files: [],
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false); // Alert modal state
  const [alertMessage, setAlertMessage] = useState(""); // Message inside alert
  const [isSuccess, setIsSuccess] = useState(true); // Success or Error alert

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
    setFormData({ ...formData, files });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("fullName", formData.fullName);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("company", formData.company);
    formDataObj.append("message", formData.message);

    formData.files.forEach((file) => {
      formDataObj.append("files", file);
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Success Alert
        setAlertMessage("Enquiry submitted successfully!");
        setIsSuccess(true);
        setIsAlertOpen(true);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          files: [],
        });
        setUploadedFiles([]);

        setTimeout(() => setIsAlertOpen(false), 3000); // Auto-close modal after 3s
      } else {
        // Error Alert
        setAlertMessage(`Failed: ${data.error}`);
        setIsSuccess(false);
        setIsAlertOpen(true);
        setTimeout(() => setIsAlertOpen(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An error occurred while submitting the form.");
      setIsSuccess(false);
      setIsAlertOpen(true);
      setTimeout(() => setIsAlertOpen(false), 3000);
    }
  };

  return (
    <div>
      <h2
        className={`text-4xl w-full font-mono font-bold flex items-center mt-20 mb-0 transition-all duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <span
          className={
            theme === "dark" ? "text-teal" : "text-teal"
          }
        >{`</`}</span>
        <span className={theme === "dark" ? "text-white" : "text-black"}>
          CONNECT
        </span>
        <span
          className={
            theme === "dark" ? "text-teal" : "textteal"
          }
        >{`>`}</span>
        <span
          className={`flex-1 ml-4 h-[3px] transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-teal to-transparent"
              : "bg-gradient-to-r from-teal to-transparent"
          }`}
        ></span>
      </h2>
      <div className="flex flex-row w-full">
        <form
          onSubmit={handleSubmit} // Corrected OnSubmit for Form
          className="flex flex-row w-full bg-transparent py-10 px-10 space-x-10 mt-10"
        >
          {/* Text Container */}
          <div className="flex flex-col w-1/3 justify-center space-y-20">
            <h1 className="text-4xl font-extrabold">Let's Get in Touch!</h1>
          </div>
  
          {/* Details Container */}
          <div className="flex flex-col w-1/3 space-y-12">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border-b pb-2 bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b pb-2 bg-transparent"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-b pb-2 bg-transparent"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border-b pb-2 bg-transparent"
            />
          </div>
  
          {/* Message and File Upload */}
          <div className="flex flex-col w-1/3 bg-transparent">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-full border-b pb-14 bg-transparent"
            ></textarea>
  
            <button
              type="submit" // Corrected to Trigger Form Submission
              className={`mt-10 py-3 px-4 rounded-3xl ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Custom Alert Modal */}
      <Modal
        isOpen={isAlertOpen}
        onRequestClose={() => setIsAlertOpen(false)}
        className="bg-white dark:bg-gray-900 p-6 max-w-md w-3/4 mx-auto rounded-lg shadow-xl text-center transition-all duration-300 transform scale-100"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
      >
        <h2
          className={`text-xl font-bold ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSuccess ? "✅ Success" : "❌ Error"}
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{alertMessage}</p>
        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => setIsAlertOpen(false)}
        >
          OK
        </button>
      </Modal>
    </div>
  );
}

