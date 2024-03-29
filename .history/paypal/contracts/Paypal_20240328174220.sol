// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Paypal {
    // Define the Owner of the smart contract
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Create struct and Mapping for request, transaction and name
    struct request {
        address requester;
        uint256 amount;
        string message;
        string name;
    }

    struct sendReceieve {
        address action;
        uint256 amount;
        string message;
        string otherPartyAddress;
        string otherPartyName;
    }

    struct userName {
        string name;
        bool hasName;
    }

    mapping(address => userName) public names;
    mapping(address => request[]) public requests;
    mapping(address => sendReceieve[]) public history;

    // Add a name to wallet address

    function addName(string memory _name) public {
        userName storage newUserName = names[msg.sender];
        newUserName.name = _name;
        newUserName.hasName = true;

        if (names[msg.sender].hasName == false) {
            newUserName.name = names[msg.sender].name;}
    }

    // Create Request
    // Pay a Request
    // Get all requests sent to a User
    // Get all historic transactions user has been apart of
}
