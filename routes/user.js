const router = require("express").Router();
const User = require("../model/User");


router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const user = await User.findOne({ _id })

        res.status(200).send({ msg: "I find  the user.....", user })

    } catch (error) {
        res.status(400).send({ msg: " Can not get user with this id !!! ", error })

    }
});
module.exports = router;