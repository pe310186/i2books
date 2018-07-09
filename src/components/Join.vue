<template>
  <v-container>
      <v-flex offset-xs4>
            <v-card-text><b align="center"><font size="7">會員資料填寫</font></b><font size=4 color=red>*為必填</font></v-card-text>
        </v-flex>
        <br>
        <v-flex xs12>
            <v-card color="blue lighten-5" height="1000px">
                <br><br>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*姓名</font></b><v-text-field v-model="name" background-color="white" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>性別</font></b><v-text-field background-color="white" label="" v-model="sex" color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*出生年月日</font></b><v-text-field background-color="white" v-model="birthday" label=""  color="black" persistent-hint></v-text-field>
            <font size=4>(輸入範例:1980/02/29)</font><br><br>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*身分證字號</font></b><v-text-field background-color="white" v-model="card_number" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*手機</font></b><v-text-field background-color="white" v-model="phone" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*電子郵件</font></b><v-text-field background-color="white" v-model="email" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>Line</font></b><v-text-field background-color="white" label="" v-model="line" color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*密碼</font></b><v-text-field background-color="white" v-model="password" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs4 offset-xs4>
            <b><font size=4>*密碼再確認</font></b><v-text-field background-color="white" v-model="password2" label=""  color="black" persistent-hint></v-text-field>
                </v-flex>
                <br>
                <v-flex offset-xs5><v-btn color="white" large @click="changeRoute"><b>確認送出</b></v-btn></v-flex>
            </v-card>
        </v-flex>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      sex: '',
      birthday: '',
      card_number: '',
      phone: '',
      email: '',
      line: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    changeRoute () {
      if (this.$data.name === '' || this.$data.card_number === '' || this.$data.phone === '' || this.$data.email === '' || this.$data.password === '' || this.$data.password === '' || this.$data.password2 === '') {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('有必填選項未填')
      } else if (this.$data.password !== this.$data.password2) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        alert('密碼不相同')
      } else {
        let list = ['name', 'sex', 'birthday', 'card_number', 'phone', 'email', 'line', 'password', 'password2']
        for (let i of list) {
          localStorage.setItem(i, this[i])
        }
        this.$router.push('/Confirm')
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }

  }
}
</script>
