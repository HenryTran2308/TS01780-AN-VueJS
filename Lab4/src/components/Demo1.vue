<template lang="">
    <div>
        <h1 style="align: center;">Kiểm tra độ tuổi</h1>
        <p>Nhập độ tuổi của bạn: <input type="number" v-model="birthYear" @input="calculateAge"></p>

        <p style="text-align: center;">Năm sinh của bạn: <span >{{ birthYear }}</span></p>
        <p style="text-align: center;">Tuổi của bạn: <span>{{ age }}</span></p>
        <p style="text-align: center;">Phân loại: <span>{{ category }}</span></p>
        
    </div>
</template>
<script>
export default {

    data() {
        return {
            birthYear: '',
            age: 0,
            category: ''
        }
    },

    methods: {
        calculateAge(){
            const currentYear = new Date().getFullYear();
            this.age = currentYear - this.birthYear;

            if(this.age < 18){
                this.category = 'Trẻ em';
            } else if(this.age >= 18 && this.age <= 30){
                this.category = 'Thanh niên';
            } else{
                this.category = 'Người lớn';
            }
        }
    },

    mounted() {
        this.calculateAge();
    },
    
}
</script>
<style lang="">
    
</style>