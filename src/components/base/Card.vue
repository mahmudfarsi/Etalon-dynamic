<template>
    <component :is="tag" >
        <div v-if="$slots.header">
            <slot name="header"/>
        </div>
        <slot name="body"/>
        <div v-if="$slots.footer">
            <slot name="footer"/>
        </div>
    </component>
</template>



<script setup>
    import { defineProps } from 'vue';
    import {string} from 'vue-types';
    



    defineProps({
        tag:string().def('div')
    })
</script>