<template>
  <div>
    <h1>ISCN RSS Issuer</h1>
    <input
      type="text"
      v-model="rssLink"
      name="rssLink"
      placeholder="Input the RSS link..."
    />
    <p>{{ rssLink }}</p>
    <button @click="() => load(rssLink)">Load</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rssLink: "",
    };
  },
  methods: {
    async load(rssLink) {
      console.log(rssLink);
      const res = await fetch(rssLink);
      const parser = new DOMParser();
      parser.parseFromString(res.text());
      console.log(parser);
    },
  },
};
</script>
