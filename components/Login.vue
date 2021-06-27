<template>
<div>
    <div class="container">
        <div class="row justify-content-md-center m-4">
            <h1>Login</h1>
        </div>  
    </div>

    <form @submit.prevent="submit">
        <div class="container">
            <div class="row justify-content-md-center">
          <div class="form-group col-lg-4">
                <input type="email" class="form-control email border-input" id="identifier" aria-describedby="emailHelp" placeholder="Email@example.com" v-model="form.identifier">
            </div>
            </div>
            <div class="row justify-content-md-center">
            <div class="form-group col-lg-4">
                <input type="password" class="form-control password border-input" id="password" placeholder="Password" v-model="form.password">
            </div>
            </div>
    
            <div class="row justify-content-md-center mt-3">
                <div class="header-buttons">
            <button type="submit" class="blue-bg">Sign In</button>
            </div>
            </div>
        </div>
    </form>
    <div class="container">
            <div class="row justify-content-md-center">

                <p>Haven't registerd yet? </p>
            <router-link to="/register">
                <a>Sign Up</a>
            </router-link>
            </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'login',
    components: {

    },
    data(){
        return{
            form:{
                identifier:'',
                password:''
            }
        }
    },

    methods: {
        ...mapActions({
            signIn: 'signIn'
        }),
        submit(){
           this.signIn(this.form)
           .then(() => {
               console.log('success')
                this.$router.replace({
                path:'/'
                });
           }).catch((err) => {
               console.log('failed', err);
           });
        }
    }
}
</script>