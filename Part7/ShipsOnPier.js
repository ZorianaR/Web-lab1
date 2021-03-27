const  Ship  =  require ( "./Ship.js" ) ;

class ShipOnPier extends Ship{
  constructor(id, name, PierId){
    super(id, name);
    //this.id=id;
    //this.name=name;
    this.PierId=PierId;

  }
}

module.exports=ShipOnPier;
