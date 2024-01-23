const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy BBtoken contract
  // const BBtoken = await ethers.getContractFactory("BBtoken");
  const token = await ethers.deployContract("BBtoken", [deployer.address]);


  console.log("Token deployed to address:", await token.getAddress());

  // You can perform additional setup if needed, such as setting URI, selling prices, etc.
  await token.setURI("newURI");
  await token.setSellingPrice(1, 10); // Replace 1 and 10 with the desired token ID and selling price
  await token.settotalsupply(1, 100); // Replace 1 and 100 with the desired token ID and total supply

  console.log("Contract configured successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });