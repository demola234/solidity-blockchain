// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract PausableToken {
    address public owner;
    bool public paused;
    mapping(address => uint) public balance;

    constructor() {
        owner = msg.sender;
        paused = false;
        balance[owner] = 1000;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are the owner");
        _;
    }
    modifier pause() {
        require(paused == false, "The Contract  is Paused");
        _;
    }

    modifier notPaused() {
        require(paused == false, "The Contract is Paused");
        _;
    }

    function notPause() public onlyOwner {
        paused = false;
    }

    function transfer(address to, uint amount) public notPaused {
        require(balance[msg.sender] >= amount, "Insufficient Balance");

        balance[msg.sender] -= amount;
        balance[to] += amount;
    }
}
