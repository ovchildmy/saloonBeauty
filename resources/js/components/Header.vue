<template>
<div id="header">
    <div class="header ">
        <div class="container">
            <div class="row">
                <ul class="d-flex justify-content-between align-middle">
                    <li><img :src="instIcon"></li>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Мастера</a></li>
                    <li><a href="/">Косметика</a></li>
                    <li><a href="/">{{ imgDir }}</a></li>
                    <li><a href="/">Акции</a></li>
                    <li><a href="/">Отзывы</a></li>
                    <li><a href="/">Контакты</a></li>
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
                instIcon: 'images/icons/icons8-instagram-96.png'
            }
        }
    }
</script>
