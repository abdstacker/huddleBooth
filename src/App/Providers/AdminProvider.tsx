import * as React from "react";
type Props = { children: React.ReactNode };

type challengesDataType = {}[];
type brandStatsDataType = {}[];

type adminContextType = {
  challenges: challengesDataType;
  setChallenges: (challenges: challengesDataType) => void;
  brandStats: brandStatsDataType;
  setBrandStats: React.Dispatch<React.SetStateAction<brandStatsDataType>>;
};

export const adminContext = React.createContext<adminContextType>({
  challenges: [{}],
  setChallenges: () => {},
  brandStats: [{}],
  setBrandStats: () => {},
});

export const AdminProvider: React.FC<Props> = ({ children }) => {
  const [challenges, setChallenges] = React.useState<challengesDataType>([]);
  const [brandStats, setBrandStats] = React.useState<brandStatsDataType>([]);

  return (
    <adminContext.Provider
      value={{ challenges, setChallenges, brandStats, setBrandStats }}
    >
      {children}
    </adminContext.Provider>
  );
};
