var mage = function (){

  this.name = "Guldan";
  this.life = 100;
  this.inventory = ["bâton", "potion"];
  this.level = function (intelligency, dexterite, force, defend){
    this.intelligency = intelligency || 10;
    this.dexterite = dexterite || 5;
    this.force = 20;
    this.defend = 20;
  }
}

var guerrier = function (){

  this.name = "thrall";
  this.life = 100;
  this.inventory = ["hache", "potion"];
  this.level = function (intelligency, dexterite, force, defend){
    this.intelligency = intelligency || 10;
    this.dexterite = dexterite || 25;
    this.force = 40;
    this.defend = 30;
  }
}

var chaman = function (){

  this.name = "arthur";
  this.life = 100;
  this.inventory = ["sceptre", "potion"];
  this.level = function (intelligency, dexterite, force, defend){
    this.intelligency = intelligency || 35;
    this.dexterite = dexterite || 5;
    this.force = 25;
    this.defend = 25;
  }
}

var paladin = function (){

  this.name = "aladin";
  this.life = 100;
  this.inventory = ["épée", "bouclier" || "lance"];
  this.level = function (intelligency, dexterite, force, defend){
    this.intelligency = intelligency || 30;
    this.dexterite = dexterite || 20;
    this.force = 20;
    this.defend = 15;
  }
}

joueur1 = new chaman();
