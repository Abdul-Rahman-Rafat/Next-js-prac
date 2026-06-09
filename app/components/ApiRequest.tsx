"use client";
import { useState, useEffect } from "react";
export default function ApiRequest() {
  // تعريف الـ State لتخزين البيانات
  const [todo, setTodo] = useState({});

  useEffect(() => {
    // وظيفة لجلب البيانات من API خارجي
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const result = await response.json();
      setTodo(result); // تحديث الحالة بالبيانات الجديدة
    };

    fetchTodo();
  }, []); // مصفوفة فارغة لضمان تشغيل الكود مرة واحدة عند تحميل المكون
  // console.log(todo);
  return (
    <>
      <h1>{todo.title}</h1>
    </>
  );
}
