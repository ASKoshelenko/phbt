<template>
  <div id="show-blogs">
    <h1>All block Articles</h1>
    <input type="text" v-model="search">
    <div v-for="blog in blogs" class="single-blog" placeholder="search blogs ">
      <h2>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    
  }
}
</script>