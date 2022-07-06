import React, { createContext, useState } from 'react';

type AppContextType = {
  breweryId: string;
  setBreweryId: (newBreweryId: string) => void;
};

const appContextDefaultValue = {
  breweryId: '',
  setBreweryId: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValue);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [breweryId, setBreweryId] = useState<string>(appContextDefaultValue.breweryId);

  return (
    <AppContext.Provider
      value={{
        breweryId,
        setBreweryId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
