<template>
    <component :is="tag">
        <slot/>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string} from 'vue-types'

    defineProps({
        tag:string().def('div'),
    })
</script>


