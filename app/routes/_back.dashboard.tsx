import { Button } from "@mui/material";
import classNames from "classnames";
import { baseStyles } from "~/constants";
import { useSystemStore } from "~/stores";

const Index = () => {
  const systemStore = useSystemStore();
  return (
    <>
      <span className={classNames(baseStyles.layoutTheme, "w-full h-full")}>
        Hello Dashboard
        <Button
          variant="contained"
          onClick={() =>
            systemStore.saveTheme(
              systemStore.theme === "light" ? "dark" : "light"
            )
          }
        >
          Hello World
        </Button>
      </span>
    </>
  );
};
export default Index;
