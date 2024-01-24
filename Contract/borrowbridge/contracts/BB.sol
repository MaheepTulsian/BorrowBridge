// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BBtoken is ERC1155, Ownable {

    mapping(uint256 => uint256) private _sellingPrices;
    mapping(uint256 => uint256) private totalsupply;

    constructor(address initialOwner) ERC1155("BBT") Ownable() {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function setSellingPrice(uint256 tokenId, uint256 sellingPrice) public onlyOwner {
        _sellingPrices[tokenId] = sellingPrice;
    }
     function settotalsupply(uint256 tokenId, uint256 supply) public onlyOwner {
       totalsupply[tokenId] = supply;
    }

    function mint(uint256 id, uint256 amount) public onlyOwner payable {
        uint256 sellingPrice = _sellingPrices[id];
        require(sellingPrice > 0, "Selling price not set");
        require(amount <= totalsupply[id], "Not enough tokens available");
        require(msg.value >= (sellingPrice * amount) + 1, "Insufficient funds sent");

        _mint(msg.sender, id, amount, "");

        totalsupply[id] -= amount;
        payable(owner()).transfer(msg.value);
   }

    function purchaseTokens(uint256 tokenId, uint256 amount, address investor) external payable {
        uint256 sellingPrice = _sellingPrices[tokenId];
        require(msg.value >= sellingPrice * amount, "Incorrect payment amount");

        // Transfer tokens to the buyer
        _safeTransferFrom(owner(), investor, tokenId, amount, "");

        payable(owner()).transfer(msg.value);
    }
    
    function getTotalSupply(uint256 tokenId) external view returns (uint256) {
        return totalsupply[tokenId];
    }

    // Function to get the total selling price of a specific token
    function getTotalSellingPrice(uint256 tokenId) external view returns (uint256) {
        return _sellingPrices[tokenId] * totalsupply[tokenId];
    }
}