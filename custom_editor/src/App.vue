<template>
    <q-layout>
        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
body {
    background-color: var(--vscode-editor-background) !important;
}

.q-dark {
    color: var(--vscode-foreground) !important;
    background-color: var(--vscode-editorWidget-background) !important;
}
</style>
