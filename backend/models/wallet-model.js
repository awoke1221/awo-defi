const db = require('../db/db_connection')
require('dotenv').config()

class walletModel {
    static create( address, ETHbalance, aGRTBalance, ausdtBalance) {
        return db.execute('INSERT INTO wallets (address, eth_balance, grt_balance, usdt_balance ) VALUES (?, ?, ?, ?)', [address, ETHbalance, aGRTBalance, ausdtBalance])
    }

}

module.exports = walletModel