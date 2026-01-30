<template lang="">


        <div class="container">
    <div class="card">
      <h1>Xác Định Mùa Từ Tháng</h1>
      
      <div class="form-group">
        <label for="thang">Nhập Tháng (1-12):</label>
        <input 
          id="thang"
          v-model.number="thang" 
          type="number" 
          placeholder="Nhập tháng từ 1 đến 12"
          min="1"
          max="12"
        >
      </div>

      <div class="result" v-if="thang !== null && thang !== ''">
        <!-- Lỗi: Tháng không hợp lệ -->
        <p v-if="thang < 1 || thang > 12" class="season invalid">
           Vui lòng nhập tháng từ 1 đến 12!
        </p>

        <!-- Mùa Đông: Tháng 12, 1, 2 -->
        <p v-else-if="thang === 12 || thang === 1 || thang === 2" class="season winter">
           Tháng {{ thang }}: <strong>Mùa Đông</strong>
        </p>

        <!-- Mùa Xuân: Tháng 3, 4, 5 -->
        <p v-else-if="thang >= 3 && thang <= 5" class="season spring">
           Tháng {{ thang }}: <strong>Mùa Xuân</strong>
        </p>

        <!-- Mùa Hè: Tháng 6, 7, 8 -->
        <p v-else-if="thang >= 6 && thang <= 8" class="season summer">
           Tháng {{ thang }}: <strong>Mùa Hè</strong>
        </p>

        <!-- Mùa Thu: Tháng 9, 10, 11 -->
        <p v-else-if="thang >= 9 && thang <= 11" class="season autumn">
           Tháng {{ thang }}: <strong>Mùa Thu</strong>
        </p>
      </div>

      <button @click="resetForm" class="btn-reset">Xóa</button>
    </div>
  </div>
</template>
<script settup>

export default {
    name: 'Bai2',
    data() {
        return {
            thang: null
        }
    },
    methods: {
        resetForm() {
            this.thang = null
        }
    }

}

</script>
<style lang="">

</style>