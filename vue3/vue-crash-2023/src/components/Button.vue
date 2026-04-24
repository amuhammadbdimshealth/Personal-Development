<template>
    <button 
        :style="{ backgroundColor: color }" 
        class="btn"
        @click="$emit('btn-click')"
        >
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        color: String,
    },
};
</script>

<style></style>
