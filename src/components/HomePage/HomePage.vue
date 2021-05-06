<template>
    <div>
        <ul v-for="item in data" :key="item.id">
            <router-link :to="{
                name : 'categorieSub',
                params: {
                    id : item.id,
                    categorie: item.name
                    }
                }">
                Categorie : {{ item.name }}
            </router-link>
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