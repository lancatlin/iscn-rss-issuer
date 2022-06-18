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
    <div>
      <div v-for="article in articles" :key="article.guid">
        <p>{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rssLink: "",
      articles: [],
    };
  },
  methods: {
    async load(rssLink) {
      console.log(rssLink);
      const res = await fetch(`/api?url=${rssLink}`);
      this.articles = await res.json();
    },
  },
};
</script>
