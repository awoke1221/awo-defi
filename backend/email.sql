CREATE DATABASE bulk_email_db;

USE bulk_email_db;

CREATE TABLE email_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    requester_address VARCHAR(255) NOT NULL,
    recipient VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
