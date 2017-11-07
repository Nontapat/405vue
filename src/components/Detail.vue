<template>
     <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>User information:</h2>
    <div v-if="user.photoURL">
    <p>Profile Photo:</p>
    <img :src="user.photoURL" style="height: 120px">
    </div>
    <br>
    <p>ID: {{ user.userId }}</p>
    <p v-if="user.name">Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      user: {
        photoURL: "",
        userId: "",
        name: "",
        email: "",
        url: "",
        phone: ""
      }
    };
  },
  mounted() {
    console.log("Detail page");
    console.log(this.$route.params.user);
    this.user = this.$route.params.user;
  }
};
</script>