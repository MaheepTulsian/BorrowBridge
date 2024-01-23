const { expect } = require("chai");

describe("BBtoken contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    // Deploy BBtoken contract
    const BBtoken = await ethers.getContractFactory("BBtoken");
    const bbtoken = await BBtoken.deploy(owner.address);

    // Set up initial token data
    const tokenId = 1;
    const initialSupply = 100;
    const sellingPrice = 10;

    // Set URI and selling price
    await bbtoken.setURI("newURI");
    await bbtoken.setSellingPrice(tokenId, sellingPrice);
    await bbtoken.settotalsupply(tokenId, initialSupply);

    // Mint tokens to the owner
    const mintAmount = 50;

    // Calculate the required ether to send
    const requiredEther = (sellingPrice * mintAmount) + 1;

    // Mint tokens with the correct amount of ether using the owner's account
    await bbtoken.mint(tokenId, mintAmount, { value: requiredEther });

    // Check owner's balance and total supply
    const ownerBalance = await bbtoken.balanceOf(owner.address, tokenId);
    const totalSupply = await bbtoken.getTotalSupply(tokenId);

    expect(ownerBalance).to.equal(mintAmount);
    expect(totalSupply).to.equal(initialSupply - mintAmount);
  });
});