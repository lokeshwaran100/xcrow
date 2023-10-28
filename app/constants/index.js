import { assignment,finished,nft,service } from "@/assets"

export const NAV_ICONS=[
    {
        label:"Escrows",
        image:assignment,
        link:"/"
    },
    {
        label:"Service",
        image:service,
        link:"/service"
    },
    {
        label:"Finished",
        image:finished,
        link:"/finished"
    },
    {
        label:"Nfts",
        image:nft,
        link:"/my-nft"
    }
]

export const SAMPLE_DATE=[
    {
		"id":"1",
        "name":"Estate Agreement",
        "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in libero blandit scelerisque. Nunc bibendum justo eu libero varius, eget feugiat purus elementum. Integer eget erat in justo convallis vulputate. Sed hendrerit, felis nec gravida varius, metus purus euismod purus, sit amet congue nunc quam eget justo. Vivamus a turpis eu elit fermentum suscipit. Cras id tincidunt velit. Aliquam tincidunt libero nec ex ultrices, vel facilisis quam aliquam. Fusce venenatis, sapien non cursus aliquet, nunc massa dictum turpis, a aliquam orci justo in lectus. Proin fringilla metus vitae justo dapibus, vel vehicula metus tincidunt. Vestibulum ultricies sem nec tellus aliquet, sit amet pellentesque quam elementum. Maecenas venenatis viverra efficitur. Nullam scelerisque, justo id vestibulum laoreet, purus tortor aliquam est, a bibendum dui ex sed quam",
        "amount":"0.5",
        "status":"in progress"
    },
    {
		"id":"2",
        "name": "Rental Agreement",
        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in libero blandit scelerisque. Nunc bibendum justo eu libero varius, eget feugiat purus elementum. Integer eget erat in justo convallis vulputate. Sed hendrerit, felis nec gravida varius, metus purus euismod purus, sit amet congue nunc quam eget justo. Vivamus a turpis eu elit fermentum suscipit. Cras id tincidunt velit. Aliquam tincidunt libero nec ex ultrices, vel facilisis quam aliquam. Fusce venenatis, sapien non cursus aliquet, nunc massa dictum turpis, a aliquam orci justo in lectus. Proin fringilla metus vitae justo dapibus, vel vehicula metus tincidunt. Vestibulum ultricies sem nec tellus aliquet, sit amet pellentesque quam elementum. Maecenas venenatis viverra efficitur. Nullam scelerisque, justo id vestibulum laoreet, purus tortor aliquam est, a bibendum dui ex sed quam",
        "amount": "0.6",
        "status":"in progress"
    },
    {
		"id":"3",
        "name": "Rental Agreement",
        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in libero blandit scelerisque. Nunc bibendum justo eu libero varius, eget feugiat purus elementum. Integer eget erat in justo convallis vulputate. Sed hendrerit, felis nec gravida varius, metus purus euismod purus, sit amet congue nunc quam eget justo. Vivamus a turpis eu elit fermentum suscipit. Cras id tincidunt velit. Aliquam tincidunt libero nec ex ultrices, vel facilisis quam aliquam. Fusce venenatis, sapien non cursus aliquet, nunc massa dictum turpis, a aliquam orci justo in lectus. Proin fringilla metus vitae justo dapibus, vel vehicula metus tincidunt. Vestibulum ultricies sem nec tellus aliquet, sit amet pellentesque quam elementum. Maecenas venenatis viverra efficitur. Nullam scelerisque, justo id vestibulum laoreet, purus tortor aliquam est, a bibendum dui ex sed quam",
        "amount": "0.6",
        "status":"in progress"
    },
    {
		"id":"4",
        "name": "Lease Agreement",
        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in libero blandit scelerisque. Nunc bibendum justo eu libero varius, eget feugiat purus elementum. Integer eget erat in justo convallis vulputate. Sed hendrerit, felis nec gravida varius, metus purus euismod purus, sit amet congue nunc quam eget justo. Vivamus a turpis eu elit fermentum suscipit. Cras id tincidunt velit. Aliquam tincidunt libero nec ex ultrices, vel facilisis quam aliquam. Fusce venenatis, sapien non cursus aliquet, nunc massa dictum turpis, a aliquam orci justo in lectus. Proin fringilla metus vitae justo dapibus, vel vehicula metus tincidunt. Vestibulum ultricies sem nec tellus aliquet, sit amet pellentesque quam elementum. Maecenas venenatis viverra efficitur. Nullam scelerisque, justo id vestibulum laoreet, purus tortor aliquam est, a bibendum dui ex sed quam",
        "amount": "0.8",
        "status":"in progress"
    },
    {
		"id":"5",
        "name": "Partnership Agreement",
        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in libero blandit scelerisque. Nunc bibendum justo eu libero varius, eget feugiat purus elementum. Integer eget erat in justo convallis vulputate. Sed hendrerit, felis nec gravida varius, metus purus euismod purus, sit amet congue nunc quam eget justo. Vivamus a turpis eu elit fermentum suscipit. Cras id tincidunt velit. Aliquam tincidunt libero nec ex ultrices, vel facilisis quam aliquam. Fusce venenatis, sapien non cursus aliquet, nunc massa dictum turpis, a aliquam orci justo in lectus. Proin fringilla metus vitae justo dapibus, vel vehicula metus tincidunt. Vestibulum ultricies sem nec tellus aliquet, sit amet pellentesque quam elementum. Maecenas venenatis viverra efficitur. Nullam scelerisque, justo id vestibulum laoreet, purus tortor aliquam est, a bibendum dui ex sed quam",
        "amount": "1.0",
        "status":"in progress"
    }          
]

export const ABI=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "ConfirmDelivery",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_matureTime",
				"type": "uint256"
			}
		],
		"name": "ConfirmPayment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_matureTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "CreatedEscrow",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_escrowNft",
				"type": "address"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "ReturnPayment",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "buyer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "confirmDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "confirmPayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "createEscrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "escrowNFT",
		"outputs": [
			{
				"internalType": "contract EscrowNFT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_escrowNftAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "returnPayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "seller",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]