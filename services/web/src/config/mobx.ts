import { createContext, useContext } from "react";
import { configurePersistable } from 'mobx-persist-store';
import { injectStores } from '@mobx-devtools/tools';

import { CalendarStore } from "@/modules/calendar";

const calendarStore = new CalendarStore()

export const store = {
  calendarStore
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext)
}

configurePersistable(
  {
    storage: window.localStorage,
    expireIn: 3600000 * 24 * 30,
    removeOnExpiration: true,
    stringify: false,
    debugMode: true,
  },
  { delay: 0, fireImmediately: false }
);

injectStores(store);