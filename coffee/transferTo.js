
function transferTo (coin, req, res) {
  coin.sendCoin(req.body.sender, req.body.receiver, req.body.amount)
  .then(() => res.send('OK'))
  .catch(() => res.status(500).send('not enough money'))
}

module.exports = transferTo
