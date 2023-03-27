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
                    <li @click="sideMenu=!sideMenu">Меню</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div v-if="sideMenu" id="menu">
    <img @click="sideMenu=false" src="images/icons/Vector.png" alt="">

    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur cumque sint consectetur iste optio quo dolorem officiis temporibus, distinctio accusantium nulla, fugiat est modi.
    </div>
    <div>
        <h3>Контакты</h3>
        <div>+7 (812) 123-45-67</div>
        <div>+7 (812) 123-45-67</div>
        <div>Новоостровский проспект, дом 36 лит. С</div>
    </div>
    <div>
        <h3>Режим работы</h3>
        <div>С 10:00 до 21:00 (Пн-Пт)</div>
        <div>С 11:00 до 20:00 (Сб-Вс)</div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: ['imgDir', 'sideMenu'],
        data() {
            return {
                instIcon: 'images/icons/icons8-instagram-96.png',
                mainIcon: 'images/icons/omega-sign-svgrepo-com 1.png',
                darkHeader: false,
                sideMenu: false
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
