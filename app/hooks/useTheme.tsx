// // 切换全局主题，明亮/黑暗模式切换

// import { useEffect, useState } from "react";
// import { useSystemStore } from "~/stores/system";

// const useTheme = () => {
//   const systemStore = useSystemStore();

//   useEffect(() => {
//     if (
//       window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     ) {
//       systemStore.saveTheme("dark");
//     } else {
//       systemStore.saveTheme("light");
//     }
//   }, []);

//   return [theme, setTheme];
// };

// export default useTheme;
