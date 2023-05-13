import { Button, FormControl, TextField } from "@mui/material";
import classNames from "classnames";
import { baseStyles } from "~/constants";
import { Theme, useTheme } from "~/utils/theme-provider";

const Index = () => {
  const [, setTheme] = useTheme();
  return (
    <div
      className={classNames(
        "w-full h-screen flex justify-center items-center",
        baseStyles.layoutTheme
      )}
    >
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
      <span className="font-bold italic text-5xl">Hello Profile Plus</span>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          color="info"
        />
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          color="info"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          color="info"
        />
      </FormControl>
    </div>
  );
};

export default Index;
