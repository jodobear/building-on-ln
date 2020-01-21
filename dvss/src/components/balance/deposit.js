import React from 'react';
import ReactDOM from 'react-dom';
import bcrypt from 'bcrypt';

const satRounds = Math.random().floor() * 8;

const getUserHash = (user) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  user.hash = bcrypt.hashSync(user.username, salt);
}
const testUser = {
  id: "01",
  username: "windowlicker",
  hash: "",
  balance: 0,
  noOfRounds: 0,
  amtWon: 0,
  amtLost: 0
}

console.log(getUserHash(testUser));

const depositButton = document.querySelector('.deposit-button');

const AmountDisplay = ({ user }) => {
  console.log(user.balance);
  return (
    <span className="amount-display">{user.balance}</span>
  )
}

const Deposit = (user, amount) => {
  const userId = user.id

}

ReactDOM.render(
  [<AmountDisplay user={testUser} />,
  <Deposit user={testUser} amount={amount} />],
  document.querySelector('#root')
);