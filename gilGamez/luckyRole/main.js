function sel(selector){
 return document.querySelector(selector);
}

function set(className,val){
	let obj = sel(className);
	obj.innerHTML = val;
}

function get(className, val){
	let obj = sel(className);
	return obj.innerHTML;
}

function doHere(counter){
	let html = "";
	counter = new Array(counter);
	let idx = 1;
	for(let obj of counter){
		let temp = '<i class="rounder-point no-'+ idx +'">'+ idx +'</i>';
		html = html.concat(temp);
		idx++;
	}
	set(".content", html);
}
function randomLight(temporary){
	let num = Math.random();
	let result = 1;
	if(String(num).slice(3,4) == '0'){
		result = 10;
	}else{
		result  = Number(String(num).slice(3,4))
	}
	//console.log(result)
	sel(".no-"+result).className += ' active';
	if(temporary){
		setTimeout(()=>{
			$(".no-"+result).removeClass('active');
		}, 300)
	}
}

function startRole(){
	clearActive();
	roleBtnV(false);
	let moment = setInterval(()=>{
		randomLight(true)
	}, 300);
	
	setTimeout(()=>{
		clearInterval(moment);
		setTimeout(()=>{
			randomLight(false);
			reRoleBtnV(true);
		}, 400)
	}, 300*20)
}

function clearActive(){
	let idx  = 1;
	for(let i of new Array(10)){
		$(".no-"+idx).removeClass('active');
		idx++;
	}
}

function startGame(){
	$('.menu').hide();
	$('.main-game').show(1000)
}

function roleBtnV(bool){
	$('.roleBtn').hide()
	if(bool){
		$('.roleBtn').show()
	}
}
function reRoleBtnV(bool){
	$('.reRoleBtn').hide()
	if(bool){
		$('.reRoleBtn').show()
	}
}

function reRole(){
	clearActive();
	roleBtnV(true);
	reRoleBtnV(false);
}


var comp = {
	dialog: {
		setDialog: function(head, value){
			set('.d-head', head);
			set('.d-value', value)
		}, 
		clearDialog: function(){
			set('.d-head', '');
			set('.d-value', '')
		},
		closeDialog: function(){
			$('.dialog').hide(500);
		}, 
		showDialog: function(){
			$('.dialog').show(1500);
		}
	}
}