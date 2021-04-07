<template>
    <!DOCTYPE html>
    <html lang="ko">
    <head>
    </head>
    <body>
        <div id="wrap">
            <div class="skip_navi">
                <a href="#container">본문 바로가기</a>
            </div>

            <Header></Header>

            <div id="header">
                <h2 class="visual"><span class="blind">한경 머니로드쇼 2021년 3월 13일(토) 코엑스 및 유튜브 '한국경제' 채널에서 동시 생중계</span></h2>
            </div>
            
            <Contents></Contents>
            
            <Footer></Footer>
        </div>
    </body>
    </html>
</template>

<script>

import Header from './components/Header.vue'
import Contents from './components/Contents.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
      items:[]
    }
  },
  components: {
    'Header': Header,
    'Contents': Contents,
    'Footer': Footer
  }
}
</script>

<style>
    @import 'https://event.hankyung.com/seminar/money2021/css/w/common.css';
    @import 'https://static.hankyung.com/css/edition/header_footer.css';
</style>
