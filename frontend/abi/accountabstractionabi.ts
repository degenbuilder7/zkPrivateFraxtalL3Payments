const accountabstractionabi = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "address",
          "name": "_defaultAdmin",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_entrypoint",
          "internalType": "contract IEntryPoint"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AccountCreated",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "accountAdmin",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ContractURIUpdated",
      "inputs": [
        {
          "type": "string",
          "name": "prevURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "newURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "previousAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "newAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SignerAdded",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "signer",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SignerRemoved",
      "inputs": [
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "signer",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "accountImplementation",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractURI",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "createAccount",
      "inputs": [
        {
          "type": "address",
          "name": "_admin",
          "internalType": "address"
        },
        {
          "type": "bytes",
          "name": "_data",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "entrypoint",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAccounts",
      "inputs": [
        {
          "type": "uint256",
          "name": "_start",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_end",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address[]",
          "name": "accounts",
          "internalType": "address[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAccountsOfSigner",
      "inputs": [
        {
          "type": "address",
          "name": "signer",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "address[]",
          "name": "accounts",
          "internalType": "address[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAddress",
      "inputs": [
        {
          "type": "address",
          "name": "_adminSigner",
          "internalType": "address"
        },
        {
          "type": "bytes",
          "name": "_data",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAllAccounts",
      "inputs": [],
      "outputs": [
        {
          "type": "address[]",
          "name": "",
          "internalType": "address[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMember",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "member",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hasRoleWithSwitch",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isRegistered",
      "inputs": [
        {
          "type": "address",
          "name": "_account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onRegister",
      "inputs": [
        {
          "type": "bytes32",
          "name": "_salt",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onSignerAdded",
      "inputs": [
        {
          "type": "address",
          "name": "_signer",
          "internalType": "address"
        },
        {
          "type": "bytes32",
          "name": "_salt",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onSignerRemoved",
      "inputs": [
        {
          "type": "address",
          "name": "_signer",
          "internalType": "address"
        },
        {
          "type": "bytes32",
          "name": "_salt",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "totalAccounts",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    }
  ]

  export default accountabstractionabi;