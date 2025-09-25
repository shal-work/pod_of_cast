<template>
    <div class="featured__item">
        <p class="featured__value reset">{{props.prop.value}}
            <span class="featured__value featured__value_color-black">{{props.prop.letter}}</span>
        </p>
        <div class="featured__text">{{props.prop.text}}</div>
    </div>
</template>

<script setup>
    const props = defineProps(['prop']);
    
</script>