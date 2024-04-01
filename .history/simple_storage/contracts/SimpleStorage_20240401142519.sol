// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    People[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

 
    function numberToString(uint256 _number) public pure returns (string memory) {
        if (_number == 0) {
            return "0";
        }
        
        uint256 temp = _number;
        uint256 digits;
        
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        
        bytes memory buffer = new bytes(digits);
        while (_number != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + _number % 10));
            _number /= 10;
        }
        
        return string(buffer);
    }

    function getPerson(uint256 _index) public view returns (string memory, string memory) {
        return (people[_index].favoriteNumber, people[_index].name);
    }
}
