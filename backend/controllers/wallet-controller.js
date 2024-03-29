
const walletModel = require('../models/wallet-model')

exports.creatuserwalletdata = async (req, res) => {
    try {
        const { address, ETHbalance, aGRTBalance, ausdtBalance } = req.body;

        // create the table data
        await walletModel.create( address, ETHbalance, aGRTBalance, ausdtBalance)
        res.status(201).json({ success: true, message: 'wallet created  successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });

    }
}

// Get wallet by user ID
exports.getWalletByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find wallet by user ID
      const [walletRows] = await walletModel.findByUserId(userId);
      const wallet = walletRows[0];
  
      if (!wallet) {
        return res.status(404).json({ success: false, error: 'Wallet not found' });
      }
  
      res.status(200).json({ success: true, wallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  };