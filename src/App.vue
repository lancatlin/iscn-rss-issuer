<template>
    <div>
        <h1>ISCN RSS Issuer</h1>
        <input type="text" v-model="rssLink" name="rssLink" placeholder="Input the RSS link...">
        <p>{{ rssLink }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rssLink: "",
        }
    }
}
</script>

