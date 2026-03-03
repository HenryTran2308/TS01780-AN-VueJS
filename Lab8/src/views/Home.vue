<template>
  <div>
    <h1>Chào mừng tới lab8 </h1>
    <p>Trần Hải An</p>
    <router-link to="/blog">View Blogs</router-link> |
    <router-link to="/profile">My Profile</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>