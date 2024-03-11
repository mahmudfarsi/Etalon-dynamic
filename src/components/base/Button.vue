<template>
        <component :is="tag" :class="['btn',`btn--${isIconOnly ? 'simple' : 'noSimple'}`,`btn--${isLike ? 'bg-none' : ''}`]">
            <slot v-if="!isIconOnly"/>
            <Icon v-if="icon" :name="icon"/>
        </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import {string,bool,oneOf} from 'vue-types'
    import Icon from '@/components/base/Ic.vue'

    defineProps({
        tag:oneOf(['button','a','router-link','span']).def('button'),
        isIconOnly:bool().def(false),
        icon:string(),
        isLike:bool().def(false),
        isSelect:bool().def(false)
    })
</script>


<style scoped>
.btn {
    @apply cursor-pointer
}
    .btn--simple {
        @apply flex justify-center items-center rounded-full
        border-none bg-yellow w-[40px] h-[40px]
    }

    .btn--noSimple {
        @apply justify-center
    }

    .btn--bg-none {
        @apply  rounded-full border-none bg-white p-[10px]
    }

    /* .btn--select {
        @apply bg-yellow
    }

    .btn--noSelect {
        @apply bg-white text-black
    } */

    
</style>