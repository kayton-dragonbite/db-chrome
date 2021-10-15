
import { ethers } from 'ethers';

export async function initWeb3() {
    // pass in the provider useRef
    // add window.ethereum as the current provider
    // return signer
    if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
        const eth = new ethers.providers.Web3Provider(window.ethereum, "any");
        console.log('eth', eth)
        const listAccount = await eth.listAccounts();
        console.log({ listAccount })
        if (listAccount.length > 0) {
            const signer = await eth.getSigner();
            return signer
        } else {
            return undefined
        }
    }
};

export async function getChainId() {
    const eth = new ethers.providers.Web3Provider(window.ethereum, "any");
    const currentChain = await eth.getNetwork();
    console.log({ currentChain })
    return currentChain;
};

export function abbreviateAddress(address) {
    return address.substr(0, 6) + '...' + address.substr(address.length - 4, 4);
};