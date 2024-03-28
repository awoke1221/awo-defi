const walletConnect = require('../components/layout/navbar/ConnectWallet')
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    
    
        axios
            .post('http://localhost:5000/register', { username, email, password })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    
}