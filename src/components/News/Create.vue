<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="item.title"/>
          </div>
          <div class="form-group">
            <label>Category:</label>
            <input type="text" class="form-control" v-model="item.categoryId"/>
          </div>
          <div class="form-group">
            <label>Content:</label>
            <input type="text" class="form-control" v-model="item.contentHtml"/>
          </div>
          <div class="form-group">
            <label>Image:</label>
            <input type="text" class="form-control" v-model="item.imageUrl"/>
          </div>
          <div class="form-group">
            <label>Preview:</label>
            <input type="text" class="form-control" v-model="item.previewText"/>
          </div>
          <div class="form-group">
            <label>Tags:</label>
            <input type="text" class="form-control" v-model="item.tags[0]"/>
          </div>
          <div class="form-group">
            <label>Type:</label>
            <input type="text" class="form-control" v-model="item.type" placeholder="ARTICLE"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Item"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'AddItem'
  },
  data() {
    return {
      item: {
        "categoryId": 0,
        "contentHtml": '',
        "imageUrl": '',
        "previewText": '',
        "tags": [
          ''
        ],
        "title": '',
        "type": 'ARTICLE'
      }
    }
  },
  methods: {
    addItem() {
      console.log(this.item)
      let token = localStorage.getItem('jwt');
      let uri = 'https://mediodok.kz/pp-news-service/api/v1/news';
      this.$http.post(uri,this.item, {
        headers: {
          Authorization: 'Bearer ' + token,
        }}).then((response) => {
          console.log(response.data)
        });
    }
  }
}
</script>
