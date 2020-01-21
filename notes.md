# Building On LN notes

## 20-01-21

- [sparko wallet plugin](https://github.com/fiatjaf/lightningd-gjson-rpc/tree/master/cmd/sparko), with [webhook plugin](https://github.com/fiatjaf/lightningd-gjson-rpc/tree/master/cmd/webhook) are easy to setup and can communicate via REST API. Just install the binaries in the `plugins` folder in `lightningd` directory. How they work? - No idea!

- Another thing is the [RTL, c-lightning API](https://github.com/Ride-The-Lightning/c-lightning-REST) but, i just don't know how to incorporate in my JS code. How do i communicate with my node using this?? There are 3 ways of using it:
  1. Run as an API server
  2. Run as c-lightning plugin
  3. Running c-lightning-REST as a service (Rpi or Linux platform users)- Which is preferred, i guess?

### Today's status

I don't know jack shit about how to use the RTL API! WHy do i bother with c-lightning when LND has such good documentation and guides!

Well, i'll still persist. Have messaged @suheb__ on twitter if he can help with this. If not i go on c-lightning IRC.

But, even then first thing we do next sesh is go through the [Pragmatic Lightning App](https://mitchelljustin.github.io/pragmatic-lightning/)

Then we need to dead shit tons of code to understand how these services are setup and how a web app communicates with them on a server - that's what i have no clue about.
