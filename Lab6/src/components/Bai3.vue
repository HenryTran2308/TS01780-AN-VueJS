<template lang="">
    <div>
    <div class="container mt-5">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div class="col-sm-4" v-for="(item, index) in items" :key="index">
          <div class="card h-100">
            <img :src="item.image" alt="Hình ảnh" class="img-fluid" />
            <div class="card-body text-start">
              <h3 class="card-title text-start">{{ item.title }}</h3>
              <p class="card-text text-start">{{ item.content }}</p>
        <button class="btn btn-info mt-2">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là một chất dinh dưỡng quan trọng giúp xương chắc khỏe. Các rau xanh như cải, bó xanh, rau muống... là nguồn cung cấp canxi dồi dào.',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị như tiêu, gừng, nghệ, tỏi... không chỉ giúp tăng vị cơm mà còn có tác dụng kháng viêm, tốt cho tiêu hóa.',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng cho cơ thể',
    content: 'Đậu lăng, đậu xanh, đậu đỏ... là những loại thực phẩm giàu protein, chất xơ, rất tốt cho sức khỏe và dinh dưỡng hàng ngày.',
    image: img3
  },
];
</script>
<style lang="">

</style>