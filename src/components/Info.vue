<template>
    <v-container>
        <v-sheet color="white" elevation="2" height="300" width="300" class="d-flex flex-column mb-1">
             <div class="text-body-1 font-weight-medium">
                 <p>ОБЪЕКТ СОХРАНЕН</p>
                 <p>{{ title }} </p>
             </div>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.getters.getNameTest
        },
    }
}
</script>