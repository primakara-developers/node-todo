const { Router } = require("express");
const todoRouter = require("./todo");

const router = Router();

router.get("/", (_, res) => {
  return res.json("Index");
});

router.use("/todo", todoRouter);

module.exports = router;
