import { defineStore } from "pinia";

export const useBasket = defineStore('basket',{
    state: () => ({
        basketList: JSON.parse(localStorage.getItem('basket')) || []
    }),
    actions:{
        persist(){
            localStorage.setItem('basket',JSON.stringify(this.basketList))
        },
        select(name){
            const indexIn = this.basketList.indexOf(name)
            if(indexIn > -1){
                this.basketList.splice(indexIn,1)
                this.persist()
            }else{
                this.basketList.push(name)
                this.persist()
            }
        },
        isAdd(pro){
            return this.basketList.indexOf(pro) > -1
        }
    },
    getters:{}
})