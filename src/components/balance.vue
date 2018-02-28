<template>
  <section>

    <table class="table table-striped">
      <thead class="thead-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
      </thead>
      <tbody>
          <tr v-for="transaction of transactions" :key="transaction.id">
            <td>{{transaction.id}}</td>
            <td>{{transaction.name}}</td>
            <td>{{transaction.amount}}</td>
            <td>{{transaction.date}}</td>
            <td>{{transaction.category}}</td>
          </tr>
      </tbody>
    </table>

      <transactions></transactions>
      
</section>
</template>





<script>
import transactions from "./transactions.vue";

export default {
    name: "balance", 
    components: {
       transactions
    }, 
    data:function(){
      return {
        transactions:[
          {id:0, name: "rent", amount: -300, date: "2018/12/25", category:"rent"},
          {id:1, name: "casino", amount: -3, date: "2018/12/25", category:"food"}
        ]
      }
    }, 
    methods:{
        addTrans(transaction){
					this.transaction.push(transaction)
				},
        removeTrans(transaction){
						this.transactions = this.transactions.filter(transaction => transaction.id !== transaction.id)
        }
    }
  }



</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
