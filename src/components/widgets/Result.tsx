import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { TbClipboardCheck } from "react-icons/tb";

interface Props {
  result?: string;
}

const Result = ({ result }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);

    navigator.clipboard.writeText(result || "none");

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <div className="px-2 flex mb-6 justify-between items-center bg-[#24232b] w-[320px] md:w-[450px] h-16">
      <div
        className={`flex-1 flex px-2 h-full ${
          result ? "text-light-gray" : "text-secondary"
        } text-3xl font-semibold tracking-wide justify-start items-center`}
      >
        {result ? result : "P@$W0RD"}
      </div>

      <span className="text-primary text-xl p-3">
        {copied ? (
          <TbClipboardCheck className="text-2xl hover:cursor-pointer" />
        ) : (
          <FaRegCopy onClick={handleCopy} className="hover:cursor-pointer" />
        )}
      </span>
    </div>
  );
};

export default Result;
