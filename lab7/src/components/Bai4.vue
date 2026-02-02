<template>
  <div>
    <!-- Nếu người dùng chưa đăng nhập, hiển thị form đăng nhập -->
    <LoginComponent v-if="!loggedInUser" @loggedIn="handleLoginSuccess" />
    <!-- Nếu người dùng đã đăng nhập, hiển thị component bình luận -->
    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './Login.vue';
import CommentComponent from './Comment.vue';

// Quản lý trạng thái người dùng đã đăng nhập
const loggedInUser = ref(null);

// Xử lý sự kiện đăng nhập
function handleLoginSuccess(username) {
  loggedInUser.value = username;
}
</script>