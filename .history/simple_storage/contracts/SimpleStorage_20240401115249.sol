// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract SimpleStroage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    function setFavoriteNumber(uint256 number) public {
        favoriteNumber = number;
    }

    function getFavoriteNumber() public view returns (uint256) {
        return favoriteNumber;
    }
}
