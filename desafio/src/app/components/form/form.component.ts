import { Component, OnInit, Input } from '@angular/core';
import { Cryptografy } from 'src/app/models/cryptografy.model';
import { CryptografyJulioCesarService } from 'src/app/services/cryptografy-julio-cesar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  challenge: Cryptografy;

  constructor(private cryptografyJulioCesarService: CryptografyJulioCesarService) { 
    this.newChallenge();
  }

  ngOnInit() {
  }

  newChallenge(): void{
    this.cryptografyJulioCesarService.getEncryptedText().subscribe((response: Cryptografy) => {
      this.challenge = response;
    });
  }
}
