<template>
    <v-container>
        <v-flex offset-xs2 xs10>
            <v-card-text><b align="center">
                <font size="7">個人資料授權/取得使用同意書</font></b></v-card-text>
        </v-flex>
        <v-flex>
            <v-card xs12 raised>
                <font size="5"><br>
                    本人申請參加杏文勤閱國際有限公司實體店面(一手茶飲/二手書流通供需)會員或加入網路會員，同意提供貴單位蒐集保存、電腦處理、利用本人之個人資料，並同意以下各條款:<br><br>
                    1.貴單位取得本人之個人資料，目的在於個人資料保護法及相關法令之規定下，為提供良好服務及業務之必要範圍內，蒐集、處理及利用本人之個人資料。<br><br>
                    2.本人可依需要提供以下資料:姓名、生日、聯絡地址、電話、電子信箱、身分證字號等相關資料或其他得以直接或間接辨別本人個人之資料。<br><br>
                    3.本人同意貴單位以本人所提供的個人資料確認身份、進行聯絡、提供相關服務及資訊，包括各種活動舉辦通知、電子報、或EDM發送、數據統計及分析、會員服務訊息、特別活動、獎項兌換等用途，以及其他隱私權保護政策規範之使用方式。<br><br>
                    4.本人同意如後「附件」本人申請會員填用之表格資料。<br><br>
                    5.本人可依個人資料保護法，就本人資料向貴單位(1)請求查詢或閱覽、(2)請求製給複製本、(3)請求補充或更正、(4)請求停止蒐集、處理及利用、(5)請求刪除<br><br>
                    6.同意貴單位利用處理本人的個人資料之期間為加入會員起，至本人主動告知刪除個人資料止；利用本人資料的地區僅限於國境內。<br><br>
                    此致<br><br>
                    杏文勤閱國際有限公司(及如下關係企業)<br>
                    昶特有限公司(www.5118.com.tw)<br>
                    亞帝國際有限公司(www.5117.com.tw)<br>
                </font>
            </v-card>
            </v-flex>
            <br>
            <v-flex xs6 offset-xs4><v-btn large @click="changeRouteJoin"><font size="5">我同意</font></v-btn><v-btn large @click="changeRouteHome"><font size="5">我不同意</font></v-btn></v-flex>
    </v-container>
</template>

<script>
export default {
  methods: {
    changeRouteJoin () {
      this.$router.push('/Join')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    changeRouteHome () {
      this.$router.push('/')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
