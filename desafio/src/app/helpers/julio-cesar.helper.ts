import { Cryptografy } from '../models/cryptografy.model';
import { JulioCesarCipher } from '../share/utils/julio-cesar-cipher';

export class JulioCesarHelper {
    challenge: Cryptografy;
    julioCesarCipher: JulioCesarCipher;

    constructor(parent: any) {
        this.challenge =  parent.challenge;        
        this.julioCesarCipher = new JulioCesarCipher(3);
    }

    decipher():void {
        this.challenge.decifrado = this.julioCesarCipher.decipher(this.challenge.cifrado);
    }

    sha1Encrypt(): void {
        this.challenge.resumo_criptografico = this.julioCesarCipher.sha1Encrypt(this.challenge.decifrado);
    }
}