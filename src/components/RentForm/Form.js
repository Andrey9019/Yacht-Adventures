import React, { useState } from "react";
import Button from "../ui/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });

  // Функція для оновлення стану форми при введенні даних
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Перевірка форми на валідність
  const validateForm = () => {
    const { fullName, email, phone, comment } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/; // Можна адаптувати для більшої гнучкості

    if (!fullName) return "Full Name is required";
    if (!emailPattern.test(email)) return "Invalid email format";
    if (!phonePattern.test(phone)) return "Invalid phone number";
    if (!comment) return "Comment is required";

    return null;
  };

  return (
    <div className="flex flex-col w-full max-w-[378px] mx-auto">
      <label className="text-sm">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 p-1  focus:border-gray-500"
        placeholder=""
      />

      <label className="text-sm">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 p-1  focus:border-gray-500"
        placeholder=""
      />

      <label className="text-sm">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 p-1  focus:border-gray-500"
        placeholder=""
      />

      <label className="text-sm">Comment</label>
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="bg-transparent border-b border-white outline-none p-1 mb-6 h-14 focus:border-gray-500"
        placeholder=""
      />

      <Button
        text="Send"
        onClick={() => alert("Send Button Clicked")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 0.169922L18 4.50005L12.5 8.83018V5.25005L0 5.25005L0 3.75005L12.5 3.75005V0.169922Z"
              fill="#F6F5EF"
            />
          </svg>
        }
      />
    </div>
  );
};

export default Form;
