const catchError = require("../utils/catchError");

const Fragances = require("../models/Fragance");
const Fragance = require("../models/Fragance");

const getAll = catchError(async (req, res) => {
  const result = await Fragances.findAll();

  return res.json(result);
});

const create = catchError(async (req, res) => {
  const result = await Fragances.create(req.body);

  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Fragances.findByPk(id);
  return res.json(result);
});

const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Fragances.destroy({ where: { id } });
  if (!result) return res.status(400).json("User not found");
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const fragance = await Fragances.update(req.body, {
    where: { id },
    returning: true,
  });

  if (fragance[0] === 0) return res.sendStatus(404);
  return res.status(200).json(fragance[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update,
};
