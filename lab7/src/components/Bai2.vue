<template>
  <div v-if="!isLoggedIn" class="login-container">
    <h3>Form Đăng nhập</h3>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          class="form-control" 
          v-model="email"
          placeholder="Nhập email"
        />
        <p v-if="emailError" style="color: red;">{{ emailError }}</p>
      </div>

      <div class="form-group">
        <label>Mật khẩu:</label>
        <input 
          type="password" 
          class="form-control" 
          v-model="password"
          placeholder="Nhập mật khẩu"
        />
        <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
      </div>

      <button type="submit" class="btn-login">Đăng nhập</button>
    </form>
  </div>

  <div v-else class="welcome-container">
    <h3>Chào mừng, {{ email }}!</h3>
    <button @click="logout" class="btn-logout">Đăng xuất</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const passwordError = ref('');
const email = ref('');
const password = ref('');
const emailError = ref('');
const isLoggedIn = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  // Reset thông điệp lỗi
  emailError.value = '';
  passwordError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  // Validate mật khẩu
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  }

  // Nếu không có lỗi, xử lý login
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = '';
  password.value = '';
  emailError.value = '';
  passwordError.value = '';
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-container {
  max-width: 400px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.welcome-container {
  max-width: 400px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

p {
  margin-top: 5px;
  font-size: 12px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background-color: #0056b3;
}

.btn-logout {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-logout:hover {
  background-color: #0056b3;
}
</style>