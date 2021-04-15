const auth = require('../auth/createToken');

const { users } = require('../models');

const validateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ where: { email } });
    if (!user) throw new Error('User not found!');
    if (user.password !== password) throw new Error('Wrong password!');
    // retirar password para formar o token
    const { password: _, ...userSafe } = user;

    req.token = auth.createToken(userSafe);
    req.user = userSafe;
    next();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  validateUser,
};
