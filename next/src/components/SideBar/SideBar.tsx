"use client";
import React from "react";
import Logo from "../ui/Logo/Logo";
import Menu from "../ui/Menu/Menu";
import UserInfo from "../ui/UserInfo/UserInfo";

const Sidebar = () => {
  return (
    <div className="h-screen w-56 bg-slate-100 flex flex-col">
      <Logo />
      <Menu />
      <UserInfo fullName="Денис Петров" roles={["Админ", "Пользователь"]} />
    </div>
  );
};

export default Sidebar;
