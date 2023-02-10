import { createContext } from "react";

interface ContextType {
  getData: (data: any) => any;
}

const AppContext = createContext<any>(null);

export default AppContext;
