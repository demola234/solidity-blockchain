// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ExpenseTracker {
    struct Expense {
        address user;
        string description;
        uint amount;
    }

    Expense[] public expense;
    
    constructor(
        // expense.push(Expense(msg.sender, "Initial deposit", 1000));
        expense.push(Expense(msg.sender, "Coffee", 5));
        expense.push(Expense(msg.sender, "Books, 50));
    )
}
