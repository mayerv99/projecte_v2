import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { FormControl, StyledInput } from "./styled";

export default function Input({ name, label, width, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <FormControl width={width}>
      <label>{label}</label>
      <StyledInput
        ref={inputRef}
        defaultValue={defaultValue}
        error={error}
        onFocus={clearError}
        {...rest}
      />
      {error && <span>{error}</span>}
    </FormControl>
  );
}
