import { Button } from "@mui/material";
import classNames from "classnames";
import { baseStyles } from "~/constants";
import { Theme, useTheme } from "~/utils/theme-provider";

const Index = () => {
  const [, setTheme] = useTheme();

  return (
    <>
      <span className={classNames(baseStyles.layoutTheme, "w-full h-full")}>
        Hello Dashboard
        <Button
          variant="contained"
          onClick={() =>
            setTheme((prevTheme) =>
              prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
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
