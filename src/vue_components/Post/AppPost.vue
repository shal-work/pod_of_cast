<template>
    <div class="post" :class="{ 'post_hover': isHover }">
        <div class="post__block">
            <div class="post__block-picture">
                <div class="post__picture">
                    <picture>
                        <source type="image/webp" :srcset="require('@/assets/img/' + picture + '.webp')">
                        <img class="post__img" :src="require('@/assets/img/' + picture + '.png')" :alt = picture width="538" height="320">
                    </picture>
                </div>
            </div>
            <div class="post__block-text">
                <p class="post__card-sub-title text-uppercase reset">{{subtitle}}</p>
                <p class="post__card-sub-title text-uppercase reset">{{id}}</p>
                <h3 v-if="isBlog" class="post__card-title reset text-capitalize" :class="{ 'post__title-hover': isHover }">{{title}}</h3>
                <h4 v-else class="post__card-title reset text-capitalize" :class="{ 'post__title-hover': isHover }">{{title}}</h4>
                <p class="post__card-text reset">{{text}}</p>
            </div>
            <RouterLink  :to="'/single-blog/' + usId " class="card-link" aria-label="Page Detail"></RouterLink>
        </div>
        <div class="post__card-footer">
            <div class="post__card-buttons" >
                <button class="post__card-btn btn btn_grey" v-for="(item, index) in btns" 
                    :key="index">{{item.name}}</button>
            </div>
            <div class="post__card-date ">{{date}}</div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps( {
        post: Object,
        isBlog: Boolean,
    });
    
    const subtitle = props.post.subtitle;
    const picture = props.post.picture;
    const title = props.post.title;
    const text = props.post.text;
    const date = props.post.date;
    const btns = props.post.btns;
    const isHover = props.post.isHover;
    const usId = props.post.id;

    const isBlog = props.isBlog;


</script>