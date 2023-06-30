import ReactSelect from "react-select";
import { FormControl } from "./styled";

export default function Select({
  name,
  label,
  width,
  value,
  setValue,
  ...rest
}) {
  return (
    <FormControl width={width}>
      <label>{label}</label>
      <ReactSelect
        value={value}
        onChange={setValue}
        classNamePrefix="react-select"
        {...rest}
      />
    </FormControl>
  );
}
