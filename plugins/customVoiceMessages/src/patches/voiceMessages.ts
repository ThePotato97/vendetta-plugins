import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";

function getBucket(guildId: string) {
    return findByProps("getGuildExperimentBucket").getGuildExperimentBucket("2023-01_voice_messages", guildId)
}

export default () =>
    before("uploadLocalFiles", findByProps("uploadLocalFiles"), (args) => {
        if (!storage.sendAsVM) return;
        const guildId = findByProps("getLastSelectedGuildId").getGuildId();
        if (!guildId || getBucket(guildId) == 1) {
            const item = args[0].items[0];
            if (item.mimeType.startsWith("audio")) {
                args[0].flags = 8192;
                item.waveform = storage.waveForm ?? "AEtWPyUaGA4OEAcA;
                item.durationSecs = storage.audioLength ?? 9999;
            }
        }
    });

