// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Profile {
    struct UserProfile {
        string displayName;
        string bio;
    }

    mapping(address => Profile) public profiles;

    function setProfile
}
