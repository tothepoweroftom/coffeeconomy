function give (coin, req, res) {
  coin.generate(req.body.addr, req.body.amount)
  .then(() => res.send('ok'))
  .catch(() => res.status(500).send('something went wrong'))
}

module.exports = give
