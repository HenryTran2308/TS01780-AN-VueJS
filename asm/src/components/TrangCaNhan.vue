<template lang="">
    <div class="container mt-5">
    <div class="card p-4 mx-auto" style="max-width: 400px;">
      <h3 class="text-center mb-4">Trang Cá Nhân</h3>

      <!-- Avatar -->
      <div class="text-center mb-3">
        <img :src="avatar" class="rounded-circle avatar-lg mb-2" />
        <div>
          <button class="btn btn-outline-primary btn-sm" @click="doiAvatar">
            Đổi avatar
          </button>
        </div>
      </div>

      <!-- Thông tin -->
      <div class="mb-3">
        <label>Họ và tên</label>
        <input class="form-control" v-model="name" />
      </div>

      <div class="mb-3">
        <label>Email</label>
        <input class="form-control" v-model="email" />
      </div>

      <div class="mb-3">
        <label>Mật khẩu</label>
        <input type="password" class="form-control" />
      </div>

      <button class="btn btn-primary w-100" type="submit" @click="luu">
        Lưu thay đổi
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      avatar: "./images/avatar.png"
    }
  },
  methods: {
    doiAvatar() {
      this.avatar = "./images/corevalue.jpg"
      alert("Đổi avatar thành công")
    },
    luu() {
      alert("Lưu thông tin thành công")
      this.$router.push('/trangchu')
    }
  }
}
</script>
<style scoped>
.avatar-lg {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 3px solid #0d6efd;
}
</style>
