<template>
    <div class="logo" :class="marginRight">
        <div class="logo__circle"></div>
        <!-- <p class="logo__text text-uppercase" :class="[color, marginRight]"> -->
        <p class="logo__text text-uppercase" :class="color">
            <span class="logo__text-backlight">
                pod
            </span>
                of cast
        </p>
    </div>
</template>

<script setup>

    const props = defineProps( {
        color: { type: String, default: 'none' },
        marginRight: { type: String, default: 'none' },
    });

    const color = props.color === 'white' ?  'logo__ackground-white' : 'logo__ackground-champagne';
    const marginRight = props.marginRight === 'marginRight'  ?  'logo__mright' : '';
    
</script>
