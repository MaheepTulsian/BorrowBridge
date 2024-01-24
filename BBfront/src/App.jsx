import './App.css'
import Layout from './Pages/Layout'
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {

  return (
    <>
     <ThirdwebProvider
      activeChain="goerli"
      clientId="d1523fc64f3ebde523d3337999412511" // You can get a client id from dashboard settings
    >
      <Layout/>
      </ThirdwebProvider>
    </>
  )
}
function Component() {
  const { contract, isLoading } = useContract("0x46C0dc40Cd015a03cA32eCd1c254cB9c31c1C591");
}
export default App
