import * as React from "react";

type challengesDataType = {}[];

type adminContextType = {
  challenges: challengesDataType;
  setChallenges: (challenges: challengesDataType) => void;
};

export const adminContext = React.createContext<adminContextType | null>(null);

export const AdminProvider = (children: React.ReactNode) => {
  const [challenges, setChallenges] = React.useState<challengesDataType>([]);

  return (
    <adminContext.Provider value={{ challenges, setChallenges }}>
      {children}
    </adminContext.Provider>
  );
};
