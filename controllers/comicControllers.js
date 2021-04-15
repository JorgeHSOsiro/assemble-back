const { comics } = require('../models');

const getAllComics = async (_req, res) => {
  try {
    const data = await comics.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const favoriteComics = async (req, res) => {
  try {
    const { title, idCom } = req.body;
    const exists = await comics.findOne({ where: { title } });
    if (exists) throw new Error('Comics already in favorited');
    const favorite = await comics.create({
      title,
      idCom,
    });
    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getAllComics,
  favoriteComics,
};
