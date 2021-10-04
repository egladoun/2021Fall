<template>
    <div class="buttons" v-if="!Session.user">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="login">
            Log in
          </a>
        </div>
        <div>
            <div v-else>
                Hello {{name}}
            </div>
        </div>
</template>

<script>
import Session from "../services/session";

export default {
    data(): ()=>({
        Session
    }),
    methods: {
        login() {
            console.log(Session)
            Login();
            //this.Session.user.FirstName = this.Session.user.FirstName = ""
            console.log(Session)
        }
    },
    computed:{
        name(){
            return this.Session.user.FirstName + ' ' + this.Session.user.LastName;
        }
    }
}
</script>

<style>

</style>