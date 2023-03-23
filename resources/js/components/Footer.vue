<template>  
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="footer d-flex justify-content-between">
          <div>
            <a href="#">
              <img src="images/icons/omega-sign-svgrepo-com 1.png" alt="">
            </a>
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
          <div>
            <h3>Мы в Instagram</h3>
            <a href="#">
              <img src="images/icons/icons8-instagram-96.png" alt="">
            </a>
          </div>      
        </div>
        <div class="copy text-center">
          Copyright © 2017 - 2023 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        instIcon: 'images/icons/icons8-instagram-96.png',
        mainIcon: 'images/icons/omega-sign-svgrepo-com 1.png'
      }
    }
  }
</script>