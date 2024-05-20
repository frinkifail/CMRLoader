import { ConformsToModConstructor, ModdingAPI } from "./mod";

class BaseAPI implements ModdingAPI {
    dom: HTMLDivElement = document.getElementById('cmr-dom') as HTMLDivElement;
    addSplashText(message: string): void {
        newstickerlist.push(message);
    }
    addTickingHandler(handler: VoidFunction): void {
        tickHandlers.push(handler);
    }
    addBeforeTickHandler(handler: VoidFunction): void {
        firstTickHandlers.push(handler);
    }
    player = d;
    saveData = Save;
    settings = o;
}

export default async function loadMod(pathToFile: string) {
    console.time(pathToFile);

    const Mod: ConformsToModConstructor = (await import(/* @vite-ignore */ pathToFile)).default;
    const api = new BaseAPI();
    const mod = new Mod(api);

    console.log("Mod loaded in:")
    console.timeEnd(pathToFile);
}