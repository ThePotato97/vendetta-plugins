import { before } from "@vendetta/patcher";
import { FluxDispatcher } from '@vendetta/metro/common';
import { storage } from "@vendetta/plugin";

const handlers = FluxDispatcher._actionHandlers._orderedActionHandlers;

// export function msgSuccess() {
//     return before("actionHandler", handlers.LOAD_MESSAGES_SUCCESS?.find(i => i.name === "MessageStore"), (args) => {
//         if (!storage.allAsVM) return;
//         args[0].messages.filter((message) => {
//             return message.attachments[0].content_type.startsWith("audio")
//         }).forEach(x => x.flags = 8192)

//     })
// }

export function msgCreate() {
    return before("actionHandler", handlers.MESSAGE_CREATE?.find(i => i.name === "MessageStore"), (args) => {
        if (!storage.allAsVM) return;
        let message = args[0].message
        if (message?.attachments?.[0]?.content_type?.startsWith("audio")) {
            message.flags = 8192
            message.attachments.forEach(x => { x.waveform = "AEtWPyUaGA4OEAcA", x.duration_secs = 0.0 })
            console.log(message)
        }
    })
}