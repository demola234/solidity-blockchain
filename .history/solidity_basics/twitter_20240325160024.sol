// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Twitter {
    // Struct
    struct Tweet {
        uint256 id;
        address author;
        string content;
        uint256 timestamp;
        uint256 likes;
    }

    mapping(address => Tweet[]) public tweets;

    function createTweet(string memory _tweet) public {
        Tweet memory newTweet = Tweet({
            id: tweets[msg.sender].length,
            author: msg.sender,
            content: _tweet,
            timestamp: block.timestamp,
            likes: 0
        });
        tweets[msg.sender].push(newTweet);
    }

    function likeTweet(uint256 id, address owner) external {
        require(tweets[owner][id].id == id, "Tweet does not exist");
        tweets[owner][id].likes++;
    }

    function getAllLikedTwites(address owner) external view returns (uint) {
        uint totalLikes;

        for (uint i = 0; i < tweets[owner].length; i++) {
            totalLikes += tweets[owner][i].likes;
        }

        return totalLikes;
    }

    function unlikeTweet(uint256 id, address owner) external {
        require(tweets[owner][id].id == id, "Tweet does not exist");
        require(tweets[owner][id].likes > 0, "Tweet has no likes");
        tweets[owner][id].likes--;
    }

    

    function getTweet(
        address owner,
        uint _i
    ) public view returns (Tweet memory) {
        return tweets[owner][_i];
    }

    function getAllTweet(address _owner) public view returns (Tweet[] memory) {
        return tweets[_owner];
    }
}
