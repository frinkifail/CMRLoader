import { ConformsToMod, ModdingAPI } from "../mod";

export default class Mod implements ConformsToMod {
    api: ModdingAPI;

    constructor(api: ModdingAPI) {
        this.api = api;
        const commandInput = document.createElement('input');
        commandInput.type = 'text';
        commandInput.onkeydown = (ev) => {
            const key = ev.key.toLowerCase();
            if (ev.target !== commandInput || key !== "enter") return;
            const parts = commandInput.value.split(' ');
            const commandName = parts[0]
            parts.shift();
            const args = parts;
            console.log(args);
            switch (commandName) {
                case "tps":
                    api.settings.tps = parseFloat(args[0]);
                    api.saveData();
                    location.reload();
                    break;
                case "reset":
                    HardReset();
                case "money":
                    api.player.money = parseFloat(args[0]);
                    api.saveData();
                    break;
                case "damage":
                    api.player.basedamage = parseFloat(args[0]);
                    api.saveData();
                    break;
                default:
                    const text = document.createElement('p')
                    text.textContent = "Unknown command: " + commandName
                    api.dom.append(text);
            }
            commandInput.value = '';
        }
        api.dom.append(commandInput);
    }
}