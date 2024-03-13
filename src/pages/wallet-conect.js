import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const WalletConnectCard = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const walletOptions = [
    { id: 1, name: 'MetaMask', icon: 'fab fa-ethereum' },
    { id: 2, name: 'Trust Wallet', icon: 'fas fa-wallet' },
    { id: 3, name: 'Coinbase Wallet', icon: 'fas fa-coins' },
    // Add more wallet options as needed
  ];

  const handleWalletChange = (e) => {
    setSelectedWallet(e.target.value);
  };

  const connectWallet = () => {
    if (selectedWallet) {
      // Logic to connect the selected wallet
      console.log(`Connecting ${selectedWallet} wallet...`);
      // You can add your wallet connection logic here
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="bg-gray-900 rounded shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
        <div className=" text-black relative mb-6">
          <select
            className="w-full p-2 pl-8 pr-3 border border-gray-300 rounded appearance-none"
            value={selectedWallet}
            onChange={handleWalletChange}
          >
            <option value="">Select Wallet</option>
            {walletOptions.map(wallet => (
              <option key={wallet.id} value={wallet.name}>
                {wallet.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDownIcon className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <button
          className={`w-full py-2 px-4 ${selectedWallet ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400'} text-white rounded mb-6`}
          onClick={connectWallet}
          disabled={!selectedWallet}
        >
          Connect
        </button>
        {selectedWallet && (
          <div>
            <p className="mb-2 text-lg">Wallet Selected:</p>
            <div className="flex items-center">
              <i className={`${walletOptions.find(wallet => wallet.name === selectedWallet).icon} text-xl mr-2`} />
              <span className="text-lg">{selectedWallet}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnectCard;
