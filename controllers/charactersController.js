const { characters } = require('../models');

const getAllCharacters = async (_req, res) => {
  try {
    const data = await characters.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const favoriteChar = async (req, res) => {
  try {
    const { name, idChar } = req.body;
    const exists = await characters.findOne({ where: { name } });
    if (exists) throw new Error('Characters already in favorited');
    const favorite = await characters.create({
      name,
      idChar,
    });
    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getAllCharacters,
  favoriteChar,
};
