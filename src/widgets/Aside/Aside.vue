<template>
  <aside class="aside">
    <ul class="list">
      <li class="list__item">
        <router-link class="aside__link" to="/">Главная</router-link>
      </li>

      <li class="list__item">
        <router-link class="aside__link" to="/categories">Категории</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>

</script>

<style lang="scss" scoped>
  .aside {
    background: linear-gradient(#030319, #222345);
    grid-area: aside;
    &__link {
      display: block;
      padding: 14px;
      color: #fff;
      text-decoration: none;
      font-size: 20px;
      transition: 0.5s;
      &:hover {
        background: rgba(21, 22, 77, 0.99);
      }
    }
  }

  .list {
    margin: 0;
    padding: 0;
    &__item {
      list-style: none;
    }
  }
</style>