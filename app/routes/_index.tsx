import { FormControl, TextField } from "@mui/material";

const Index = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-[#0a1929] flex justify-center items-center transition duration-500 ease-in-out">
      <span className="text-[#0a1929] dark:text-white font-bold italic text-5xl">
        Hello Profile Plus
      </span>
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
