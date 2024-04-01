// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract SimpleStroage{
    uint256 favoriteNumber;

    str



    function setFavoriteNumber(uint256 number) public {
        favoriteNumber = number;
    }

    function getFavoriteNumber() public view returns (uint256) {
        return favoriteNumber;
    }
}
