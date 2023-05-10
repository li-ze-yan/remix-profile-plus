import { FormControl, TextField } from "@mui/material";
import classNames from "classnames";
import { baseStyles } from "~/constants";

const Index = () => {
  return (
    <div
      className={classNames(
        "w-full h-screen flex justify-center items-center",
        baseStyles.layoutTheme
      )}
    >
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
