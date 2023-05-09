// 切换全局主题，明亮/黑暗模式切换

import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<any>("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return [theme, setTheme];
};

export default useTheme;
