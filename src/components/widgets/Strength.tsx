import { passwordStrength } from "check-password-strength";
import { useEffect, useState } from "react";

enum PasswordState {
  TOO_WEAK = "Too weak",
  WEAK = "Weak",
  MEDIUM = "Medium",
  STRONG = "Strong",
}

interface Props {
  password: string;
}

const Strength = ({ password }: Props) => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setState(passwordStrength(password).value);
    console.log(passwordStrength(password).value);
  }, [password]);

  return (
    <div className="p-4 w-full bg-[#18171f] flex justify-center items-center mt-8">
      <span className="flex-1 text-lg text-[#6f6c7d] font-bold">STRENGTH</span>

      <div className="flex justify-center items-center gap-4">
        <span className="text-xl text-light-gray">
          {state.toLocaleUpperCase()}
        </span>

        <div className="flex justify-center items-center gap-2">
          {state === PasswordState.TOO_WEAK ? (
            <>
              <span className="w-4 h-8 bg-[#f44336] border-2" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
            </>
          ) : state === PasswordState.WEAK ? (
            <>
              <span className="w-4 h-8 bg-[#f44336] border-2" />
              <span className="w-4 h-8 bg-[#f8cd65] border-2" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
            </>
          ) : state === PasswordState.MEDIUM ? (
            <>
              <span className="w-4 h-8 bg-[#f44336] border-2" />
              <span className="w-4 h-8 bg-[#f8cd65] border-2" />
              <span className="w-4 h-8 bg-[#f8cd65] border-2" />
              <span className="w-3 h-7 bg-transparent border-2 border-light-gray" />
            </>
          ) : state === PasswordState.STRONG ? (
            <>
              <span className="w-4 h-8 bg-[#f44336] border-2" />
              <span className="w-4 h-8 bg-[#f8cd65] border-2" />
              <span className="w-4 h-8 bg-[#f8cd65] border-2" />
              <span className="w-4 h-8 bg-[#98eea2] border-2" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Strength;
