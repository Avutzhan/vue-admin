<template>
  <div>
    <h1>Новости</h1>

    <table class="table table-hover">
      <thead>
      <tr>
        <td>ID</td>
        <td>Название</td>
        <td>Дата создания</td>
        <td>Действия</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.createdAt }}</td>
        <td><router-link :to="{name: 'news-update', params: { id: item.id }}" class="btn btn-primary">Редактировать</router-link></td>
        <td><button class="btn btn-danger"  v-on:click="deleteItem(item.id)">Удалить</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data(){
    return{
      items: [],
    }
  },

  created: function()
  {
    this.fetchItems();
  },

  methods: {
    fetchItems()
    {
      let uri = 'https://mediodok.kz/pp-news-service/api/v1/news/search';
      this.$http.post(uri, {
        "pagination": {
          "pageNumber": 0,
          "pageSize": 10
        }
      }).then((response) => {
        console.log(response)
        this.items = response.data.content;
        console.log(this.items)
      });
    },
    deleteItem(id)
    {
      let token = localStorage.getItem('jwt');
      let uri = 'https://mediodok.kz/pp-news-service/api/v1/news/' + id;
      this.items.splice(id, 1);
      this.$http.delete(uri, {
        headers: {
          Authorization: 'Bearer ' + token,
        }});
    }
  }
}
</script>
