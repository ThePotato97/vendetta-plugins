import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const upload = before("uploadLocalFiles", findByProps("uploadLocalFiles"), (args) => {
    if (args[0].items[0].mimeType == "audio/mpeg" || args[0].items[0].mimeType == "audio/ogg") {
        args[0].flags = 8192; args[0].items[0].item.waveform = 'AEtWPyUaGA4OEAcA';
        args[0].items[0].item.durationSecs = 1.20;
        args[0].items[0].waveform = 'AEtWPyUaGA4OEAcA';
        args[0].items[0].durationSecs = 1.20
    }
});
export const onUnload = () => upload()
