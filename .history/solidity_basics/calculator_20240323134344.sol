// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract BasicCalculator {
    uint256 public result;

    function add(uint256 a, uint256 b) internal {
        result = a + b;
    }

    function subtract(uint256 a, uint256 b) internal {
        result = a - b;
    }

    function multiply(uint256 a, uint256 b) internal {
        result = a * b;
    }

    function divide(uint256 a, uint256 b) internal {
        result = a / b;
    }
}

contract AdvanceCalculator is BasicCalculator {
    function performOperations(uint256 a, uint256 b, uint8 operations) public {
        if (operations == 0) add(a, b);
        else if (operations == 1) subtract(a, b);
        else if (operations == 2) multiply(a, b);
        else if (operations == 3) divide(a, b);
        else revert("Invalid Operation!!");
    }
}
