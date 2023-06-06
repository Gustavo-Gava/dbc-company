import { type PropsWithChildren, createContext, useContext } from "react";

interface EnterpriseContextType {
  enterpriseName: string;
}

const EnterpriseContext = createContext<EnterpriseContextType>(
  {} as EnterpriseContextType
);

export const EnterpriseProvider = ({ children }: PropsWithChildren) => {
  return (
    <EnterpriseContext.Provider value={{ enterpriseName: "Digital Business" }}>
      {children}
    </EnterpriseContext.Provider>
  );
};

export const useEnterprise = () => useContext(EnterpriseContext);
