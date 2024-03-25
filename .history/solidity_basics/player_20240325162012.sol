// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract User {
    struct Player {
        address playerAddress;
        string username;
        uint256 score;
    }

    mapping(address => Player) public players;

    function createPlayer(string memory _username, address userAddress) external {
        require(players[userAddress].);
    }
}
