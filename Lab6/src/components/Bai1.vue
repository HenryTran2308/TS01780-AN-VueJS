<template lang="">


    <div class="container">
    <div class="card">
      <h1>Xếp Loại Học Sinh</h1>
      
      <div class="form-group">
        <label for="diem">Nhập Điểm Trung Bình:</label>
        <input 
          id="diem"
          v-model.number="diem" 
          type="number" 
          placeholder="Nhập điểm từ 0 đến 10"
        >
      </div>

      <div class="result" v-if="diem !== null && diem !== ''">
        <p class="score">Điểm trung bình: <strong>{{ diem }}</strong></p>
        
        <!-- Xếp loại yếu -->
        <p v-if="diem < 5.0" class="rating weak">
           Xếp loại: <strong>Yếu</strong>
        </p>
        
        <!-- Xếp loại trung bình -->
        <p v-else-if="diem >= 5.0 && diem < 6.5" class="rating average">
           Xếp loại: <strong>Trung Bình</strong>
        </p>
        
        <!-- Xếp loại khá -->
        <p v-else-if="diem >= 6.5 && diem < 8.0" class="rating good">
           Xếp loại: <strong>Khá</strong>
        </p>
        
        <!-- Xếp loại giỏi -->
        <p v-else-if="diem >= 8.0 && diem < 9.0" class="rating very-good">
           Xếp loại: <strong>Giỏi</strong>
        </p>
        
        <!-- Xếp loại xuất sắc -->
        <p v-else-if="diem >= 9.0 && diem <= 10" class="rating excellent">
           Xếp loại: <strong>Xuất Sắc</strong>
        </p>
        
        <!-- Điểm không hợp lệ -->
        <p v-else class="rating invalid">
           Điểm không hợp lệ! Vui lòng nhập điểm từ 0 đến 10
        </p>
      </div>

      <button @click="resetForm" class="btn-reset">Xóa</button>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Bai1',
    data() {
        return {
            diem: null
        }
    },
    methods: {
        resetForm() {
            this.diem = null
        }
    }
}
</script>
<style lang="">

</style>