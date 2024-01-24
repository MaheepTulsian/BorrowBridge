import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0x46C0dc40Cd015a03cA32eCd1c254cB9c31c1C591");
  const { mutateAsync: purchaseTokens, isLoading } = useContractWrite(contract, "purchaseTokens")

  const call = async () => {
    try {
      const data = await purchaseTokens({ args: [tokenId, amount, investor] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
}