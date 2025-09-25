<template>
    <div class="cards">
        <!-- Eps-6 -->
        <SlotCardCovid :isSize12px="isSize12px" :isContentImageSize="true"/>
        <!-- Eps-5 -->
        <SlotCardTeslaautopilot :isSize12px="isSize12px" :isContentImageSize="true"/>
        <!-- Eps-4 -->
        <SlotCardWomensRights :isSize12px="isSize12px" :isContentImageSize="true"/>
        <!-- Eps-3 -->
        <SlotCardSelfConfidence :isSize12px="isSize12px" :isContentImageSize="true"/>
        <!-- Eps-2 -->
        <SlotCardSocialClass :isSize12px="isSize12px" :isContentImageSize="true"/>
        <!-- Eps-1 -->
        <SlotCardPerplexedMind :isSize12px="isSize12px" :isContentImageSize="true"/>
    </div>

</template>

<script setup>
    import SlotCardCovid    from './SlotCardCovid.vue';
    import SlotCardTeslaautopilot    from './SlotCardTeslaautopilot.vue';
    import SlotCardWomensRights    from './SlotCardWomensRights.vue';
    import SlotCardSelfConfidence    from './SlotCardSelfConfidence.vue';
    import SlotCardSocialClass    from './SlotCardSocialClass.vue';
    import SlotCardPerplexedMind     from './SlotCardPerplexedMind.vue';
    const props = defineProps( {
        isSize12px: { type: Boolean, default: false },
        isContentImageSize: { type: Boolean, default: false },
    }); 

    const isSize12px = props.isSize12px;


</script>
