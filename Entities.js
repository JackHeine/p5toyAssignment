function Entity(Position, Size, Sprite, Name) {//[[posx, posy], [[colx, coly], [spritex, sprite y]], image, "name"].
  //this creates an entity with a seperate sprite and collision box, so they can overlap for the isometric viewpoint.
  this.Position = Position; //[x, y]
  this.Size = Size; 
  //size = // [[collison x, collision y], [sprite x, sprite y]]
  this.Sprite = Sprite; //set to sprite, or 0 if none(will spawn rect)
  this.Name = Name;
  Entities.push([Position, Size, Sprite, Name]);
}
function Interaction(Position, Size, Sprite, Name) {//interactions are entities that can be interacted with. 
  this.Position = Position; 
  this.Size = Size; 
  this.Sprite = Sprite; 
  this.Name = Name;
  Entities.push([Position, Size, Sprite, Name]);
  Interactions.push([Position, Size, Sprite, Name]);
}//[[posx, posy], [[colx, coly], spritex, sprite y], image, ["name"]] Name is an array where [0] is a string name and it can contain several other items, important for creating complex things like tacos out of several other ingrediants
//you can add extra fields to interactions