const { users } = require('../models');

const loginUser = async (req, res) => {
  try {
    const { token } = req;
    const { name, email } = req.user.dataValues;
    const data = { name, email, token };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await users.findOne({ where: { email } });
    if (exists) throw new Error('Email already in database');
    const newUser = await users.create({
      name,
      email,
      password,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await users.update(
      { name, password },
      {
        where: { email },
      },
    );
    res.status(200).json({ message: 'Updated!' });
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
  updateUser,
};
