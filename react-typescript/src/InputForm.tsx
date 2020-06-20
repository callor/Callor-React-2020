import React, { useState, useRef } from "react";

interface InputFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

function InputForm({ onSubmit }: InputFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  // e 값을 무엇으로 설정해야할까요?
  // 일단 모를떄는 any 로 설정합니다.

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 여기도 모르니까 any 로 하겠습니다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    }); // 초기화
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} ref={inputRef} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default InputForm;
