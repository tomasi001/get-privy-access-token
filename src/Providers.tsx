// src/Providers.tsx
import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const appId = process.env.REACT_APP_PRIVY_APP_ID;

  return (
    <PrivyProvider
      appId={appId ?? ""} // Replace with your Privy app ID
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://auth.privy.io/logos/privy-logo.png", // Replace with your logo URL
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default Providers;
