import { useState } from "react";
import Checkbox from "../atoms/CheckBox";
import RangeInput from "../atoms/Range";

interface Props {
  getData: (data: any) => void;
  data: any;
}

const Control = () => {
  const [length, setLength] = useState<number>();
  const [upper, setUpper] = useState<boolean>(false);
  const [lower, setLower] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const onRange = (length: number) => {
    setLength(length + 1);
  };

  const handleSubmit = () => {
    const data = {
      length,
      upper,
      lower,
      numbers,
      symbols,
    };

    console.log(data);
  };

  return (
    <div className="p-6 bg-[#24232b] w-[320px] md:w-[450px]">
      <RangeInput onRange={onRange} />

      <Checkbox
        handleCheck={() => {
          setUpper(!upper);
        }}
        value={upper}
        label="Include Uppercase Letters"
      />
      <Checkbox
        handleCheck={() => {
          setLower(!lower);
        }}
        value={lower}
        label="Include Lowercase Letters"
      />
      <Checkbox
        handleCheck={() => {
          setNumbers(!numbers);
        }}
        value={numbers}
        label="Include Numbers"
      />
      <Checkbox
        handleCheck={() => {
          setSymbols(!symbols);
        }}
        value={symbols}
        label="Include Symbols"
      />
    </div>
  );
};

export default Control;
