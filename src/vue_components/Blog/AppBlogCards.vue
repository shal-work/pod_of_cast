<template>
    <div class="block-cards">
        <AppPost v-for="(item, index) in posts" :key="index" :post="item" :isBlog="isBlog"/>
    </div>
</template>

<script setup>
    import AppPost from '@/vue_components/Post/AppPost.vue' 
    import state from "@/redux/store.js"

    const props = defineProps ({
        quantity: {type: Number, default: 2},
        isBlog: Boolean
    })
    let end = props.quantity;
    if ((+props.quantity > 4) || (+props.quantity <= 0)) {
        end = 2;
    }
    let posts = state.items.slice(0, end);

    // для Blog заголовок должен быть h3 вместо h4
    const isBlog = props.isBlog;


</script>