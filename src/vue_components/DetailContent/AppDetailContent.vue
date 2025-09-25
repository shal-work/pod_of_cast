<template>
    <div  v-if="isEps === '1'" class="podcast-title__detail">
        <SlotPerplexedMind :isEps="isEps"/>
    </div>
    <div  v-if="isEps === '2'" class="podcast-title__detail">
        <SlotSocialClass :isEps="isEps"/>
    </div>
    <div  v-if="isEps === '3'" class="podcast-title__detail">
        <SlotSelfConfidence :isEps="isEps"/>
    </div>
    <div  v-if="isEps === '4'" class="podcast-title__detail">
        <SlotWomensRights :isEps="isEps"/>
    </div>
    <div  v-if="isEps === '5'" class="podcast-title__detail">
        <SlotTeslaautopilot :isEps="isEps"/>
    </div>
    <div  v-if="isEps === '6'" class="podcast-title__detail">
        <SlotCovid :isEps="isEps"/>
    </div>
</template>

<script setup>
    // 1
    import SlotPerplexedMind from './SlotPerplexedMind'
    // 2
    import SlotSocialClass from './SlotSocialClass'
    // 3
    import SlotSelfConfidence from './SlotSelfConfidence'
    // 4
    import SlotWomensRights from './SlotWomensRights'
    // 5
    import SlotTeslaautopilot from './SlotTeslaautopilot'
    // 6
    import SlotCovid from './SlotCovid'

    const props = defineProps( {
        isEps: { type: String, default: '1' }
    });

   
    let isEps = props.isEps;
    switch (props.isEps) {
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6': 
        break;
        default:
            isEps='1'
        break;
    }
 
</script>