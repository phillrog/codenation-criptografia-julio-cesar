import { Component, OnInit, Input } from '@angular/core';
import { Cryptografy } from 'src/app/models/cryptografy.model';
import { CryptografyJulioCesarService } from 'src/app/services/cryptografy-julio-cesar.service';
import { JulioCesarHelper } from 'src/app/helpers/julio-cesar.helper';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  challenge: Cryptografy = new Cryptografy();
  julioCesarHelper: JulioCesarHelper;

  constructor(private cryptografyJulioCesarService: CryptografyJulioCesarService,
    private toastr: ToastrService){
    this.newChallenge();
    
  }

  ngOnInit() {
  }

  newChallenge(): void{
    this.cryptografyJulioCesarService.getEncryptedText().subscribe((response: Cryptografy) => {
      this.challenge = response;
      this.julioCesarHelper = new JulioCesarHelper(this);
    });
  }

  decipherClick(event){
    this.julioCesarHelper.decipher();
  }

  sha1Click(event){
    this.julioCesarHelper.sha1Encrypt();
  }

  sendResultToCodenation(files: FileList){
    const fileToUpload = files.item(0);
    this.cryptografyJulioCesarService.postDecryptedText(fileToUpload).subscribe((response: any) => {
      this.toastr.success('Atenção', `Enviado com sucesso - ${JSON.stringify(response)}`);
    });
  }
}
