// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Profile {
    struct UserProfile {
        string displayName;
        string bio;
    }

    mapping(address => Profile) public profiles;

    function setProfile(string memory _displayName, string memory _bio) public {
        profiles[msg.sender] = UserProfile(_displayName, _bio);
        
    }
}
