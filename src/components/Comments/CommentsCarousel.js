import React, { useState, useEffect } from "react";
import allComments from "../data/commentsData";

const CommentsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [commentsPerPage, setCommentsPerPage] = useState(1);

  // Зміна кількості коментарів на основі розміру екрану
  useEffect(() => {
    const updateCommentsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setCommentsPerPage(3); // Для десктопу
      } else if (window.innerWidth >= 768) {
        setCommentsPerPage(2); // Для планшету
      } else {
        setCommentsPerPage(1); // Для мобілки
      }
    };
    updateCommentsPerPage();
    window.addEventListener("resize", updateCommentsPerPage);
    return () => window.removeEventListener("resize", updateCommentsPerPage);
  }, []);

  // Обчислення кількості сторінок
  const totalPages = Math.ceil(allComments.length / commentsPerPage);

  // Автоматичне перемикання сторінок кожні 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Функція для переходу на певну сторінку
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Визначаємо індекси коментарів для поточної сторінки
  const startIndex = currentPage * commentsPerPage;
  const currentComments = allComments.slice(
    startIndex,
    startIndex + commentsPerPage
  );

  return (
    <div className="relative">
      <ul className="list-none p-0">
        {currentComments.map((comment, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={comment.imageYacht.mobileSrc}
                alt={comment.nameClient}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <p className="font-bold">{comment.nameClient}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Кнопки у вигляді крапок */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CommentsCarousel;
