<template>
<div id="menu">
    <div class="menu" :class="{'darkHeader': darkHeader}">
        <div class="container">
            <div class="row">
                <img src="images/icons/Vector.png">
                <div class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati non incidunt aliquam officia voluptas aperiam ad natus reprehenderit! Corporis natus quaerat recusandae deserunt molestias aliquid id, eligendi neque explicabo sint consectetur. Sequi error odio aut repudiandae, earum assumenda quasi corrupti, illo delectus nulla voluptate dicta, iure debitis architecto amet.</div>
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
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'MenuComponent',
        data() {
            return {
                instIcon: 'images/icons/icons8-instagram-96.png',
                mainIcon: 'images/icons/omega-sign-svgrepo-com 1.png',
                darkHeader: false
            }
        }
    }
</script>
