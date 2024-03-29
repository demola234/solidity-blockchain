// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Paypal {
    // Define the Owner of the smart contract
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Create struct and Mapping for request, transaction and name
    struct request {
        address requester;
        uint256 amount;
        string message;
        string name;
    }

    struct sendReceieve {
        string action;
        uint256 amount;
        string message;
        address otherPartyAddress;
        string otherPartyName;
    }

    struct userName {
        string name;
        bool hasName;
    }

    mapping(address => userName) public names;
    mapping(address => request[]) public requests;
    mapping(address => sendReceieve[]) public history;

    // Add a name to wallet address

    function addName(string memory _name) public {
        userName storage newUserName = names[msg.sender];
        newUserName.name = _name;
        newUserName.hasName = true;
    }

    // Create Request
    function createRequest(
        uint256 _amount,
        string memory _message,
        address user
    ) public {
        request memory newRequest;
        newRequest.requester = msg.sender;
        newRequest.amount = _amount;
        newRequest.message = _message;
        if (names[msg.sender].hasName) {
            newRequest.name = names[msg.sender].name;
        }
        requests[user].push(newRequest);
    }

    // Pay a Request
    function payRequest(uint256 _request) public payable {
        require(_request < requests[msg.sender].length, "No such Request");
        request[] storage myRequests = requests[msg.sender];
        request storage payableRequest = myRequests[_request];

        uint256 toPay = payableRequest.amount * 10 ** 18;
        require(msg.value == (toPay), "Pay Correct Amount");

        payable(payableRequest.requester).transfer(msg.value);

        addHistory(
            msg.sender,
            payableRequest.requester,
            payableRequest.amount,
            payableRequest.message
        );

        myRequests[_request] = myRequests[myRequests.length - 1];
        myRequests.pop();
    }

    function addHistory(
        address sender,
        address receiver,
        uint256 _amount,
        string memory _message
    ) private {
        sendReceieve memory newSend;
        newSend.action = "-";
        newSend.amount = _amount;
        newSend.message = _message;
        newSend.otherPartyAddress = receiver;
        if (names[receiver].hasName) {
            newSend.otherPartyName = names[receiver].name;
        }
        history[sender].push(newSend);

        sendReceieve memory newReceieve;
        newReceieve.action = "+";
        newReceieve.amount = _amount;
        newReceieve.message = _message;
        newReceieve.otherPartyAddress = sender;
        if (names[receiver].hasName) {
            newReceieve.otherPartyName = names[receiver].name;
        }
        history[sender].push(newReceieve);
    }

    // Get all requests sent to a User
    function getMyRequests(
        address user
    )
        public
        view
        returns (
            address[] memory,
            uint256[] memory,
            string[] memory,
            string[] memory
        )
    {
        address[] memory addrs = new address[](requests[user].length);
        uint256[] memory amnt = new uint256[](requests[user].length);
        string[] memory megs = new string[](requests[user].length);
        string[] memory nme = new string[](requests[user].length);

        for (uint256 i = 0; i < requests[user].length; i++) {
            request storage myRequests = requests[user][i];
            addrs[i] = myRequests.requester;
            amnt[i] = myRequests.amount;
            megs[i] = myRequests.message;
            nme[i] = myRequests.name;
        }

        return (addrs, amnt, megs, nme);
    }

    // Get all historic transactions user has been apart of
    function getMyHistory(
        address _user
    ) public view returns (sendReceieve[] memory) {
        return history[_user];
    }
}
