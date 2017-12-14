# CoffeeCoin REST Api.

# Firsts things first
the first thing you should do to use the api is to sign in a user.
to do that use the url
```
POST /signup/
```
with params
```
{
  email : [string]
  pass : [string]
}
```
returns
```
addr -> hex string containing the address of the user
```

take in mind that when a user first signs up we will give 20 free coffee coins

# Returning user?
use login to get back the user address.
```
POST /login/
```
with params
```
{
  email : [string]
  pass : [string]
}
```
returns
```
addr -> hex string containing the address of the user
```

# checking balance
```
GET /balance/[addr]
```
returns the number of coffeecoins in that addr.

# Transfering from user to user
```
POST /send/
```
with params
```
{
  sender : [addr],
  receiver : [addr],
  amount : [number]
}
```
