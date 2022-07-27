export interface ITodoItemData extends ITodoInputData {
  completed: boolean;
}

export interface ITodoInputData {
  textContent: string;
  key: number;
}
