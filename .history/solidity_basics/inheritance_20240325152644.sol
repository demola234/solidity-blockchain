// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MultiPlayer {
    mapping(address => uint) public playerTokens;

    function joinGame() public virtual {playerTokens[msg.sender]}
}
