<template>
    <v-container align-content-center justify-center>
        <v-flex offset-xs5>
            <v-card-text><b align="center"><font size="7">公告</font></b></v-card-text>
        </v-flex>
        <v-flex>
            <v-card height="300">施工中圖片</v-card>
        </v-flex>
        <br>
        <v-flex xs12>
            <v-card height="600"><font size="5"><b>公告文字</b></font></v-card>
        </v-flex>
        <br>
        <v-flex xs2 offset-xs5>
         <v-btn large @click = "changeRoute"><font size="5" color="red"><b>加入會員</b></font></v-btn>
        </v-flex>
    </v-container>
</template>

<script>
export default {
  methods: {
    changeRoute () {
      this.$router.push('/Agreement')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
