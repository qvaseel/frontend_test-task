import Sidebar from "@/components/SideBar/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Товары",
};

export default function Main() {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        
      </main>
    </div>
  );
}
