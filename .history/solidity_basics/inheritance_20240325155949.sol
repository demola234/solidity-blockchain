// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MultiPlayer {
    mapping(address => bool) public playerTokens;

    function joinGame() public virtual {
        playerTokens[msg.sender] = true;
    }
}

contract Game is MultiPlayer {
    string public gameName;
    uint256 public playerCount;

    constructor(string memory _gameName) {
        gameName = _gameName;
        playerCount = 0;
        }


        function joinGame() public override {
            super.joinGame();
              playerCount++;
        }
}
