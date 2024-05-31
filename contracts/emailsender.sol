// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract EmailSender {
    address public owner;
    uint public emailRequestCount = 0;

    struct EmailRequest {
        address requester;
        string recipient;
        string subject;
        string body;
    }

    mapping(uint => EmailRequest) public emailRequests;

    event EmailRequestCreated(
        uint requestId,
        address indexed requester,
        string recipient,
        string subject,
        string body
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function sendEmail(string memory recipient, string memory subject, string memory body) public {
        emailRequestCount++;
        emailRequests[emailRequestCount] = EmailRequest(msg.sender, recipient, subject, body);
        emit EmailRequestCreated(emailRequestCount, msg.sender, recipient, subject, body);
    }

    function sendBulkEmails(string[] memory recipients, string memory subject, string memory body) public onlyOwner {
        for (uint i = 0; i < recipients.length; i++) {
            emailRequestCount++;
            emailRequests[emailRequestCount] = EmailRequest(msg.sender, recipients[i], subject, body);
            emit EmailRequestCreated(emailRequestCount, msg.sender, recipients[i], subject, body);
        }
    }

    function getEmailRequest(uint requestId) public view returns (address, string memory, string memory, string memory) {
        EmailRequest memory request = emailRequests[requestId];
        return (request.requester, request.recipient, request.subject, request.body);
    }

    function changeOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }
}
