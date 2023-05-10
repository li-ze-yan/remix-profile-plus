import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface SystemState {
  collapsed: boolean;
  theme: "dark" | "light";
  saveTheme: (theme: "dark" | "light") => void;
  initTheme: () => void;
}

const useSystemStore = create<
  SystemState,
  [["zustand/devtools", never], ["zustand/persist", SystemState]]
>(
  devtools(
    persist(
      (set, get) => ({
        collapsed: false,
        theme: "light",
        saveTheme: (theme) =>
          set(() => ({
            theme,
          })),
        initTheme: () =>
          set(() => ({
            theme: "light",
          })),
      }),
      {
        name: "systemStore",
        getStorage: () => sessionStorage,
      }
    )
  )
);

export default useSystemStore;
