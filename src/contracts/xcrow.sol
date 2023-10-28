// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract EscrowNFT is ERC721Enumerable, Ownable {
    uint256 public tokenCounter = 0;

    // NFT data
    mapping(uint256 => uint256) public amount;
    mapping(uint256 => uint256) public matureTime;

    constructor() ERC721("EscrowNFT", "ESCRW") {
    }

    function mint(address _recipient, uint256 _amount, uint256 _matureTime) public returns (uint256) {
        _mint(_recipient, tokenCounter);

        // set values
        amount[tokenCounter] = _amount;
        matureTime[tokenCounter] = _matureTime;

        // increment counter
        tokenCounter++;

        return tokenCounter - 1; // return ID
    }

    function tokenDetails(uint256 _tokenId) public view returns (uint256, uint256) {
        require(_exists(_tokenId), "EscrowNFT: Query for nonexistent token");

        return (amount[_tokenId], matureTime[_tokenId]);
    }

    function contractAddress() public view returns (address) {
        return address(this);
    }

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

contract Escrow is Ownable {

    EscrowNFT public escrowNFT;
    bool public initialized = false;
    mapping(uint256 => address) public buyer;
    mapping(uint256 => address) public seller;

    event CreatedEscrow(uint256 _amount, uint256 _matureTime, uint256 _tokenId);
    event ConfirmPayment(address _from, uint256 _amount, uint256 _matureTime);
    event ConfirmDelivery(uint256 _tokenId, uint256 _amount);
    event ReturnPayment(uint256 _tokenId, uint256 _amount);
    event Initialized(address _escrowNft);

    modifier isInitialized() {
        require(initialized, "Escrow contract is not intialized");
        _;
    }

    function initialize(address _escrowNftAddress) external onlyOwner {
        require(!initialized, "Escrow contract is already intialized");
        
		escrowNFT = EscrowNFT(_escrowNftAddress);
        
		initialized = true;

        emit Initialized(_escrowNftAddress);
    }
	
	function createEscrow(uint256 _amount, uint256 _duration) external onlyOwner isInitialized returns (uint256) {
	
		uint256 tokenId = escrowNFT.mint(address(this), _amount, _duration);
	
		seller[tokenId] = msg.sender;
		
		emit CreatedEscrow(_amount, _duration, tokenId);
		
		return tokenId;
	}
    
    function confirmPayment(uint256 _tokenId) external payable isInitialized {
		(uint256 amount, uint256 matureTime) = escrowNFT.tokenDetails(_tokenId);
        
		require(msg.value >= amount, "Escrow correct amount XDC");

		// (bool success, ) = address(this).call{value: amount}("");
		
        // require(success, "Failed deposite funds to escrow account");
		
		buyer[_tokenId] = msg.sender;

        emit ConfirmPayment(msg.sender, amount, matureTime);
    }
    
    function confirmDelivery(uint256 _tokenId) external isInitialized {
        require(buyer[_tokenId] != address(0), "Escrow is complete");
		
        require(buyer[_tokenId] == msg.sender, "Only buyer can complete payment");
		
		(uint256 amount, ) = escrowNFT.tokenDetails(_tokenId);

		(bool success, ) = seller[_tokenId].call{value: amount}("");
		
        require(success, "Failed transfer fund to seller");
        
        escrowNFT.transferFrom(address(this), msg.sender, _tokenId);
        
        buyer[_tokenId] = address(0);
        seller[_tokenId] = address(0);

        emit ConfirmDelivery(_tokenId, amount);
    }
    
    function returnPayment(uint256 _tokenId) external isInitialized {
        require(buyer[_tokenId] != address(0), "Escrow is complete");
		
        require(buyer[_tokenId] == msg.sender, "Only buyer can reclaim the funds");
		
		(uint256 amount, ) = escrowNFT.tokenDetails(_tokenId);

		(bool success, ) = msg.sender.call{value: amount}("");
		
        require(success, "Failed to return the payment");
        
        buyer[_tokenId] = address(0);
        seller[_tokenId] = address(0);
		
		emit ReturnPayment(_tokenId, amount);
    }

    function contractAddress() public view returns (address) {
        return address(this);
    }
}