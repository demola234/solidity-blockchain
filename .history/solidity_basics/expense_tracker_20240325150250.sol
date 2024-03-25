// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ExpenseTracker {
    struct Expense {
        address user;
        string description;
        uint amount;
    }

    Expense[] public expense;
}
