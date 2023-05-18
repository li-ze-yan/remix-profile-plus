import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

export interface SystemState {
  collapsed: boolean;
  theme: "dark" | "light";
  saveTheme: (theme: "dark" | "light") => void;
  initTheme: (theme: "dark" | "light") => void;
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
        initTheme: (theme) =>
          set(() => ({
            theme,
          })),
      }),
      {
        name: "systemStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useSystemStore;
