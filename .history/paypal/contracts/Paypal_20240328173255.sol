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
        
    }

    // Add a name to wallet address
    // Create Request
    // Pay a Request
    // Get all requests sent to a User
    // Get all historic transactions user has been apart of
}
