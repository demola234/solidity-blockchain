// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Twitter {
        // Struct
    struct Tweet {
        id 
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
    }

    mapping(address => Tweet[]) public tweets;

    function createTweet(string memory _tweet) public {
        Tweet memory newTweet = Tweet({
            author: msg.sender,
            content: _tweet,
            timestamp: block.timestamp,
            likes: 0
        });
        tweets[msg.sender].push(newTweet);
    }

    function getTweet(address owner, uint _i) view  public returns (Tweet memory) {
        return tweets[owner][_i];
    }


    function getAllTweet(address _owner) public view returns (Tweet[] memory) {
        return tweets[_owner];
    }
}