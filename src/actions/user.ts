
import { Coins } from "@terra-money/terra.js";
import {SET_ADDRESS,SET_COINS,SET_STAKE_FUNDS} from "../constants/index";
import { IStakedFunds } from "../interfaces";
export const setAddress = (address: string) => ({
  type: SET_ADDRESS,
  address
});

export const setCoins = (coins: Coins) => ({
  type: SET_COINS,
  coins
});


export const setStakinginfo =(info : IStakedFunds[])=>({
    type : SET_STAKE_FUNDS,
    info
})

