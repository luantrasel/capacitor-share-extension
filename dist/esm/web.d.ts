import { WebPlugin } from '@capacitor/core';
import { ShareExtensionPlugin } from './definitions';
export declare class ShareExtensionWeb extends WebPlugin implements ShareExtensionPlugin {
    checkSendIntentReceived(): ReturnType<ShareExtensionPlugin["checkSendIntentReceived"]>;
    clearKeychainData(): ReturnType<ShareExtensionPlugin["clearKeychainData"]>;
    finish(): ReturnType<ShareExtensionPlugin["finish"]>;
    saveDataToKeychain(): ReturnType<ShareExtensionPlugin["saveDataToKeychain"]>;
}
declare const ShareExtension: ShareExtensionWeb;
export { ShareExtension };
