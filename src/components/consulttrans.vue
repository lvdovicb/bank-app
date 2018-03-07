<template>
   <table class="table table-striped">
      <thead class="thead-dark">
          <th>Id</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Delete</th>
          
      </thead>
      <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{transaction.id}}</td>
            <td>{{transaction.name}}</td>
            <td>{{transaction.amount}}</td>
            <td>{{transaction.category}}</td>
            <td>{{transaction.date}}</td>
            <td><i class="fas fa-trash-alt"  @click="remove"></i></td>
          </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name:'consulttrans',
  props: {
           transactions: {
               type: Array,
               required: true
             }
  },
  methods: {
    remove(index){
      this.$emit("remove", this.transaction)
    }
  }
}
</script>

<style>

</style>
