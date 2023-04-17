function Player_Move(){//movement.
  
  if(keyIsDown(UP_ARROW)){
    Player.Name = "Up";//name field is used to communicate info about normal entities, but with player it is the direction you are facing.
 
    if((checkPlayerCollision(Player.Position[0] + 16 + 16, Player.Position[1] + 48 - 18) == false) && (checkPlayerCollision(Player.Position[0] + 16 - 16, Player.Position[1] + 48 - 18) == false)){
      Player.Position[1] -= 2;
    }
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    Player.Name = "Right";
 
    if((checkPlayerCollision(Player.Position[0] + 16 + 18, Player.Position[1]+ 48 + 16) == false) && (checkPlayerCollision(Player.Position[0] + 16 + 18, Player.Position[1]+ 48 - 16) == false)){
      Player.Position[0] += 2;
    }
    
  }
  if(keyIsDown(DOWN_ARROW)){
    Player.Name = "Down";
 
    if((checkPlayerCollision(Player.Position[0] + 16 + 16, Player.Position[1] + 48 + 18) == false) && (checkPlayerCollision(Player.Position[0] + 16 - 16, Player.Position[1] + 48 + 18) == false)){
      Player.Position[1] += 2;
    }
    
  }
  if(keyIsDown(LEFT_ARROW)){
    Player.Name = "Left"
 
    if((checkPlayerCollision(Player.Position[0] + 16 - 18, Player.Position[1]+ 48 + 16) == false) && (checkPlayerCollision(Player.Position[0] + 16 - 18, Player.Position[1]+ 48 - 16) == false)){
      Player.Position[0] -= 2;
    }
    
  }
  
  //sprite

}
function keyTyped(){//this is in a different function because it should only be called once per press. 
  if(keyIsDown(32)){
    Player_Interaction();
    if(Player_Interaction() != 0){PlayerInventory.push(Interactions[Player_Interaction()][3])}//add the name of the interactable to the players inventory
 
    
  }
  if(keyIsDown(ENTER)){
    closeUp = true;
    print("silly")
  }
  if(keyIsDown(BACKSPACE)){
    closeUp = false;
    print("silly")
  }
}
