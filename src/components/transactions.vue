<template>
  <section>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <!-- <input v-model="transaction.id" type="text" name="id" id="id" placeholder="Id"> -->
        
        <input v-model="transaction.name" type="text" name="name" id="name" placeholder="Name">
        <input v-model="transaction.amount" type="number" step="0.01" name="amount" id="amount" placeholder="Amount" required>
        <input v-model="transaction.category" type="text" name="category" id="category" placeholder="Category">
        <input v-model="transaction.date" type="date" name="date" id="date" placeholder="Date">
        <button class="btn btn-success" type="submit">Add transaction</button>

      </div>
     
    </form>
    
  </section>
  
</template>

<script>
import Transaction from "../transaction.js";

export default {
        name: "transactions",
        data(){
          return {
            transaction: {
              id:"",
              name: "",
              amount: "",
              category: "",
              date: new Date()
            }
          }
        },
        methods: {
         onSubmit(){            
            this.$emit('add', Object.assign({}, this.transaction));
          }
    }
}
</script>






<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
