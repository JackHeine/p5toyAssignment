function RenderHud(){
  DisplayInventory();
  DisplayOrders();
}

function DisplayInventory(){
  var Inventory = "Inventory:";
  for (var i = 0; i < PlayerInventory.length; i++){
    Inventory += "\n" + (i+ 1) +". " + PlayerInventory[i][0] + ","
  }
  rect(300, 300, 100, 100)
  text(Inventory, 310, 315, 100, 100);
}
//not sure how much is needed for inventory, but i imagine the other 300 is needed for displaying orders.
function DisplayOrders(){
  //for later: PlayerOrders
  rect(0, 300,300, 100);
  text("Orders: ", 10, 315, 300, 100)
}