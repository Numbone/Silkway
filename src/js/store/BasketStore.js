import { makeAutoObservable } from "mobx"

 export default class BasketStore{
    constructor(){
        this._basket=[
            
        ]
        this._transaction={}
        this._onetransaction={}
        makeAutoObservable(this)
    }

    setBasket(array){
        this._basket=array
    }
    setTransaction(trans){
        this._transaction=trans
    }
    setOneTransaction(data){
        this._onetransaction=data
    }
    get basket(){
        return this._basket
    }
    get transaction(){
        return this._transaction
    }
    get onetransaction(){
        return this._onetransaction
    }
 }