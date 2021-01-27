// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import {registerHelpers} from "./module/handlerbarsHelpers.js";
import {SYSTEM_CONFIG} from "./module/config.js";


// Initialize System
Hooks.once("init", async () => {
    console.log('MYSYSTEM | Initializing MYSYSTEM.')

    game.mySystem = {
        config: SYSTEM_CONFIG,
        entities: {}
    }

    CONFIG.system = SYSTEM_CONFIG;

    // Register Custom system settings
    registerSettings();

    // Preload Handlebars templates and helpers
    await preloadTemplates();
    await registerHelpers();
})

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
    // Do anything after initialization but before
    // ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
    // Do anything once the system is ready
});