export type MenuItem = {
  key: string;
  name: string;
  children?: MenuItem[];
};

export type MetaType = {
  menu: MenuItem[];
};
