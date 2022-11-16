import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../../contexts/ProductContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <FormControl style={{ color: "black" }}>
      <FormLabel
        style={{ color: "black" }}
        id="demo-controlled-radio-buttons-group">
        Categories
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="all"
        onChange={e => fetchByParams("type", e.target.value)}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="sport" control={<Radio />} label="SPORT" />
        <FormControlLabel value="clothes" control={<Radio />} label="CLOTHES" />
        <FormControlLabel
          value="electronics"
          control={<Radio />}
          label="ELECTRONICS"
        />
      </RadioGroup>
    </FormControl>
  );
}
