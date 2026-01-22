<template lang="">


    <form @submit.prevent="submitPost">

       <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Đăng bài viết mới</h5>
          </div>

          <div class="card-body">
            <!-- Tiêu đề -->
            <div class="mb-3">
              <label class="form-label">Tiêu đề bài viết</label>
              <input type="text" class="form-control" placeholder="Nhập tiêu đề bài viết"/>
            </div>

            <!-- Nội dung -->
            <div class="mb-3">
              <label class="form-label">Nội dung bài viết</label>
              <textarea class="form-control" rows="6" placeholder="Nhập nội dung bài viết..."></textarea>
            </div>

            <!-- Ảnh minh họa -->
            <div class="mb-3">
              <label class="form-label">Ảnh minh họa (URL)</label>
              <input type="text" class="form-control" placeholder="https//"/>
            </div>

            <!-- Preview ảnh (fake) -->
            <div class="mb-3 text-center">
              <img src="./images/video1.jpg" class="img-fluid rounded" alt="Preview"/>
            </div>

            <!-- Button -->
            <div class="d-flex justify-content-end gap-2">
              <button class="btn btn-secondary" @click="$router.push('/trangchu')">Hủy</button>
              <button class="btn btn-primary" type="submit">Đăng bài</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </form>
</template>
<script>
export default {

    methods: {
        submitPost() {
            alert("Đăng bài thành công!")
            this.$router.push("/trangchu")
        }
    },

}
</script>
<style lang="">

</style>