import { Coin } from "@terra-money/terra.js";
import Action from "../constants/actionTypes";


export interface IAction {
    type: Action
    payload?: { [k: string]: any }
  }

  export interface IStakedFunds {
    avalaible : string,
    availableValue : string,
    rewardsTotal : number,
    denoms :  IDenom[]

  }

  export interface IDenom {
    denom : string,
    amount : number
  }
  export interface ICoin{
    coin : Coin,
    symbol? : string
  }