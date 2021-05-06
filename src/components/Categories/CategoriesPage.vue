<template>
    <div>
        Categorie page {{ this.cat }}
        {{ this.id_cat }}
        {{ this.returAxios }}
    </div>
</template>

<script>
// import data from '../../../public/generated.json';
import axios from 'axios';
export default {
    name: 'categorie',
    props: ['categorie','id'],
    data() {
        return {
            cat: this.categorie,
            id_cat: this.id,

            returAxios: '' 
        }
    },
    async mounted(){
        axios.create({
            baseURL: 'http://localhost:1337'
        }).get('/categorie', {params: {id : 172}}).then((data) => {
            this.returAxios = data.data
        }).catch((err) => {
            console.log(`This is an error : ` + err)
        })
    }
}
</script>