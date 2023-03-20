import { SidebarItem } from "./SidebarItem";

export const SideBar = () => {
  const sidebarItem = [
    {
      itemName: "catalog",
      subItem: [
        {
          itemName: "catalog",
          itemPath: "catalog",
        },
      ],
    },
    {
      itemName: "categories",
      subItem: [
        {
          itemName: "category",
          itemPath: "category",
        },
      ],
    },
    {
      itemName: "sub categories",
      subItem: [
        {
          itemName: "sub categories",
          itemPath: "sub-category",
        },
      ],
    },
    {
      itemName: "color",
      subItem: [
        {
          itemName: "color",
          itemPath: "color",
        },
      ],
    },
    {
      itemName: "Material",
      subItem: [
        {
          itemName: "material",
          itemPath: "material",
        },
      ],
    },
    {
      itemName: "products",
      subItem: [
        {
          itemName: "products",
          itemPath: "products",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <nav className="side-nav">
        <ul className="nav-list">
          {sidebarItem.map((item, index) => (
            <SidebarItem
              key={index}
              itemName={item.itemName}
              subItem={item.subItem}
              itemPath={item.itemPath}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
