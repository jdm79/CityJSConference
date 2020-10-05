<template>
    <div :class="$style.highlightCardWrapper">
        <a :href="item.videoUrl">
            <div v-if="this.year===2019"  :style="{ backgroundImage: 'url(' + imageUrl + ')' }" :class="$style.imageDiv">
            </div>
        </a>

      <iframe  v-if="this.year===2020" width="560" height="315" :src="item.videoUrl"
       frameborder="0" allow="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div :class="$style.infoWrap">
            <div :class="$style.talkTitle">{{ item.title }}</div>
            <div :class="$style.speaker">
                <div :class="$style.speakerName">{{ item.name }}</div>
                <div :class="$style.speakerCompany">{{ item.company }}</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'HighlightCard',
        props: {
            item: Object,
            year: String
        },
        computed: {
            imageUrl() {
                return `/siteimages/${this.item.image.path}`
            },
        },
    };
</script>

<style module src="./HighlightCard.css" />
