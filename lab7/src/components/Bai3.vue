<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <h2>Form Đăng Ký</h2>
          <form @submit.prevent="register">
            <!-- Họ tên -->
            <div class="mb-3">
              <label class="form-label">Họ tên:</label>
              <input
                type="text"
                class="form-control"
                v-model="fullName"
                placeholder="Họ tên"
              />
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label class="form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="tien@gmail.com"
              />
            </div>

            <!-- Mật khẩu -->
            <div class="mb-3">
              <label class="form-label">Mật khẩu:</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Mật khẩu"
              />
            </div>

            <!-- Ngày sinh -->
            <div class="mb-3">
              <label class="form-label">Ngày sinh:</label>
              <input
                type="date"
                class="form-control"
                v-model="birthDate"
              />
            </div>

            <!-- Giới tính -->
            <div class="mb-3">
              <label>Giới tính:</label>
              <div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="male"
                    v-model="gender"
                    value="Nam"
                  />
                  <label class="form-check-label" for="male">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="female"
                    v-model="gender"
                    value="Nữ"
                  />
                  <label class="form-check-label" for="female">Nữ</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="other"
                    v-model="gender"
                    value="Khác"
                  />
                  <label class="form-check-label" for="other">Khác</label>
                </div>
              </div>
            </div>

            <!-- Ngôn ngữ -->
            <div class="mb-3">
              <label>Ngôn ngữ:</label>
              <div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="viet"
                    v-model="languages"
                    value="Tiếng Việt"
                  />
                  <label class="form-check-label" for="viet">Tiếng Việt</label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="eng"
                    v-model="languages"
                    value="Tiếng Anh"
                  />
                  <label class="form-check-label" for="eng">Tiếng Anh</label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="japan"
                    v-model="languages"
                    value="Tiếng Nhật"
                  />
                  <label class="form-check-label" for="japan">Tiếng Nhật</label>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
          </form>
        </div>
      </div>

      <!-- Hiển thị thông tin đã đăng ký -->
      <div v-if="isRegistered" class="col-md-6">
        <div class="card">
          <h2>Thông tin đã đăng ký:</h2>
          <div>
            <p><strong>Họ tên:</strong> {{ fullName }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Ngày sinh:</strong> {{ birthDate }}</p>
            <p><strong>Giới tính:</strong> {{ gender }}</p>
            <p><strong>Ngôn ngữ:</strong> {{ languages.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const birthDate = ref('');
const gender = ref('Nam');
const languages = ref([]);
const isRegistered = ref(false);

const register = () => {
  isRegistered.value = true;
};
</script>