import { useState } from "react";
import Control from "./components/widgets/Control";
import Result from "./components/widgets/Result";
import AppContext from "./utils/appContext";

function App() {
  const [data, setData] = useState<{
    [key: string]: boolean | number;
  }>({});

  const getData = (data: any) => {
    setData(data);
  };

  return (
    <AppContext.Provider
      value={{
        getData,
      }}
    >
      <div className="min-w-screen min-h-screen bg-[#0d0c11] font-roboto-mono">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[#757382] text-2xl font-semibold text-center mb-8">
            Password Generator
          </h1>
          <Result result="Zero" />
          <Control />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
