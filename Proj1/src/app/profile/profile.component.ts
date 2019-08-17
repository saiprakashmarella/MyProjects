import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Laptops, Mobiles, Watches, MensWear, WoMensWear, KidsWear } from './items_list'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  lappy1 = new Laptops('dell', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy2 = new Laptops('HP', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy3 = new Laptops('Lenovo', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy4 = new Laptops('MAC', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy5 = new Laptops('MAC', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy6 = new Laptops('MAC', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy7 = new Laptops('MAC', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy8 = new Laptops('MAC', 'intel', '8', '256', '14inch', '123456', '../../assets/Images/card1.jpg');
  lappy_Products = [this.lappy1, this.lappy2, this.lappy3, this.lappy4, this.lappy5, this.lappy6, this.lappy7, this.lappy8];


  mob1 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob2 = new Mobiles('APPLE', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob3 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob4 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob5 = new Mobiles('Oppo', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob6 = new Mobiles('Lenovo', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob7 = new Mobiles('XIaOMI', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob8 = new Mobiles('REALME', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob9 = new Mobiles('MOTOROLA', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob10 = new Mobiles('HTC', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob11 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  mob12 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  mobi_products = [this.mob1, this.mob2, this.mob3, this.mob4, this.mob5, this.mob6, this.mob7, this.mob8, this.mob9, this.mob10, this.mob11, this.mob12];

  wat1 = new Watches('Watch1', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat2 = new Watches('Watch2', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat3 = new Watches('Watch3', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat4 = new Watches('Watch4', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat5 = new Watches('Watch5', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat6 = new Watches('Watch6', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat7 = new Watches('Watch7', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat8 = new Watches('Watch8', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat9 = new Watches('Watch9', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat10 = new Watches('Watch10', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat11 = new Watches('Watch11', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');
  wat12 = new Watches('Watch12', 'snapdragon310', '250mb', '1gb', '3.4inch', '12321', '../../assets/Images/Card2.jpg');

  watch_products = [this.wat1, this.wat2, this.wat3, this.wat4, this.wat5, this.wat6, this.wat7, this.wat8, this.wat9, this.wat10, this.wat11, this.wat12];

  men1 = new MensWear('tshirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men2 = new MensWear('Pant', '789', 'Medium', '../../assets/Images/Card2.jpg');
  men3 = new MensWear('shirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men4 = new MensWear('Shorts', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men5 = new MensWear('tshirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men6 = new MensWear('Pant', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men7 = new MensWear('shirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men8 = new MensWear('tshirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men9 = new MensWear('Shorts', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men10 = new MensWear('tshirt', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men11 = new MensWear('Pant', '999', 'Medium', '../../assets/Images/Card2.jpg');
  men12 = new MensWear('tshirt', '999', 'Medium', '../../assets/Images/Card2.jpg');

  men_products = [this.men1, this.men2, this.men3, this.men4, this.men5, this.men6, this.men7, this.men8, this.men9, this.men10, this.men11, this.men12];

  women_products = this.men_products;

  kids_products = this.men_products;

  sam1 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam2 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam3 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam4 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam5 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam6 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam7 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam8 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam9 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam10 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam11 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  sam12 = new Mobiles('samsung', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  samsung_products = [this.sam1, this.sam2, this.sam3, this.sam4, this.sam5, this.sam6, this.sam7, this.sam8, this.sam9, this.sam10, this.sam11, this.sam12];

  apple1 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple2 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple3 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple4 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple5 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple6 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple7 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple8 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple9 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple10 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple11 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  apple12 = new Mobiles('Apple', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  apple_products = [this.apple1, this.apple2, this.apple3, this.apple4, this.apple5, this.apple6, this.apple7, this.apple8, this.apple9, this.apple10, this.apple11, this.apple12];

  vivo1 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo2 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo3 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo4 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo5 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo6 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo7 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo8 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo9 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo10 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo11 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  vivo12 = new Mobiles('VIVO', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  vivo_products = [this.vivo1, this.vivo2, this.vivo3, this.vivo4, this.vivo5, this.vivo6, this.vivo7, this.vivo8, this.vivo9, this.vivo10, this.vivo11, this.vivo12];

  op1 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op2 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op3 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op4 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op5 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op6 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op7 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op8 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op9 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op10 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op11 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  op12 = new Mobiles('OnePlus', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  oneplus_products = [this.op1, this.op2, this.op3, this.op4, this.op5, this.op6, this.op7, this.op8, this.op9, this.op10, this.op11, this.op12];

  rm1 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm2 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm3 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm4 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm5 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm6 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm7 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm8 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm9 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm10 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm11 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');
  rm12 = new Mobiles('Realme', 'snapdragon845', '8gb', '256gb', '6.4inch', '76766', '../../assets/Images/Card2.jpg');

  realme_products = [this.rm1, this.rm2, this.rm3, this.rm4, this.rm5, this.rm6, this.rm7, this.rm8, this.rm9, this.rm10, this.rm11, this.rm12];

  sam_list = false;
  apple_list = false;
  op_list = false;
  vivo_list = false;
  rm_list = false;
  men_list = false;
  women_list = false;
  kids_list = false;
  lappy_list = false;
  mobile_list = false;
  watch_list = false;
  carousel_display = true;
  cards_display = true;


  constructor(private route: ActivatedRoute, private router: Router) { }
  name = "";
  profname = "P";
  ngOnInit() {
    $(document).ready(function () {
      $("#pb").click(function () {
        $("#arrow").toggle();

      });
      $("#home").click(function () {

      })

    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      let nam = params.get('user');
      if (nam.length > 0) {
        this.name = nam;
        this.profname = this.name.charAt(0).toUpperCase();
      }
      else {
        this.profname = 'P';
      }

    });

  }
  home() {
    this.sam_list = false;
    this.apple_list = false;
    this.op_list = false;
    this.vivo_list = false;
    this.rm_list = false;
    this.men_list = false;
    this.women_list = false;
    this.kids_list = false;
    this.lappy_list = false;
    this.mobile_list = false;
    this.watch_list = false;
    this.carousel_display = true;
    this.cards_display = true;
  }
  logout() {
    var r = confirm("you want to logout?");
    if (r == true) {
      this.router.navigate(['/login']);
    }
  }
  /*
  laptops() {
    this.router.navigate(['/items', { product: "laptops" }]);
  }
  samsung() {
    this.router.navigate(['/items', { product: "samsung" }]);
  }
  apple() {
    this.router.navigate(['/items', { product: "apple" }]);
  }
  oneplus() {
    this.router.navigate(['/items', { product: "oneplus" }]);
  }
  realme() {
    this.router.navigate(['/items', { product: "realme" }]);
  }
  vivo() {
    this.router.navigate(['/items', { product: "vivo" }]);
  }
  smartphones() {
    this.router.navigate(['/items', { product: "smartphones" }]);
  }
  accessories() {
    this.router.navigate(['/items', { product: "accessories" }]);
  }
  tva() {
    this.router.navigate(['/items', { product: "TVA" }]);
  }
  mens() {
    this.router.navigate(['/items', { product: "mens" }]);
  }
  womens() {
    this.router.navigate(['/items', { product: "womens" }]);
  }
  kids() {
    this.router.navigate(['/items', { product: "kids" }]);
  }
*/
  laptops() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.vivo_list == true) {
      this.vivo_list = false;
    }
    if (this.apple_list == true) {
      this.apple_list = false;
    }
    if (this.op_list == true) {
      this.op_list = false;
    }

    if (this.rm_list == true) {
      this.rm_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }
    this.lappy_list = true;
    this.carousel_display = false;
    this.cards_display = false;

  }
  samsung() {
    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }

    if (this.rm_list == true) {
      this.rm_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }

    this.sam_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  apple() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }

    if (this.rm_list == true) {
      this.rm_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }

    this.apple_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  oneplus() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.rm_list == true) {
      this.rm_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }

    this.op_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  realme() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }


    this.rm_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  vivo() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.rm_list == true) {
      this.rm_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }


    this.vivo_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  smartphones() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.rm_list == true) {
      this.rm_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }


    this.mobile_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  /*accessories() {
    this.accessories_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  tva() {
    this.lappy_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }*/
  mens() {
    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.rm_list == true) {
      this.rm_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }


    this.men_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  womens() {

    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.rm_list == true) {
      this.rm_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }

    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.kids_list == true) {
      this.kids_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }
    this.women_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  kids() {

    if (this.sam_list == true) {
      this.sam_list = false;
    }

    if (this.lappy_list == true) {
      this.lappy_list = false;
    }
    if (this.rm_list == true) {
      this.rm_list = false;
    }

    if (this.apple_list == true) {
      this.apple_list = false;
    }

    if (this.op_list == true) {
      this.op_list = false;
    }
    if (this.mobile_list == true) {
      this.mobile_list = false;
    }

    if (this.men_list == true) {
      this.men_list = false;
    }

    if (this.women_list == true) {
      this.women_list = false;
    }
    if (this.vivo_list == true) {
      this.vivo_list = false;
    }
    if (this.watch_list == true) {
      this.watch_list = false;
    }
    this.kids_list = true;
    this.carousel_display = false;
    this.cards_display = false;
  }
  details(det) {
    this.router.navigate(['/details', { user: det }]);
  }
}




