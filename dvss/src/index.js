import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const testUser = {
  id: "01",
  username: "windowlicker",
  userhash: "lkiwfhqv0ryq09ryq30rhawfhaksdfhadfas",
  balance: 0,
  noOfRounds: 0,
  amtWon: 0,
  amtLost: 0
}

// console.log(getUserHash(testUser));


const AmountDisplay = ({ user }) => {
  console.log(user.balance);
  return (
    <span className="amount-display">{user.balance}</span>
  )
}

const DepositButton = () => <button className="deposit-button" name="submit">Deposit</button>

const amount = 100000;

// const depositButton = document.querySelector('.deposit-button');

const generateInvoice = (user, amount) => {
  const userId = user.id;

}

// depositButton.addEventListener('click', generateInvoice(testUser, amount));

ReactDOM.render(
  [<AmountDisplay user={testUser} />,
  <DepositButton  />],
  document.querySelector('#root')
);
