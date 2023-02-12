import { useState } from "react";
import Logo from "./components/atoms/Logo";
import Control from "./components/widgets/Control";
import Result from "./components/widgets/Result";
import generate from "./utils/passwordGenerator";

function App() {
  const [password, setPassword] = useState<string>("");

  const getData = (data: any) => {
    setPassword(generate(data));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#0d0c11] font-roboto-mono flex flex-col justify-center items-center">
      <div className="my-8">
        <Logo />
        <Result result={password} />
        <Control getData={getData} password={password} />
      </div>
    </div>
  );
}

export default App;
