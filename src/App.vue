<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'news-create' }" class="nav-link">Добавить новость</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'news' }" class="nav-link">Все новости</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.gap {
  margin-top: 50px;
}
</style>
