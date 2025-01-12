import React from 'react';
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

function App() {
  const wallet = useWallet();

  return (
    <div className="App">
      <h1>Suiet Wallet Demo</h1>
      <ConnectButton />
      {wallet.connected && (
        <div>
          <h2>Wallet Connected</h2>
          <p>Address: {wallet.account?.address}</p>
          <p>Network: {wallet.chain?.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;

