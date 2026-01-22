<template lang="">
    <div>
        <h1>{{greeting}}</h1>
        <button v-blind:title="buttonTitle" @click="changeGreeting">Click để thay đổi</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            greeting: 'Xin chào fen',
            buttonTitle: 'Nhấn để thay đổi lời chào'
        };
    },
    methods: {
        changeGreeting(){
            this.greeting = 'Hello man';
            this.buttonTitle = 'Lời chào đã được thay đổi';
        }
    },
}
</script>
<style lang="">
    
</style>