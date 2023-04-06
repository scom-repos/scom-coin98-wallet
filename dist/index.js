define("@scom/scom-coin98-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class Coin98Provider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'Coin98 Wallet';
        }
        get image() {
            return fullPath('img/Coin98.svg');
        }
        get provider() {
            return window['ethereum'];
        }
        get homepage() {
            return 'https://docs.coin98.com/products/coin98-wallet';
        }
        installed() {
            let ethereum = window['ethereum'];
            return !!ethereum && (!!ethereum.isCoin98 || !!window['isCoin98']);
        }
    }
    exports.default = Coin98Provider;
});
