const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validator,
  loginRules,
  registerRules,
} = require("../middlewares/bodyValidator");
const isAuth = require("../middlewares/IsAuth");
const User = require("../model/User");

router.post("/register", registerRules(), validator, async (req, res) => {
  const { FirstName, LastName, Gender, Birth, PicURL, Phone, Adresse, Email, Password, Role } = req.body;
  try {
    //find if the user already exists
    let user = await User.findOne({ Email });
    if (user) {
      return res.status(400).send({ msg: "User Already exists" });
    }

    //create a new user
    user = new User({
      FirstName,
      LastName,
      Gender,
      Birth,
      PicURL,
      Phone,
      Adresse,
      Email,
      Password,
      Role,
    });

    //hash the password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(Password, salt);

    user.Password = hashedPassword;

    //save the user
    await user.save();
    //sign the user

    const payload = {
      _id: user._id,
    };

    const token = await jwt.sign(payload, process.env.secretOrKey);

    res.status(200).send({ msg: "Login Success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});



router.post("/login", loginRules(), validator, async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(400).send({ msg: "Bad Credentials Email" });
    }
    const isMatch = await bcrypt.compare(Password, user.Password);

    if (!isMatch) {
      return res.status(400).send({ msg: "Bad Credentials Password" });
    }

    //sign the user

    const payload = {
      _id: user._id,
    };

    const token = await jwt.sign(payload, process.env.secretOrKey);

    res.send({ msg: "Login Success", user: converUser(user), token });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});


router.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params
    const newUser = req.body
    let result = await User.updateOne({ _id }, { $set: { ...newUser } })
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: " User already updated  !!! " })
    }
    res.status(200).send({ msg: " User updated succ ..... " })

  } catch (error) {
    res.status(400).send({ msg: " Can not update user with this id !!! ", error })
  }
});


router.get("/me", isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

router.get("/", async (req, res) => {
  const users = await User.find()
  res.status(200).send({ users });
});


module.exports = router;


const converUser = ({ FirstName, LastName, Gender, Birth, PicURL, Phone, Adresse, Email, Role, _id }) => ({
  FirstName, LastName, Gender, Birth, PicURL, Phone, Adresse, Email, Role,
  _id,
});

