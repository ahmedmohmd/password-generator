import { BiRightArrowAlt } from "react-icons/bi";

interface Props {
  handleGenerate: () => void;
}

const GenerateButton = ({ handleGenerate }: Props) => {
  return (
    <div
      onClick={handleGenerate}
      className="group hover:border-primary hover:bg-[#24232b] duration-300 border-2 border-transparent hover:cursor-pointer flex justify-center items-center w-full p-4 bg-primary mt-10 gap-4"
    >
      <button className="text-lg font-semibold group-hover:text-primary">
        GENERATE
      </button>
      <BiRightArrowAlt className="text-[#24232b] text-2xl group-hover:text-primary" />
    </div>
  );
};

export default GenerateButton;
