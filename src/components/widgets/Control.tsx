import { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import GenerateButton from "../atoms/GenerateButton";
import RangeInput from "../atoms/Range";
import Strength from "./Strength";

interface Props {
  getData: (data: any) => void;
  password: string;
}

const Control = ({ getData, password }: Props) => {
  const [length, setLength] = useState<number>();
  const [upper, setUpper] = useState<boolean>(false);
  const [lower, setLower] = useState<boolean>(false);
  const [nums, setNums] = useState<boolean>(false);
  const [syms, setSyms] = useState<boolean>(false);

  const onRange = (length: number) => {
    setLength(length);
  };

  const handleGenerate = () => {
    getData({
      length,
      upper,
      lower,
      nums,
      syms,
    });
  };

  return (
    <div className="p-5 md:p-7 bg-[#24232b] w-[320px] md:w-[450px] ">
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
          setNums(!nums);
        }}
        value={nums}
        label="Include Numbers"
      />
      <Checkbox
        handleCheck={() => {
          setSyms(!syms);
        }}
        value={syms}
        label="Include Symbols"
      />

      <Strength password={password} />
      <GenerateButton handleGenerate={handleGenerate} />
    </div>
  );
};

export default Control;
