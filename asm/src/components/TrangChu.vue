<template lang="">
         <div class="container mt-5">
        <!-- Header -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="d-flex align-items-center gap-3">
                    <h1 style="color: white">Danh Sách Bài Viết</h1>
                    <button class="btn btn-primary px-4" @click="$router.push('/dangbai')">Đăng Bài Viết</button>
                    <img src="./images/avatar.png" class="rounded-circle avatar" alt="Avatar" @click="$router.push('/trangcanhan')"
    />
                </div>
            </div>
        </div>

        <!-- Danh sách bài viết -->
        <div class="row row-cols-2 g-4">
            <!-- Bài viết 1 -->
            <div class="col">
                <div class="card">
                    <img src="./images/eat-clean.png" class="card-img-top" style="height: 350px; object-fit: cover;" alt="Bài viết">
                    <div class="card-body">
                        <h5 class="card-title">Tiêu đề bài viết 1</h5>
                        <p class="card-text text-muted">Tác giả: Nguyễn Văn A | 2024-01-20</p>
                        <p class="card-text">Đây là nội dung tóm tắt của bài viết. Bài viết này nói về những kiến thức thú vị về công nghệ...</p>
                        <button class="btn btn-info btn-sm" style="color: white" @click="$router.push('/chitietbai')">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <!-- Bài viết 2 -->
            <div class="col">
                <div class="card">
                    <img src="./images/sesameoil_300x300.jpg" class="card-img-top" style="height: 350px; " alt="Bài viết">
                    <div class="card-body">
                        <h5 class="card-title">Tiêu đề bài viết 2</h5>
                        <p class="card-text text-muted">Tác giả: Trần Thị B | 2024-01-19</p>
                        <p class="card-text">Đây là nội dung tóm tắt của bài viết. Bài viết này nói về những mẹo hữu ích trong cuộc sống...</p>
                       <button class="btn btn-info btn-sm" style="color: white" @click="$router.push('/chitietbai')">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <!-- Bài viết 3 -->
            <div class="col">
                <div class="card">
                    <img src="./images/tap-piltes.jpg" class="card-img-top" style="height: 350px;" alt="Bài viết">
                    <div class="card-body">
                        <h5 class="card-title">Tiêu đề bài viết 3</h5>
                        <p class="card-text text-muted">Tác giả: Lê Văn C | 2024-01-18</p>
                        <p class="card-text">Đây là nội dung tóm tắt của bài viết. Bài viết này nói về những xu hướng mới nhất...</p>
                       <button class="btn btn-info btn-sm" style="color: white" @click="$router.push('/chitietbai')">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <!-- Bài viết 4 -->
            <div class="col">
                <div class="card">
                    <img src="./images/tap-pilates1.jpg" class="card-img-top" style="height: 350px;" alt="Bài viết">
                    <div class="card-body">
                        <h5 class="card-title">Tiêu đề bài viết 4</h5>
                        <p class="card-text text-muted">Tác giả: Phạm Thị D | 2024-01-17</p>
                        <p class="card-text">Đây là nội dung tóm tắt của bài viết. Bài viết này nói về những bí quyết thành công...</p>
                        <button class="btn btn-info btn-sm" style="color: white" @click="$router.push('/chitietbai')">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Phân trang -->
        <div class="row mt-4">
            <div class="col-12">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">Trước</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Sau</a></li>
                    </ul>
                </nav>
            </div>
            <button class="btn btn-danger px-4" @click="$router.push('/dangnhap')">Đăng Xuất</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}

.card:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
}

h1 {
    color: #0d6efd;
    font-weight: 700;
}

.btn-primary {
    background-color: #0d6efd;
    border: none;
     font-weight: 600;
}

.btn-primary:hover {
    background-color: #0b5ed7;
}

.btn-info {
    background-color: #0d6efd;
    border: none;
}

.btn-info:hover {
    background-color: #0b5ed7;
}

.avatar {
   width: 52px;
  height: 52px;
  cursor: pointer;
  border: 2px solid white;
  object-fit: cover;
  transition: all 0.2s ease;
  margin-left: auto;
}
.avatar:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
</style>