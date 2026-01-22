<template lang="">

        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body p-4">
                        <h2 class="mb-4">Đăng Nhập</h2>
                        
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Nhập email">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Mật Khẩu</label>
                            <input type="password" class="form-control" placeholder="Nhập mật khẩu">
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="remember">
                            <label class="form-check-label" for="remember">
                                Ghi nhớ tôi
                            </label>
                        </div>

                        <button class="btn btn-primary w-100 mb-3" @click="$router.push('/trangchu')">Đăng Nhập</button>

                        <div class="text-center">
                            <p>Chưa có tài khoản? <router-link to="/dangky">Đăng ký</router-link></p>
                            <p><a href="#">Quên mật khẩu?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>


<style>
.container {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-body {
    padding: 40px !important;
}

h2 {
    color: #0d6efd;
    font-weight: 700;
    margin-bottom: 30px;
}

.form-label {
    font-weight: 600;
    color: #333;
}

.form-control {
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 10px 15px;
}

.form-control:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.btn-primary {
    background-color: #0d6efd;
    border: none;
    font-weight: 600;
    padding: 12px;
    border-radius: 8px;
    transition: all 0.3s;
}

.btn-primary:hover {
    background-color: #0b5ed7;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
}

.text-center a {
    color: #0d6efd;
    text-decoration: none;
    font-weight: 600;
}

.text-center a:hover {
    text-decoration: underline;
}

.text-center p {
    margin-top: 20px;
    color: #666;
}
</style>