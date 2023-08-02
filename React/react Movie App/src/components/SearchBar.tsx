import { Autocomplete, TextField } from "@mui/material";

export const SearchBar = ({
  options,
  onChange,
}: {
  options: string[];
  onChange: (value: string | null) => void;
}) => {
  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      onChange={(_e: React.SyntheticEvent, value: string | null) => {
        onChange(value);
      }}
    />
  );
};
