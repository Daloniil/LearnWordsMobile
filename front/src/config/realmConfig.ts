import {App} from "realm";

export const appId = 'testing-dtytgpo';
export const appConfig = {
    id: appId,
    timeout: 10000,
};

export const app = new App(appConfig);
