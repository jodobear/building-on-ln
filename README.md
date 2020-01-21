# Building on the Lightning Network

Documentation of my journey to learn to build applications on top of the Bitcoin Lightning Network.

Following is the objective and steps to achieve that object for the first 20 hours of study:

## 1. Target Performance Level

1. Implement BTCPay Server on soundBanana to accept payments.
2. Implement BTCPay Server on DvsS to work with user deposit & withdrawal.
3. Make the LN ATM and know what it implements and how does the stack communicate.

## 2. Deconstruct the Skill

1. BTCPay implementation on Lunanode(production).
2. c-lightning vs LND and evaluate tools available based on chosen implementation.
3. Channel Management.
4. Inbound liquidity management - loopIn, loopOut.
5. LNURL: how does it work and find exact use case.
6. WebLN: how does it work and find exact use case.
7. Network & API calls and how they work.

## 3. Initial Research-just enough

### 20-01-14:
ATM it seems the flow will be something like this;
1. BTCPay backend with c-lightning using `./bitcoin-lightning-cli.sh help` commands.
2. Install RTL c-lightning API `git clone https://github.com/saubyk/c-lightning-REST && cd c-lightning-REST && npm install`
3. Then install [lnurl c-lightning plugin](https://github.com/fiatjaf/lightningd-gjson-rpc/tree/master/cmd/lnurl), this might need [lightning charge server](https://github.com/ElementsProject/lightning-charge) as backend.
4. Then figure out how all of these work within the app and communicate with BTCPay Server. That's all you need.

#### Proposed steps:

1. Setup the BTCPay Server on Lunanode so that it syncs and is ready in a week or so.
2. Write a simple `Balance` component with `Deposit` & `Withdraw` components.
3. Read the docs and find out what methods are relevant, document them with signatures and examples.
4. Setup the ln environment on the server.
5. Implement the methods.