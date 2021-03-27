const Pier=require("./Pier.js");
const Port=require("./Port.js");
const Ship=require("./Ship.js");
const ShipOnPier=require("./ShipsOnPier.js");

function listOfPorts(count){
  let list=[];
  for (let i = 1; i < count+1; i++) {
    list.push(new Port(i, "Port "+i))
  }
  return list;
}

function addNewPort(list){
  list.push(new Port(list.length+1, "Port "+(list.length+1)));
  return list;
}

function editPort(list, id, newName){
  list.map(x=>{
    if(x.id==id){
      x.portName=newName;
    }
  })
  return list;
}

function deletePort(list, id){
  return list.filter(x=>x.id!=id);
}

function findPort(list, id){
  if(list.find(x=>x.id==id)!==undefined){
    return list.find(x=>x.id==id);
  }
  else{
    return -1;
  }
}

function listOfShips(count){
  let list=[];
  for (let i = 1; i < count+1; i++) {
    list.push(new Ship(i, "Ship "+i))
  }
  return list;
}

function addNewShip(list){
  list.push(new Ship(list.length+1, "Ship "+(list.length+1)));
  return list;
}

function editShip(list, id, newName){
  list.map(x=>{
    if(x.id==id){
      x.name=newName;
    }
  })
  return list;
}

function deleteShip(list, id){
  return list.filter(x=>x.id!=id);
}

function findShip(list, id){
  if(list.find(x=>x.id==id)!==undefined){
    return list.find(x=>x.id==id);
  }
  else{
    return -1;
  }
}

function addPierToPort(pier,portId){
  pier.PortId=portId;
  return pier;
}

function deletPierFromPort(pier){
   pier.PortId=0;
   return pier;
}

function shipArrival(list,ship,pier){
   list.push(new ShipOnPier(ship.id, ship.name, pier.id))
   return list;
}

function shipDepature(list,ship,pier){
  for (let i = 0; i < list.length; i++) {
    if(list[i].id==ship.id && list[i].PierId==pier.id){
      list.splice(i,1)
    }
  }
  return list;
}

function findShipsOnPier(list,pierId){
  arr=[]
  for (let i = 0; i < list.length; i++) {
    if(list[i].PierId==pierId){
      arr.push(list[i]);
    }
  }
  return arr;
}



ports=listOfPorts(5);
console.log(ports);
console.log();
ports=addNewPort(ports);
console.log(ports);
console.log();
ports=editPort(ports,1,"EditPort");
console.log(ports);
console.log();
ports=deletePort(ports,6);
console.log(ports);
console.log();
specialPort=findPort(ports,2);
console.log(specialPort);
console.log();


ships=listOfShips(5);
console.log(ships);
console.log();
ships=addNewShip(ships);
console.log(ships);
console.log();
ships=editShip(ships,1,"EditShip");
console.log(ships);
console.log();
ships=deleteShip(ships,6);
console.log(ships);
console.log();
specialShip=findShip(ships,3);
console.log(specialShip);
console.log();

firstPier=new Pier(1,0);
console.log(firstPier);
console.log();
firstPier=addPierToPort(firstPier,1);
console.log(firstPier);
console.log();
firstPier=deletPierFromPort(firstPier);
console.log(firstPier);
console.log();

secondPier=new Pier(2,0);
ArrivedShip=shipArrival([], ships[1], firstPier);
ArrivedShip=shipArrival(ArrivedShip, ships[2], secondPier);
ArrivedShip=shipArrival(ArrivedShip, ships[0], firstPier);
ArrivedShip=shipArrival(ArrivedShip, ships[3], firstPier);
console.log(ArrivedShip);
console.log();

ArrivedShip=shipDepature(ArrivedShip, ships[1], firstPier);
console.log(ArrivedShip);
console.log();

shipsOnFirstPier=findShipsOnPier(ArrivedShip,firstPier.id);
console.log(shipsOnFirstPier);
console.log();
