import { defineStore } from "pinia";

export const useProducts = defineStore('products',{
    state:() => ({
        isFav:JSON.parse(localStorage.getItem('product')) || []
    }),
    actions:{
        persist(){
            localStorage.setItem('product',JSON.stringify(this.isFav))
        },
        toggle(product){
            const indexIn = this.isFav.indexOf(product)
            if(indexIn > -1){
                //remove
                this.isFav.splice(indexIn,1)
                this.persist()
            }else{
                //add
                this.isFav.push(product)
                this.persist()
            }
        },
        isInFav(pro){
           return this.isFav.indexOf(pro) > -1 
        }
    },
    getters:{}
})