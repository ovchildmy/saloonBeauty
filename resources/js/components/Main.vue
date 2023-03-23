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
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/1.png" alt="">
                        </div>
                    </a>
                    <div>Парикмахерские услуги</div>
                </div>
                <div>
                    <a href="#">
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/2.png" alt="">
                        </div>
                    </a>
                    <div>Маникюр</div>
                </div>
                <div>
                    <a href="#">
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/3.png" alt="">
                        </div>
                    </a>
                    <div>Педикюр</div>
                </div>
                <div>
                    <a href="#">
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/4.png" alt="">
                        </div>
                    </a>
                    <div>Косметология</div>
                </div>
                <div>
                    <a href="#">
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/5.png" alt="">
                        </div>
                    </a>
                    <div>Эстетист по телу</div>
                </div>
                <div>
                    <a href="#">
                        <div class="main__services__list__image_wrap">
                            <img src="images/services/6.png" alt="">
                        </div>
                    </a>
                    <div>Визаж</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="main__partners">
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-between">
                <img src="images/partners/1.png" alt="">
                <img src="images/partners/2.png" alt="">
                <img src="images/partners/3.png" alt="">
                <img src="images/partners/4.png" alt="">
            </div>
        </div>
    </div>
</div>
<div class="main__portfolio">
    <div class="container">
        <div class="row">
            <h2 class="text-center">Наши работы</h2>
            
            <nav>
                <ul class="d-flex justify-content-between">
                    <li v-on:click="mainBlock = 'all'" class="item-hovered" :class="{'item-active' : mainBlock == 'all'}">Показать все</li>
                    <li v-on:click="mainBlock = 'hair'" class="item-hovered" :class="{'item-active' : mainBlock == 'hair'}"> Парикмахерские услуги</li>
                    <li v-on:click="mainBlock = 'manicure'" class="item-hovered" :class="{'item-active' : mainBlock == 'manicure'}">Маникюр</li>
                    <li v-on:click="mainBlock = 'pedicure'" class="item-hovered" :class="{'item-active' : mainBlock == 'pericure'}">Педикюр</li>
                </ul>
            </nav>
            <div v-if="mainBlock == 'all'" class="d-flex flex-wrap justify-content-between main__portfolio__item--all">
                <img src="images/portfolio/work-6.png" alt="">
                <img src="images/portfolio/work-3.png" alt="">
                <img src="images/portfolio/work-4.png" alt="">
                <img src="images/portfolio/work-2.png" alt="">
                <img src="images/portfolio/work-5.png" alt="">
                <img src="images/portfolio/work-7.png" alt="">
                <img src="images/portfolio/work-1.png" alt="">
                <img src="images/portfolio/work-8.png" alt="">
                <img src="images/portfolio/work-9.png" alt="">
            </div>
            <div v-if="mainBlock == 'hair'" class="d-flex flex-wrap justify-content-between main__portfolio__item--hair">
                <img src="images/portfolio/work-1.png" alt="">
                <img src="images/portfolio/work-2.png" alt="">
                <img src="images/portfolio/work-3.png" alt="">
            </div>
            <div v-if="mainBlock == 'manicure'" class="d-flex flex-wrap justify-content-between main__portfolio__item--manicure">
                <img src="images/portfolio/work-4.png" alt="">
                <img src="images/portfolio/work-5.png" alt="">
                <img src="images/portfolio/work-6.png" alt="">
                <img src="images/portfolio/work-7.png" alt="">
                <img src="images/portfolio/work-8.png" alt="">
            </div>
            <div v-if="mainBlock == 'pedicure'" class="d-flex flex-wrap justify-content-between main__portfolio__item--pedicure">
                <img src="images/portfolio/work-6.png" alt="">
                <img src="images/portfolio/work-4.png" alt="">
            </div>
        </div>
    </div>
</div>
</div>
<FooterComponent/>
</template>

<script>
    export default {
        name: 'Main',
        props: {
            mainBlock: String
        },
        data() {
            return {
                mainBlock: 'all',
                classObject: {

                }
            }
        }
    }
</script>
