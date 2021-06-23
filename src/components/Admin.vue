<template>
  <div class="hello">
    <h1>Welcome to administrator page</h1>
    <h2>{{msg}}</h2>
    <router-link to="/">Home</router-link>
  </div>



</template>

<script>
export default {
  data () {
    return {
      msg: 'News CRUD'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

