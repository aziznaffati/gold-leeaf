const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("FirstName", "Name is Required").notEmpty(),
  body("LastName", "Last Name is Required").notEmpty(),
  body("Password", "password must contain at least 6 charachters").isLength({
    min: 6,
    max: 20,
  }),
  body("Email", "Invalid Email").isEmail(),
];

const loginRules = () => [
  body("Email", "Invalid Email").isEmail(),
  body("Password", "Password must contain at least 6 Charachters").isLength({
    min: 6,
    max: 20,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validator,
  loginRules,
  registerRules,
};