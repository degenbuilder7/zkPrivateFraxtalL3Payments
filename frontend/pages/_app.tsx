import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fr } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {

  const zkprivatepaymentrollupChain = {
    chainId: 1729, // Chain ID of the network
    rpc: ["https://rpc-loyalty-roller-roqlic24du.t.conduit.xyz"],
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    shortName: "pvenmode", // Display value shown in the wallet UI
    slug: "pvenmode", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Private-Venmode", // Name of the network
    name: "Private-Venmode", // Name of the network
  };


  const fraxtaltestnet = {
    chainId: 2522, // Chain ID of the network
    rpc: ["https://testnet.frax.com/flox-leaderboard"],
    nativeCurrency: {
      decimals: 18,
      name: "frxETH",
      symbol: "frxETH",
    },
    shortName: "fraxtaltestnet", // Display value shown in the wallet UI
    slug: "fraxtaltestnet", // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "fraxtaltestnet", // Name of the network
    name: "fraxtaltestnet", // Name of the network
  };

  return (
    <ThirdwebProvider 
        activeChain={fraxtaltestnet} 
        supportedChains={[zkprivatepaymentrollupChain]}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_KEY}
        >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
