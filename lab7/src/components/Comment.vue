<template>
  <div class="col-sm-6 s-5">
    <h2>Bình luận bài viết</h2>
    <div class="card">
      <img class="card-img" src="./images/img1.jpg" alt="Minh đất" />
      <div class="card-body">
        <h5 class="card-title">8 loại rau cú quả giàu canxi</h5>
        <p class="card-text">Canxi là khoáng chất cần thiết cho cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung rau quả giàu canxi là cách tốt nhất, có ít hại hơn gìau canxi...</p>
      </div>
      <form @submit.prevent="submitComment">
        <div class="mt-3">
          <textarea
            class="mt-3"
            placeholder="Nhập bình luận của bạn"
            v-model="commentText"
          ></textarea>
          <button type="submit" class="btn btn-success">Gửi bình luận</button>
        </div>
      </form>
      <div v-if="comments.length" class="mt-3">
        <h5>Danh sách các bình luận:</h5>
        <ul style="list-style-type: circle;">
          <li v-for="(comment, index) in comments" :key="index">
            <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['username']);

const commentText = ref('');

// Mảng chứa các bình luận đã gửi
const comments = ref([]);

// Xử lý gửi bình luận
function submitComment() {
  if (commentText.value) {
    // Thêm bình luận mới vào mảng comments
    comments.value.push({
      name: props.username, // Sử dụng tên props
      text: commentText.value
    });

    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = '';
  }
}
</script>