import Arrow from "../Arrow/Arrow";

const Menu = () => {
  return (
    <ul className="p-[10px] flex flex-col gap-4">
      <li className="pr-1 relative flex justify-between items-center text-slate-800 font-medium text-xl transition group">
          Товары
          <Arrow className="hidden" />
      </li>
      <li className="pr-1 relative flex justify-between items-center text-slate-800 font-medium text-xl transition group">
          Алгоритмы
          <Arrow className="" />
      </li>
    </ul>
  );
};

export default Menu;
