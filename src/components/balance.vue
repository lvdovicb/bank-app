<template>
  <section>

    <transactions @add="add" ></transactions>
    <consulttrans :transactions="transactions" @remove="remove(index)"></consulttrans>
      
</section>

</template>


<script>
import transactions from "./transactions.vue";
import consulttrans from "./consulttrans.vue";

// import Transaction from "../transaction.js";

export default {
    name: "balance", 
    components: {
      transactions,
      consulttrans
    }, 
    data(){
      return {
        transactions:[]        
      }
       
    }, 
    methods:{
        add(transaction){
					this.transactions.push(transaction)
				},
       remove(index){
        this.transactions.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
