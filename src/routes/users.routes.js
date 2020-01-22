const router = require("express").Router();

const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout
} = require("../controllers/users.controller");

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
