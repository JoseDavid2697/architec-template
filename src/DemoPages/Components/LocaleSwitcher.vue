<template>
    <div>
        <select name="" id="locale" v-model="$i18n.locale">
            <option v-for="locale in locales" :key="locale.key" :value="locale.key">
                {{locale.label}}
            </option>
        </select>
    </div>
</template>

<script>
export default ({
   data: () => ({
      locales: [
          {key: "es", "label": "Español"},
          {key: "en", "label": "English"}
      ]
   }),
   created() {
    console.log(this.$i18n);
   }
});
</script>