// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Twitter {
    // Arrays
    mapping(address => string[]) public tweets;

    function createTweet(string memory _tweet) public {
        tweets[msg.sender].push(_tweet);
    }

    function getTweet(
        address owner,
        uint _i
    ) public view returns (string memory) {
        return tweets[owner][_i];
    }

    function getAllTweet(address _owner) public view returns (string[] memory) {
        return tweets[_owner];
    }
}
