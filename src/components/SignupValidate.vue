<template>
  <div class="sign-up-validate">
      <form @submit.prevent="validateBeforeSubmit">
        <p>Let's create a new account!</p>
        
         <p :class="{ 'control': true }">
            <input v-model="user.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('user.email') }" name="Email" type="text" placeholder="Email">
            <p><span v-show="errors.has('Email')" class="help is-danger">{{ errors.first('Email') }}</span></p>
        </p>
          <p :class="{ 'control': true }">
            <input v-model="user.password1" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('user.password1') }" name="Password" type="password" placeholder="Password">
            <p><span v-show="errors.has('Password')" class="help is-danger">{{ errors.first('Password') }}</span></p>
        </p>

        <p :class="{ 'control': true }">
            <input v-model="user.password2" v-validate="'required|confirmed:Password'" :class="{'input': true, 'is-danger': errors.has('user.password2') }" name="Confirm Password" type="password" placeholder="Confirm Password">
            <p><span v-show="errors.has('Confirm Password')" class="help is-danger">{{ errors.first('Confirm Password') }}</span></p>
        </p>

        <p :class="{ 'control': true }">
            <input v-model="user.bdate" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('user.bdate') }" name="Birthdate" type="date" placeholder="Birthdate">
            <p><span v-show="errors.has('Birthdate')" class="help is-danger">{{ errors.first('Birthdate') }}</span></p>
        </p>

        <p :class="{ 'control': true }">
            <input v-model="user.facebook" v-validate="'required|regex:^(https:\/\/www\.facebook.com\/)?([^:\/\n]+)'" :class="{'input': true, 'is-danger': errors.has('user.facebook') }" name="Facebook" type="text" placeholder="Facebook">
            <p><span v-show="errors.has('Facebook')" class="help is-danger">{{ errors.first('Facebook') }}</span></p>
        </p>


        <button  @click="validateBeforeSubmit">Sign Up</button>
      </form>
      <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

VeeValidate.Validator.extend('passphrase', {
    getMessage: field => 'Sorry dude, wrong pass phrase.',
    validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});

export default {
  name: 'signUpValidate',
  data() {
      return {
          user: {
              name: '',
              email: '',
              password1: '',
              password2: '',
              website: '',
              phone: '',
          }
      }
  },
  methods: {
      validateBeforeSubmit() {
          this.$validator.validateAll();
          if (!this.errors.any()) {
              this.signup();
          }
      },
      signup() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then( 
                user => {
                    alert('Your accound has been created!');
                    this.$router.push({ name: 'Bookmarker'});
                }, 
                error => {
                    var errorCode = error.code;
                    var errorMsg = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too week');
                    } else {
                        alert('Oops.' + errorMsg);
                    }
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 5px 0;
        width: 40%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }

</style>

