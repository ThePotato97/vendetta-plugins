import voiceMessages from "./patches/voiceMessages"
import { msgCreate, /* msgSuccess */ } from "./patches/allAudioAsVM"
import { storage } from "@vendetta/plugin";

storage.sendAsVM ??= false
storage.allAsVM ??= false
storage.showFileName ??= false

const patches = [
    voiceMessages(),
    msgCreate(),
    // msgSuccess()
];

export const onUnload = () => { patches.forEach(p => p()); }

export { default as settings } from "./settings";
