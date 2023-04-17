
function checkPlayerCollision(x, y){//check if players next position is already occupied by a collision box
  
  hasCollided = false;
  for (let i = 1; i < Entities.length; i++){
    if ((x > Entities[i][0][0]) && (x < Entities[i][0][0] + Entities[i][1][0][0]) && 
        (y >= Entities[i][0][1] + (Entities[i][1][1][1] - Entities[i][1][0][1])) && 
        (y <= Entities[i][0][1] + Entities[i][1][0][1] + (Entities[i][1][1][1] - Entities[i][1][0][1])))
    {
       hasCollided = true;
     }
  }
  
  return hasCollided;
}


function Player_Interaction(){//returns the index of interactions where an interaction occurred. 
  for (let i = 1; i < Interactions.length; i++){
    if(Player.Name == "Up"){
      if(Player.Position[0] + 16 > Interactions[i][0][0] &&
         Player.Position[0] + 16 < Interactions[i][0][0] + Interactions[i][1][0][0] &&
         Player.Position[1] + 48 - 32 > Interactions[i][0][1] &&
         Player.Position[1] + 48 - 32 < Interactions[i][0][1] + Interactions[i][1][0][1])
      {
        
        return i;
      }
      else{ return 0;}
    }
    else if(Player.Name == "Down"){
      if(Player.Position[0] + 16 > Interactions[i][0][0] &&
         Player.Position[0] + 16 < Interactions[i][0][0] + Interactions[i][1][0][0] &&
         Player.Position[1] + 48 + 32 > Interactions[i][0][1] &&
         Player.Position[1] + 48 + 32 < Interactions[i][0][1] + Interactions[i][1][0][1])
      {
        
        return i;
      }
      else{ return 0;}
    }
    else if(Player.Name == "Left"){
      if(Player.Position[0] + 16 - 32 > Interactions[i][0][0] &&
         Player.Position[0] + 16 - 32 < Interactions[i][0][0] + Interactions[i][1][0][0] &&
         Player.Position[1] + 48 > Interactions[i][0][1] &&
         Player.Position[1] + 48 < Interactions[i][0][1] + Interactions[i][1][0][1])
      {
        
        return i;
      }
      else{ return 0;}
    }
    else if(Player.Name == "Right"){
      if(Player.Position[0] + 16 + 32 > Interactions[i][0][0] &&
         Player.Position[0] + 16 + 32 < Interactions[i][0][0] + Interactions[i][1][0][0] &&
         Player.Position[1] + 48 > Interactions[i][0][1] &&
         Player.Position[1] + 48 < Interactions[i][0][1] + Interactions[i][1][0][1])
      {
        
        return i;
      }
      else{ return 0;}
    }
    else{print("critical failure in player interaction")}
  }
}
