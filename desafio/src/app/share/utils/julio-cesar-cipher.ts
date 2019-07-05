export class JulioCesarCipher {
    decimal_places: number;

    constructor(decimal_places?: number) {
        
        this.decimal_places = decimal_places
    
    }

    decipher(encodedMessage: string): string {
        let decodedMessage = ''
        for (let i = 0; i < encodedMessage.length; i++) {
            if (!/^[a-z]+$/.test(encodedMessage[i])) {
                decodedMessage +=  encodedMessage[i];
                continue;
            }
            
            let decodedChar = String.fromCharCode(encodedMessage.charCodeAt(i) - this.decimal_places)
            decodedChar = String.fromCharCode(decodedChar.charCodeAt(0))
            
            decodedMessage += decodedChar
        }
        return decodedMessage
    }
}
