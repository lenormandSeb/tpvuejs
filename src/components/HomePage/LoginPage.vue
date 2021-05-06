<template>
    <div>
        <form>
            <label for="login">Login</label>
            <input type="text" name="login"/>
            <label for="password">Password</label>
            <input type="password" name="password">
            <button type="submit">Valider</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            form: {
                login : '',
                password : '',
            }
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:8000/v1/user/', {
                params : this.form
            }).then((response) => {
                if(response.data.data)
                {
                    localStorage.auth = true
                    localStorage.id_user = response.data.id_user
                    this.$router.replace({name : 'homepage'})
                } else {
                    window.location.reload()
                }
            })
        }
    }
}
</script>