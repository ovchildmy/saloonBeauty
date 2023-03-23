<template>
<div id="header">
    <div class="header" :class="{'darkHeader': darkHeader}">
        <div class="container">
            <div class="row">
                <ul class="d-flex justify-content-between align-middle">
                    <li><img :src="instIcon"></li>
                    <li><a href="/" class="item-hovered">Главная</a></li>
                    <li><a href="/masters" class="item-hovered">Мастера</a></li>
                    <li><a href="/cosmetics" class="item-hovered">Косметика</a></li>
                    <li><a href="/"><img :src="mainIcon" alt=""></a></li>
                    <li><a href="/sale" class="item-hovered">Акции</a></li>
                    <li><a href="/reviews" class="item-hovered">Отзывы</a></li>
                    <li><a href="/contacts" class="item-hovered">Контакты</a></li>
                    <li>Меню</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: ['imgDir'],
        data() {
            return {
                instIcon: 'images/icons/icons8-instagram-96.png',
                mainIcon: 'images/icons/omega-sign-svgrepo-com 1.png',
                darkHeader: false
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted () {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll (event) {
                this.$data.darkHeader = (window.scrollY >= 215 ? true : false); 
            }
        }
    }
</script>
