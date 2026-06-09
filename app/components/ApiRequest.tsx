"use client";
import { useState, useEffect } from "react";
export default function ApiRequest() {
  // تعريف الـ State لتخزين البيانات
  const [todo, setTodo] = useState<Todo>({ id: 0 });

  type Todo = {
    id: number;
  };

  useEffect(() => {
    // وظيفة لجلب البيانات من API خارجي
    const fetchTodo = async () => {
      const response = await fetch("https://dummyjson.com/todos/1");
      const result = await response.json();
      setTodo(result); // تحديث الحالة بالبيانات الجديدة
    };

    fetchTodo();
  }, []); // مصفوفة فارغة لضمان تشغيل الكود مرة واحدة عند تحميل المكون
  console.log(todo.id);
  return (
    <>
      <h1>{todo.id}</h1>{" "}
    </>
  );
}
