// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ExploringLoops {
    function countUp(uint limit) public pure returns (uint) {
        uint count = 0;
        for (uint i = 0; i < limit; i++) {
            count += 1;
        }
    }
}
