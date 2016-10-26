<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
      props: {
        title: {
          type: String,
          required: true
        }
      }
  }
</script>

<style scoped>
  .header {
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #009CD5;
  }

  .title {
    font-size: 16px;
    color: #fff;
  }
</style>
