"use client"
import { useState, FormEvent } from "react";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      className="bg-slate-200 px-8 py-7 rounded-[10px] shadow-md w-[360px] flex flex-col gap-10"
    >
      <h2 className="text-2xl font-medium text-center text-zinc-900">Авторизация</h2>
      <div className="flex flex-col gap-9 pt-8 pb-[10px]">
        <Input label="Почта" type="email" value={email} id="email" placeholder="Почта" onChange={(e) => setEmail(e.target.value)}/>
        <Input label="Пароль" type="password" value={password} id="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="block mx-auto">
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};

export default Form;
