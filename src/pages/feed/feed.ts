import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Ewerton"; //Bom quando quer restringir valores
  public nome_usuario2 = "Ewerton"; //Nao restringir valores
  public nome_usuario3:any = "Ewerton"; //Nao restringir valores, aceita qualquer coisa
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumerosRetornodoTipo() :number{  //com retorno de tipo definido e obrigatorio
    return 2;
  }

  public somaDoisNumeros() :void{             //retorno void (sem return)
    alert(11 + 11);
  }


  public somaDoisNumerosSemRetornoTipo(){      //retorno não definido (number,string, etc)
    return "Olá";
  }

  public somaDoisNumerosComParamentros(num1:number, num2:number) :void{ //com paramentros de entrada e retorno void
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.somaDoisNumeros();
    this.somaDoisNumerosComParamentros(6,6);
  }

}
