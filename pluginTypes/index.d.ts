/// <amd-module name="@scom/scom-coin98-wallet" />
declare module "@scom/scom-coin98-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export class Coin98Provider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
