const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

function clear(){
	document.getElementById("itemInput").value = "";
}

function addItem(){	
	const newItemText = itemInput.value;
	const newItem = createListItem(newItemText);
	itemList.appendChild(newItem);
	clear();
}

function createListItem(text){
	const listItem = document.createElement("li");
	listItem.textContent = text;
	return listItem;
}