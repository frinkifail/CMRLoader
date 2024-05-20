import { ConformsToMod, ModdingAPI } from "../mod";

export default class Mod implements ConformsToMod {
    api: ModdingAPI;

    constructor(api: ModdingAPI) {
        this.api = api;
        api.addSplashText("this is a certified custom splash text");
        api.addSplashText("i cant think of more splash texts");
        api.addSplashText("why are these called news tickers or something");
        api.addSplashText("teste sucks at coding");
    }
}