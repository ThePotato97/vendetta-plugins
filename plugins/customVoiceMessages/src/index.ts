import voiceMessages from "./patches/voiceMessages"
import { msgCreate, /* msgSuccess */ } from "./patches/allAudioAsVM"
import downloadable from "./patches/downloadable"
import { storage } from "@vendetta/plugin";

storage.sendAsVM ??= false
storage.allAsVM ??= false

const patches = [
    voiceMessages(),
    msgCreate(),
    downloadable()
    // msgSuccess()
];

export const onUnload = () => { patches.forEach(p => p()); }

export { default as settings } from "./settings";
