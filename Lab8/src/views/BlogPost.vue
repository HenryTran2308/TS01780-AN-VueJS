<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <router-link to="/blog">Back to Blog List</router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogPostView',
  data() {
    return {
      posts: [
        { id: 1, title: 'nihaoma', content: 'alo Vu ha Vu' },
        { id: 2, title: 'halo', content: 'High cortisol' },
        { id: 3, title: 'goodbye', content: 'See you later!' }
      ],
      post: {}
    }
  },
  created() {
    const postId = parseInt(this.$route.params.id)
    this.post = this.posts.find(p => p.id === postId) || {}
  }
}
</script>