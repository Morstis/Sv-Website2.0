import { BehaviorSubject } from 'rxjs';

export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const REMOVE = 'REMOVE';

type Id = string | number;
interface Identifiable {
  id?: Id;
}
interface Action {
  type: string;
  data: any;
}
export class Store<T extends Identifiable> {
  private items = [];
  items$ = new BehaviorSubject<T[]>([]);
  dispach(action: Action) {
    this.items = this._reduce(this.items, action);
    this.items$.next(this.items);
  }
  private _reduce(items: T[], action: Action) {
    switch (action.type) {
      case LOAD:
        return [...action.data];
      case ADD:
        return [...items, action.data];
      case EDIT:
        return items.map(item => {
          const editedItem = action.data;
          if (item.id !== editedItem.id) {
            return item;
          }
          return editedItem;
        });
      case REMOVE:
        return items.filter(item => item.id !== action.data.id);

      default:
        return items;
    }
  }
}
