<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
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
            <input type="text" class="form-control" v-model="item.tags[0].value"/>
          </div>
          <div class="form-group">
            <label>Type:</label>
            <input type="text" class="form-control" v-model="item.type" placeholder="ARTICLE"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item : {},
      updateData: {
        "type": "NEWS",
        "title": "News 22safas ",
        "previewText": "News 22 Preview Text",
        "contentHtml": "<div>News 22 Content HTML</div>",
        "imageUrl": "https://some-url",
        "tags": ["Tag 22", "Tag 3"],
        "categories": [1, 2]
      }
    }
  },

  created: function () {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri = 'https://mediodok.kz/pp-news-service/api/v1/news/' + this.$route.params.id;
      this.$http.get(uri).then((response) => {
        this.item = response.data;
      });
    },

    updateItem() {
      let token = localStorage.getItem('jwt');
      let uri = 'https://mediodok.kz/pp-news-service/api/v1/news/' + this.$route.params.id;
      this.$http.put(uri, this.updateData, {
        headers: {
          ContentType: 'application/json',
          Authorization: 'Bearer ' + token,
        }}).then((response) => {
        this.$router.push({name: 'news'});
      });
    }
  }
}
</script>
