const bcrypt = require("bcrypt");
const User = require("../models/user-model");

// registerUser

const register = async (request, response) => {
  try {
    const password = await bcrypt.hash(request.body.password, 10);
    const user = await User.create({
      username: request.body.username,
      password,
    });

    response.status(201).json(user);
  } catch (error) {
    response.status(400).json(error);
  }
};
// loginUser

const login = async (request, response) => {
  try {
    // username & password
    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (!user) response.status(400).json({ error: "Invalid Credits" });

    const isSamePassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword)
      response.status(400).json({ error: "Invalid Credits" });

    response.status(200).json({
      _id: user._id,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    response.status(400).json(error);
  }
};
module.exports = { login, register };
