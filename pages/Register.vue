<template>
<div>
      <div class="container">
        <div class="row justify-content-md-center m-4">
            <h1>Sign Up</h1>
        </div>  
    </div>

    <form @submit.prevent="submit">
         <div class="container">
             <div class="row justify-content-md-center">
             <div class="form-group col-lg-4">
                <input type="username" class="form-control username border-input" id="username" placeholder="Enter Username" v-model="form.username">
            </div>
             </div>
             <div class="row justify-content-md-center">
          <div class="form-group col-lg-4">
                <input type="email" class="form-control email border-input" id="email" aria-describedby="emailHelp" placeholder="Email@example.com" v-model="form.email">
            </div>
             </div>
             <div class="row justify-content-md-center">
            <div class="form-group col-lg-4">
                <input type="password" class="form-control password border-input" id="password" placeholder="Password" v-model="form.password">
            </div>
             </div>
            <div class="row justify-content-md-center mt-3">
                <div class="header-buttons">
                    <button type="submit" class="blue-bg">Sign Up</button>
            </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'register',
    components: {

    },
    data(){
        return{
            form:{
                email:'',
                password:'',
                username:''
            }
        }
    },

   methods: {
        ...mapActions({
            register: 'register'
        }),
        submit(){
           this.register(this.form)
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