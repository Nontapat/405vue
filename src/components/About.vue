<template>
 <div>
 

  <router-view></router-view>
 
<p> Nontapat Khongpahen 570610580 </p>
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
};
</script>