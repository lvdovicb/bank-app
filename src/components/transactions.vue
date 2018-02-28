<template>
  <section>
    <form action="POST">
      <div class="form-group">
      <input v-model="name" type="text" name="name" id="name" placeholder="Name">
      <input v-model="amount" type="number" name="amount" id="amount" placeholder="Amount">
      <input v-model="category" type="text" name="category" id="category" placeholder="Category">
      <input v-model="date" type="date" name="date" id="date" placeholder="Date">
      <button class="btn btn-success" type="submit">Add transaction</button>
      </div>
    </form>
  </section>
  
</template>




<script>
export default {
        name: "transactions",
        data: function(){
          return {
            transaction: {id: "", name: "", amount: int, date: "", category: ""}
          }
        }, 
        methods: {
          action1(transaction){
            this.$emit('rambo', transaction);
          }
        }
    }

</script>






<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
