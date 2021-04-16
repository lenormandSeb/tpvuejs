<template>
    <div>
        <ul v-for="item in data" :key="item.id">
            <router-link :to="{path : '/categorie', params: {id : item.id}}">{{ item.name }}</router-link>
        </ul>
    </div>
</template>

<script>
import data from '../../../public/generated.json';
export default {
    name:"HomePage",
    data() {
        return {
            data: data['categorie']
        }
    }
}
</script>