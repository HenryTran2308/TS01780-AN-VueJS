<template>
  <div class="main-container">
    <div class="form-container">
      <h2 class="title">Quản lý công việc</h2>

      <!-- Form thêm công việc -->
      <form @submit.prevent="addList" class="form">
        <div class="form-group">
          <label class="label">Tên công việc:</label>
          <input
            type="text"
            class="input-field"
            v-model="newToDo"
            placeholder="Nhập tên công việc"
          />
        </div>

        <button type="submit" class="btn-add">Thêm công việc</button>
      </form>

      <!-- Danh sách công việc -->
      <div class="job-list">
        <div class="job-item" v-for="(job, index) in jobs" :key="index">
          <span class="job-text">{{ job }}</span>
          <button
            class="btn-delete"
            @click="removeList(index)"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newToDo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);

const addList = () => {
  if (newToDo.value.trim()) {
    jobs.value.push(newToDo.value.trim());
    newToDo.value = '';
  }
};

const removeList = (index) => {
  jobs.value.splice(index, 1);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
}

.form {
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.btn-add {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: inherit;
}

.btn-add:hover {
  background-color: #0056b3;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.job-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.job-item:hover {
  background-color: #f0f0f0;
}

.job-text {
  font-size: 14px;
  color: #333;
  flex: 1;
}

.btn-delete {
  padding: 6px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: inherit;
}

.btn-delete:hover {
  background-color: #c82333;
}
</style>