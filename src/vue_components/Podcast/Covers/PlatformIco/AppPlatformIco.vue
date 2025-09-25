<template>
    <div class="platform-icon">
        <a href="#" class="icon" aria-label="google-podcast" :class="{'icon12': isClassSize12px, 'icon30': isClassSize30px}" >
            <svg class="icon__item svg"  :class="color">
                <use xlink:href="@/assets/img/spriteIco.svg#google-podcast"></use>
            </svg>
        </a>
        <a href="#" class="icon" aria-label="spotify" :class="{'icon12': isClassSize12px, 'icon30': isClassSize30px}" >
            <svg class="icon__item svg" :class="color"> 
                <use xlink:href="@/assets/img/spriteIco.svg#spotify"></use>
            </svg>
        </a>
        <a href="#" class="icon" aria-label="youtube" :class="{'icon12': isClassSize12px, 'icon30': isClassSize30px}" >
            <svg class="icon__item svg" :class="color">
                <use xlink:href="@/assets/img/spriteIco.svg#youtube"></use>
            </svg>
        </a>
    </div>
</template>

<script setup>
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isSize30px: { type: Boolean, default: false },
        color: { type: String, default: 'white' }
    });
    const isClassSize12px = props.isSize12px;
    const isClassSize30px = props.isSize30px;
    const color = props.color === 'white' ?  'svg_fill-white' : 'svg_fill-black' 

</script>
