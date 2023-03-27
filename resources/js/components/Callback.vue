<template>
<div id="callback-button" @click="open">
    callback
</div>

<div id="callback" v-if="opened">
    <div class="callback-wrapper">
        <div class="callback-inner">
            <img @click="close" src="images/icons/Vector.png" alt="">
            <div>Введите номер телефона</div>
            <input type="text" v-model="phone">
            <div class="callback-inner__error" v-if="error != ''">{{ error }}</div>
            <button @click="request">Send</button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'CallbackComponent',
        props: {},
        methods: {
            open() {
                this.opened = true;
            },
            close() {
                this.opened = false;
            },
            request() {
                axios.get('/phoneRequest?phone='+this.phone).then((response) => {
                    this.close();
                    console.log(response);
                    alert('yep');
                }).catch((error) => {
                    this.error = error;
                })
            }
        },
        data() {
            return {
                opened: false,
                error: '',
                phone: ''
            }
        }
    }
</script>
