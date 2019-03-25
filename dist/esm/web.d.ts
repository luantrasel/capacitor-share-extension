import { WebPlugin } from '@capacitor/core';
import { ShareExtensionPlugin } from './definitions';
export declare class ShareExtensionWeb extends WebPlugin implements ShareExtensionPlugin {
    constructor();
    saveDataToNativeUserDefaults(options: {
        key: string;
        data: any;
    }): Promise<{
        key: string;
        data: any;
    }>;
    loadDataFromNativeUserDefaults(options: {
        key: string;
    }): Promise<{
        key: string;
    }>;
}
declare const ShareExtension: ShareExtensionWeb;
export { ShareExtension };
