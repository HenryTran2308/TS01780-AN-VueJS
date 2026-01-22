<template lang="">
    <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">

        <!-- BÀI VIẾT -->
        <div class="card shadow mb-4">
          <img src="./images/eat-clean.png" style="height: 350px; object-fit: cover;" class="card-img-top" alt=""
          />
          <div class="card-body">
            <h3 class="card-title">Tiêu đề bài viết</h3>
            <p class="text-muted">
              Tác giả: Nguyễn Văn A | 20/01/2026
            </p>
            <p class="card-text">
              Đây là nội dung chi tiết của bài viết. Nội dung có thể dài nhiều
              dòng để mô phỏng bài viết thật trong blog. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>

        <!-- BÌNH LUẬN -->
        <div class="card shadow mb-4">
          <div class="card-body">
            <h5 class="mb-3">Bình luận</h5>

            <!-- Comment item -->
            <div class="mb-3 border-bottom pb-2">
              <strong>Trần Thị B</strong>
              <small class="text-muted"> - 19/01/2026</small>
              <p class="mb-1">Bài viết rất hay và bổ ích </p>
            </div>

            <div class="mb-3 border-bottom pb-2">
              <strong>Lê Văn C</strong>
              <small class="text-muted"> - 18/01/2026</small>
              <p class="mb-1">Cảm ơn tác giả đã chia sẻ!</p>
            </div>

            <!-- FORM BÌNH LUẬN -->
            <form @submit.prevent="submitComment">
              <div class="mb-3">
                <label class="form-label">Viết bình luận</label>
                <textarea class="form-control" rows="3" placeholder="Nhập bình luận của bạn..."></textarea>
              </div>
              <div class="d-flex gap-3">
                <button class="btn btn-primary flex-fill custom-btn" type="submit">Gửi bình luận</button>
                <button class="btn btn-primary flex-fill custom-btn" style="background-color: grey; box-shadow:  0 8px 20px rgba(0, 0, 0, 0.25)" @click="$router.push('/trangchu')">Quay lại Trang Chủ</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {

    methods: {
    submitComment() {
      alert("Bình luận thành công!")
      this.$router.push("/trangchu")
    },
    
  }
}
</script>
<style lang="">

</style>