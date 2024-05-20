export interface ModdingAPI {
    addSplashText(message: string): void;
    dom: HTMLDivElement;
    addTickingHandler(handler: VoidFunction): void;
    addBeforeTickHandler(handler: VoidFunction): void;
    player: typeof d;
    settings: typeof o;
    saveData: VoidFunction;
}
export interface ConformsToMod {
    api: ModdingAPI;
}
export interface ConformsToModConstructor {
    new(api: ModdingAPI): ConformsToMod;
}