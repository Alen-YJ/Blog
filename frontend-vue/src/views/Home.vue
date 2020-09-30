<template>
    <v-container>
        <v-row>
            <v-col cols='12' sm='12' md='9'>
                <ArticleList />
            </v-col>
            <v-spacer></v-spacer>
            <v-col sm='0' md='3'>
                <Side />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import Side from '@/components/MainSide'
import ArticleList from '@/components/ArticleList'
export default {
    name: "Home",
    components: {
        Side, ArticleList
    }
};
</script>
