var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { registerHelpers } from "./module/handlerbarsHelpers.js";
import { SYSTEM_CONFIG } from "./module/config.js";
Hooks.once("init", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('MYSYSTEM | Initializing MYSYSTEM.');
    game.mySystem = {
        config: SYSTEM_CONFIG,
        entities: {}
    };
    CONFIG.system = SYSTEM_CONFIG;
    registerSettings();
    yield preloadTemplates();
    yield registerHelpers();
}));
Hooks.once('setup', function () {
});
Hooks.once('ready', function () {
});
