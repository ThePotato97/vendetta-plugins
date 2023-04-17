import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";

function getBucket(guildId: string) {
    return findByProps("getGuildExperimentBucket").getGuildExperimentBucket("2023-01_voice_messages", guildId)
}

export default () =>
    before("uploadLocalFiles", findByProps("uploadLocalFiles"), (args) => {
        if (!storage.sendAsVM) return;
        if (getBucket(findByProps("getLastSelectedGuildId").getGuildId()) == 1) {

            if (args[0].items[0].mimeType.startsWith("audio")) {
                args[0].flags = 8192;
                args[0].items[0].item.waveform = 'AEtWPyUaGA4OEAcA';
                args[0].items[0].item.durationSecs = 60.0;
                args[0].items[0].waveform = 'AEtWPyUaGA4OEAcA';
                args[0].items[0].durationSecs = 60.0
            }
        }
    });

