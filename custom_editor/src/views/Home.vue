<template>
    <q-page padding>
        <q-card>
            <q-card-section>
                <q-toolbar-title>Hello, CustomView</q-toolbar-title>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// const vscode = acquireVsCodeApi<string>();

@Component
export default class Home extends Vue {
    private mounted() {
        // vscode.postMessage({});
        window.addEventListener('message', ev => {
            //
        });
    }
}
</script>
