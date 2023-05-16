import { createContext, useContext } from 'react';
import { observable, action } from 'mobx';

export interface User {
  username: string;
  password: string;
}

export class LocalStore {
  @observable users: User[] = [
    { username: 'Virgiliu', password: 'password123' },
    { username: 'react', password: '12@34' },
    { username: 'admin', password: 'admin' },
  ];
}

const StoreContext = createContext(new LocalStore());
export const useStore = () => useContext(StoreContext);