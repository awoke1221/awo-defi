
const userModel = require('../models/user-model')


// user register controller
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // creating the new user
        userModel.create(username, email, password);

        res.status(201).json({ success: true, message: 'User registered successfully' })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }

}
exports.loinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check the user is alredy registered
        const [userrow] = await userModel.findByEmail(email);
        const user = userrow[0];

        if (!user) {
            return res.status(404).json({ success: false, error: "user not found" })
        }

        // check the password is correct
        if (password !== userModel.password) {
            return res.status(401).json({ success: false, error: "incorect password" })
        }
        // user is autenticated 
        return res.status(200).json({ success: true, message: "user login successfuly" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}