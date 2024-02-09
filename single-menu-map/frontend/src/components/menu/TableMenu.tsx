import { useEffect, useState } from "react";
import { get } from "../services/testing.service";
import RowMenu from "./RowMenu";

export type Menu = {
  id: number;
  title: string;
  description: string;
};

const TableMenu = () => {
  const [menus, setMenus] = useState<Menu[] | undefined>();
  const URL = "";

  async function getMenus() {
    const { data } = await get(URL);
    setMenus(data);
  }

  useEffect(() => {
    try {
      getMenus();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <table className="container mx-auto p-2 border">
      <thead className="px-4 py-2">
        <th>id</th>
        <th>title</th>
        <th>description</th>
      </thead>
      <tbody>
        {menus!.map((menu) => {
          return (
            <RowMenu
              key={menu.id}
              id={menu.id}
              title={menu.title}
              description={menu.description}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TableMenu;
