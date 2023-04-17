function RenderEntities(){//render entities in order so they can overlap
  sortEntitiesByY()
  for (let i = 1; i < Entities.length; i++){
    if (Entities[i][2] == 0){
      rect(Entities[i][0][0], Entities[i][0][1], Entities[i][1][1][0], Entities[i][1][1][1]);
    }//REMEMBER!! rects drawn from top left. 
    else{
      image(Entities[i][2], Entities[i][0][0], Entities[i][0][1], Entities[i][1][1][0], Entities[i][1][1][1])
    }
  }
}
function sortEntitiesByY(){//sorts entities for rendering.
  for (let i = 1; i < Entities.length - 1; i++){
    if(Entities[i + 1][0][1] < Entities[i][0][1]){
      tempEntity = Entities[i + 1];
      Entities[i + 1] = Entities[i];
      Entities[i] = tempEntity;
    }
  }
}