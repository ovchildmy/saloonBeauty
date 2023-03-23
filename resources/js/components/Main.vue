<template>
<HeaderComponent :imgDir="imgDir"/>
<div class="main">
<div class="main__introduction">
    <div>Салон красоты «Delote-Beauty» на Крестовском</div>
</div>
<div class="main__quote text-center text-white">
    <img src="images/icons/quotes.png" alt="">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati non incidunt aliquam officia voluptas aperiam ad natus reprehenderit! Corporis natus quaerat recusandae deserunt molestias aliquid id, eligendi neque explicabo sint consectetur. Sequi error odio aut repudiandae, earum assumenda quasi corrupti, illo delectus nulla voluptate dicta, iure debitis architecto amet.</div>
    <div>Lorem ipsum dolor sit amet  ad natus reprehenderit! Corporis natus quaerat recusandae deserunt molestias aliquid id, eligendi neque explicabo sint consectetur. Sequi error odio aut repudiandae, earum assumenda quasi corrupti, illo delectus nulla voluptate dicta, iure debitis architecto amet.</div>
</div>
<div class="main__services">
    <div class="container">
        <div class="row">
            <div class="main__services__list d-flex flex-wrap justify-content-between">
                <div>
                    <a href="#">
                        <img src="images/services/1.png" alt="">
                    </a>
                    <div>Парикмахерские услуги</div>
                </div>
                <div>
                    <a href="#">
                        <img src="images/services/2.png" alt="">
                    </a>
                    <div>Маникюр</div>
                </div>
                <div>
                    <a href="#">
                        <img src="images/services/3.png" alt="">
                    </a>
                    <div>Педикюр</div>
                </div>
                <div>
                    <a href="#">
                        <img src="images/services/4.png" alt="">
                    </a>
                    <div>Косметология</div>
                </div>
                <div>
                    <a href="#">
                        <img src="images/services/5.png" alt="">
                    </a>
                    <div>Эстетист по телу</div>
                </div>
                <div>
                    <a href="#">
                        <img src="images/services/6.png" alt="">
                    </a>
                    <div>Визаж</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class=""></div>
</div>
</template>

<script>
    export default {
        name: 'Main',
        props: {
            imgDir: String
        }
    }
</script>
