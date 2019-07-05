import { Component } from '@angular/core';
import { CryptografyJulioCesarService } from './services/cryptografy-julio-cesar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'criptografia-julio-cesar';

  
  constructor(private cryptografyJulioCesarService: CryptografyJulioCesarService) {
    
  }

  newChallenge(event): void{
    this.cryptografyJulioCesarService.getEncryptedText().subscribe((response) => {
      console.log(response);
    });
  }
}
