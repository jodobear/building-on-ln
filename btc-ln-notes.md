# BTC LN Notes

## LN Channels

* It is better to open bigger channels than a few smaller channels since, it's a major overhead to manage many channels.

## Bitcoinaverage alternatives

Bitcoin Average removed it's free tier so select one of the following free APIs for price:

1. [Nomics](https://p.nomics.com/cryptocurrency-bitcoin-api) - looks professional and free. Check how to get price data.
2. [ccxt](https://github.com/ccxt/ccxt) - more involved, requires you to setup accounts with exchanges to get data.
3. [Coingecko](https://www.coingecko.com/en/api) - FOSS and seems the easiest, [github](https://github.com/miscavage/CoinGecko-API), [docs](https://www.coingecko.com/en/api#/simple/get_simple_price). What we might need: `curl -X GET "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd" -H  "accept: application/json"` - that's it. JS code:
```js
let data = await CoinGeckoClient.simple.price({
    ids: ['bitcoin'],
    vs_currencies: ['eur', 'usd'],
});
```
Initialize it using:
```js
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};
```

## LN Resources

1. [LN at Wikiversity](https://en.wikiversity.org/wiki/Lightning_Network)
2. [LNURL](https://github.com/btcontract/lnurl-rfc/blob/master/spec.md)
3. [Awesome lnurl](https://github.com/fiatjaf/awesome-lnurl)
3. [Web LN](https://webln.dev/#/)
4. [BTCPay Server](https://docs.btcpayserver.org/features/lightningnetwork), [chat](https://chat.btcpayserver.org/)
6. [Polar](https://github.com/jamaljsr/polar) : A visual regtest tool for btc/ln stack

### [LND](https://dev.lightning.community/), [slack](https://app.slack.com/client/T6AK88MGV/C6BKD3RKR?cdn_fallback=2)
1. [LND, dev guides]
2. [LND, JS gRPC guide](https://dev.lightning.community/guides/javascript-grpc/)
3. [LND, webapp Guide](https://dev.lightning.community/tutorial/)
4. [LND API reference](https://api.lightning.community/)
5. [LND loop docs](https://lightningloop.io/#lightning-loop-grpc-api-reference)

### [c-lightning](https://github.com/ElementsProject/lightning), [irc](https://webchat.freenode.net/#c-lightning)
1. [c-lightning, readthdocs](https://lightning.readthedocs.io/lightning-pay.7.html)
2. [lightning-charge server](https://github.com/ElementsProject/lightning-charge)
3. [lightning charge client js](https://github.com/ElementsProject/lightning-charge-client-js)
4. [RTL c-lightning REST API](https://github.com/Ride-The-Lightning/c-lightning-REST)
5. [c-lightning lnurl plugin](https://github.com/fiatjaf/lightningd-gjson-rpc/tree/master/cmd/lnurl)



