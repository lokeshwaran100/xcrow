// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
struct TokenMetadata {
    string name;
    string amount;
    address signerAddress;
    }
     
    
contract EscrowNFT is ERC721Enumerable, Ownable {
    uint256 public tokenCounter = 0;
     string[] private tokens;
    // NFT data
    mapping(uint256 => uint256) public amount;
    mapping(uint256 => uint256) public matureTime;
    mapping(uint256 => uint256) public psname;

    constructor() ERC721("EscrowNFT", "ESCRW") {
    }

    function mint(address _recipient, uint256 _amount, uint256 _matureTime,uint256 _psname) public returns (uint256) {
        _mint(_recipient, tokenCounter);

        // set values
        amount[tokenCounter] = _amount;
        matureTime[tokenCounter] = _matureTime;
        psname[tokenCounter] = _psname;

        // increment counter
        tokenCounter++;

        return tokenCounter - 1; // return ID
    }
        function transferNFT(address from, address to, uint256 tokenId) external {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "You are not the owner or approved to transfer this NFT");
        _transfer(from, to, tokenId);
    }
     
      function viewNFT(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "NFT does not exist");
        return (tokens[tokenId]);
    }
/*
function _baseURI() internal pure override returns(string memory){
    return "ipfs://QmZLBztk2fkXvHeh2WTgLJMkYVSEmLw1txQ2n9Fc3yWpox/";
}



    function transferNFT(address from, address to, uint256 tokenId) external {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "You are not the owner or approved to transfer this NFT");
        _transfer(from, to, tokenId);
    }
*/

    // function _exists(uint256 _tokenId) private view returns (bool) {
    //     if (amount[_tokenId] != 0) {
    //         return true;
    //     }
    //     return true;
    // }

    // function _beforeTokenTransfer(address _from, address _to, uint256 _amount) internal override(ERC721, ERC721Enumerable) { }
    // function _increaseBalance(address _account, uint128 _amount) internal override(ERC721, ERC721Enumerable) {}
    // function _update(address _to, uint256 _tokenId, address _auth) internal override(ERC721, ERC721Enumerable) returns (address) { return address(0); }

    // function supportsInterface(bytes4 _interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) { }

}

 