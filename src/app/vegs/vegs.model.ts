export class Veg {
  //public id: string;
  public itemname: string;
  public itemdescription: string;
  public imageurl: string;
public price: string;

  constructor(name: string, desc: string, imageurl: string , price: string) {
  //  this.id = id ;
    this.itemname = name;
    this.itemdescription = desc;
    this.imageurl = imageurl;
    this.price = price;
  }



}
