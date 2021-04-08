<template>
    <div id="container">
        <div class="inner">
            <ul class="tab_wrap menu01">
                <li v-on:click="tabChange(0)" class="on"><router-link to="/money/Introduce">행사개요123</router-link></li>
                <li v-on:click="tabChange(1)"><router-link to="/money/Program">프로그램</router-link></li>
                <li v-on:click="tabChange(2)"><router-link to="/money/Speaker">연사소개</router-link></li>
                <li v-on:click="tabChange(3)"><router-link to="/money/Apply">참가신청</router-link></li>
                <li v-on:click="tabChange(4)"><router-link to="/money/Replay">다시보기</router-link></li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        tabChange(param) {
            var num = Number(param)+1;
            document.querySelector('.tab_wrap').classList.remove('menu01','menu02','menu03','menu04','menu05');
            document.querySelector('.tab_wrap').classList.add('menu0'+num);
            var tab_list = document.querySelectorAll('.tab_wrap > li');

            for (var i = 0; i < tab_list.length; ++i) {
                tab_list[i].classList.remove('on');
            }

            var li = tab_list[param];
            li.classList.add('on');
        }
    }
}
</script>

<style>

</style>
