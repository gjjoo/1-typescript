import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Input: React.FC = () => {
  const [abc, setAbc] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    console.log(inputRef.current.classList.contains("abc"));
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <StyledInput
      ref={inputRef}
      className="abc"
      value={value}
      onChange={handleChange}
    />
  );
};

const StyledInput = styled.input`
  width: 100px;
  height: 40px;
  background-color: green;
`;

export default Input;
