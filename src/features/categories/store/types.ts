export interface ICategory {
  id: number;
  title: string;
  urlImage: string;
}

export interface INewCategory extends Omit<ICategory, 'id'> {
  // INewCategory наследует все свойства ICategory, кроме 'id'
}