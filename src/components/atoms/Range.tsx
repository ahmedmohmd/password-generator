import { useRef, useState } from "react";

interface Props {
  onRange: (length: number) => void;
}

const RangeInput = ({ onRange }: Props) => {
  const [length, setLength] = useState<number>(0);
  const range = useRef<HTMLInputElement>(null);

  const handleRange = (event: any) => {
    setLength(+event.target.value);
    onRange(+event.target.value);
  };

  const handleInput = (event: any) => {
    const value: number = +event.target.value;
    const min: number = +event.target.min;
    const max: number = +event.target.max;

    event.target.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
      ((value - min) / (max - min)) * 100
    }%, #434343 ${((value - min) / (max - min)) * 100}%, #434343 100%)`;
  };

  return (
    <>
      <div className="mb-4 text-xl flex justify-between items-center w-full">
        <h1 className="text-light-gray flex-1">Character Length</h1>
        <span className="text-primary text-2xl font-semibold">{length}</span>
      </div>
      <input
        onInput={handleInput}
        onChange={handleRange}
        value={length}
        type="range"
        min={0}
        max={10}
        step={1}
        ref={range}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-8"
      />
    </>
  );
};

export default RangeInput;
