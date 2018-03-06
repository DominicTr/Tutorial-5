var dispDiv = document.getElementById("display"),
	st1 = document.getElementById("st1"),
	st2 = document.getElementById("st2"),
	imgSrc = null,
	stInp = document.getElementById("stickerURL"),
	stC = document.getElementById("cursor"),
	stHeight = document.getElementById("stickerHeight");

document.getElementById("bgcolor").addEventListener("change", function(){
	dispDiv.style.backgroundColor = this.value;
});

function changeImage(im){
	imgSrc = im.src;
	stC.src = imgSrc;
}

st1.addEventListener("click", function(){
	changeImage(this);
});
st2.addEventListener("click", function(){
	changeImage(this);
});

dispDiv.addEventListener("click", function(ev){
	var newImg = document.createElement("img");
	newImg.src = imgSrc;
	newImg.className = "displayStickers";
	dispDiv.appendChild(newImg);
	
	newImg.style.left = ev.pageX+"px";
	newImg.style.top = ev.pageY+"px";
	newImg.style.height = getHeight()+"px";
	
});

stInp.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		var newSticker = document.createElement("img");
		newSticker.src = stInp.value;
		newSticker.className = "stickers";
		document.getElementById("stickers").appendChild(newSticker);
		stInp.value = '';
		newSticker.addEventListener("click", function(){
			changeImage(this);
		});
	}
});

dispDiv.addEventListener("mousemove", function(ev){
	stC.style.top = ev.pageY+"px";
	stC.style.left = ev.pageX+"px";
});

function getHeight(){
	console.log(stHeight.value)
	var theKey = stHeight.value;
	return theKey;
		
	
}
