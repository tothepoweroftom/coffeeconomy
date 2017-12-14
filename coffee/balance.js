const account_one = "0x168792aa3def28e3640ef189de0aa560778a43de"

function balance (coin, req, res) {
  const accnt = req.params.token
  coin.getBalance.call(accnt)
  .then((balance) => res.send(balance))
  .catch((e) => res.status(500).send('error checking balance'))
  // i have to do this stupid thing because
  // .then(res.send) don't work because scopes.
}

module.exports = balance
