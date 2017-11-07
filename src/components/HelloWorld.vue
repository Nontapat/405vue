<template>
 <div>
 <h1>{{msg}}</h1>

  <router-view></router-view>
   <ul class="nav">
      <li class="nav-item">
        <router-link :to="{name: 'Bookmarker', params: {user: this.user}}" class="nav-link">Bookmark</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Detail', params: {user: this.user}}" class="nav-link">Profile Detail</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'About'}" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout">Logout</a>
      </li>
    </ul>
 </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '@/firebaseConfig'

var md5 = require('md5');

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Firebase Authentication tutorial',
      user: {
        photoURL: '',
        userId: '',
        name: '',
        email: '',
        url: '',
        phone: ''
      }
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then( () => {
        this.$router.push( { name: 'Login'});
      })
    }
  },
  created() {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      this.user.photoURL = user.photoURL;
      this.user.userId = user.uid;
      this.user.name = user.displayName;
      this.user.email = user.email;

      var uid = md5(user.email);
      console.log(uid);

      db.ref('users/' + uid).once('value').then(
        snapshot => {
          if (snapshot) {
            console.log(snapshot);
            this.user.name = snapshot.val().name;
            this.user.url = snapshot.val().url;
            this.user.phone = snapshot.val().phone;
          }
      });

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
