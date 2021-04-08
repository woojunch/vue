<template>
    <div class="wrap">
        <div class="content">
            <div class="payment_form">
                <form name="join_info" id="join_info" method="post">
                    <input type="hidden" name="use_pay_method" value="000000000000"/>
                    <input type="hidden" name="no" value="246"/>
                    <input type="hidden" name="api_key" value="2aa4d02b3955bd2705c1bf4aa4b2ac2e"/>
                    <input type="hidden" name="buyr_mail" />
                    <input type="hidden" name="buyr_tel2" />

                    <div class="payment_field">
                        <div class="fieldset">
                            <h3 class="tit">참석자 정보</h3>
                            <p class="etc must">는 필수입력 항목입니다.</p>
                            <table class="table_form">
                                <colgroup>
                                    <col style="width:85px">
                                    <col style="width:auto">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <label for="uName"><em title="필수항목" class="must">* </em>이름</label>
                                        </th>
                                        <td>
                                            <input id="uName" name="buyr_name" maxlength="10" type="text" class="inptxt">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <em title="필수항목" class="must">* </em>성별
                                        </th>
                                        <td class="pd_t">
                                            <div class="sel_chk">
                                                <div>
                                                    <input type="radio" id="man" name="sex" value="M">
                                                    <label for="man">남</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="woman" name="sex" value="W">
                                                    <label for="woman">여</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="dept">소속</label>
                                        </th>
                                        <td class="pd_t">
                                            <select class="sel_box" id="dept" name="position" title="소속 선택">
                                                <option value="개인" selected>개인</option>
                                                <option value="민간기업">민간기업</option>
                                                <option value="정부,공공기관">정부·공공기관</option>
                                                <option value="학계">학계</option>
                                                <option value="연구기관">연구기관</option>
                                                <option value="대학(원)생">대학(원)생</option>
                                                <option value="중고등학생">중고등학생</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="uage"><em title="필수항목" class="must">* </em>연령</label>
                                        </th>
                                        <td class="pd_t">
                                            <select class="sel_box" id="uage" name="birth" title="연령 선택">
                                                <option value="10" selected>10대</option>
                                                <option value="20">20대</option>
                                                <option value="30">30대</option>
                                                <option value="40">40대</option>
                                                <option value="50">50대</option>
                                                <option value="60">60대</option>
                                                <option value="70">70대 이상</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="uPhone"><em title="필수항목" class="must">* </em>휴대폰</label>
                                        </th>
                                        <td>
                                            <div class="phone">
                                                <div class="t_layout">
                                                    <div class="t_cell">
                                                        <input id="uPhone" type="tel" class="inptxt" title="휴대폰 앞자리" name="tel1" maxlength="3">
                                                    </div>
                                                    <div class="t_cell dash">-</div>
                                                    <div class="t_cell">
                                                        <input type="tel" class="inptxt" title="휴대폰 중간자리" name="tel2" maxlength="4">
                                                    </div>
                                                    <div class="t_cell dash">-</div>
                                                    <div class="t_cell">
                                                        <input type="tel" class="inptxt" title="휴대폰 끝자리" name="tel3" maxlength="4">
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="uroute"><em title="필수항목" class="must">* </em>인지경로</label>
                                        </th>
                                        <td class="pd_t">
                                            <select class="sel_box" name="etc3" id="uroute" title="인지경로 선택">
                                                <option value="한국경제 기사,광고,뉴스레터" selected>한국경제 기사∙광고∙뉴스레터</option>
                                                <option value="안내문자">안내문자</option>
                                                <option value="지인의 추천">지인의 추천</option>
                                                <option value="카카오톡 오픈채팅방">카카오톡 오픈채팅방</option>
                                                <option value="네이버 카페 등 온라인 커뮤니티 사이트">네이버 카페 등 온라인 커뮤니티 사이트</option>
                                                <option value="페이스북, 블라인드 등 SNS">페이스북, 블라인드 등 SNS</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="uinterest"><em title="필수항목" class="must">* </em>관심분야</label>
                                        </th>
                                        <td class="pd_t">
                                            <select class="sel_box" name="etc4" id="uinterest" title="관심분야 선택">
                                                <option value="자산관리" selected>자산관리</option>
                                                <option value="금융상품">금융상품</option>
                                                <option value="부동산">부동산</option>
                                                <option value="국내외 증시">국내외 증시</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <label for="uquestion">사전질문</label>
                                        </th>
                                        <td class="pd_t">
                                            <textarea rows="5" cols="70" name="etc5" id="uquestion" class="question_area"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="form_action">
                            <div class="btns">
                                <a href="/seminar/money2021" class="btn btn_reset">취소</a>
                                <button type="button" v-on:click="formSubmit" class="btn btn_submit">참가신청</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        formSubmit() {
            var frm = document.getElementById('join_info');
            const formData = new FormData(frm);            
            formData.append('buyr_tel2', frm.tel1.value+'-'+frm.tel2.value+'-'+frm.tel3.value);
            this.axios.post('/seminar/money2021/test', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                if(res.data.msg == 'success') {
                    alert('참가신청 성공!');
                } else {
                    alert('참가신청 실패ㅠ');
                }
            }).catch( error => {
                console.log('failed', error);
            })
        }
    }
}

</script>

<style>
    @import 'https://event.hankyung.com/seminar/money2021/css/payment.css';
</style>
