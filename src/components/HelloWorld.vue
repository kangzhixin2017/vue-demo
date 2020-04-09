<template>
  <div class="hello"></div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    async get() {
      console.log('1')
      let res = await this.$http.getCode();
      sessionStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiY2UwZDY2ODUtYzE1Zi00MTI2LWE1YjQtODkwYmM5ZDIzNTZkIiwiSUQiOjEwLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjoiODg4IiwiZXhwIjoxNTg3MDIyNTYzLCJpc3MiOiJKYXNvbkNoZW4iLCJuYmYiOjE1ODY0MTY3NjN9.p1E0R6oNbeccB1I0EeKC7Ydwitv5BRD87xLiRe6eqS0"
      );
      console.log('2')
      console.log(res);
    },
    async getuser() {
      console.log('3')
      let res = await this.$http.getuser();
      console.log('4')
      console.log(res);
    }
  },
  created() {
    console.log("sdf");
    this.get();
    this.getuser();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
