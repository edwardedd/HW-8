const container = document.querySelector("#container");

class Notify{
	constructor(step, stepTime, lineWidth,btnContent){
		this.step = step;
		this.stepTime = stepTime;
		this.lineWidth = lineWidth;
		this.btnContent = btnContent;
		this.render();
	}

createLine(){
	this.line = document.createElement("div");
	this.line.classList.add("line");
	return this.line;
	this.changeName();
}

createBtn(){
	this.btn = document.createElement("button");
	this.btn.classList.add("button");
	this.btn.textContent = this.btnContent;
	
	this.btn.addEventListener("click", this.changeName.bind(this));
	return this.btn;
}

createCount(){
	this.count = document.createElement("div");
	this.count.classList.add("count");
	this.count.textContent = this.step;
	
	return this.count;
}

changeName(){
	if(this.btn.textContent==="start"){
		this.btn.textContent = "stop";
		this.lineDown();
		this.minusCount();
	}
	else if(this.btn.textContent === "stop"){
		this.btn.textContent = "start";
		this.stopNotify();
		this.stopCount();
	}
}

lineDown(){	
		const percent = this.width/this.step;
	this.interval = setInterval(() => {
	const currentWidth = this.line.offsetWidth;		
		if(currentWidth-percent < 0){
			this.stopNotify();
			return
		}		
		// debugger
		 
		this.line.style.width = `${currentWidth-percent}px`
	},this.stepTime)
}


stopNotify(){
	clearInterval(this.interval);
}

minusCount(){
	this.counter = setInterval(() =>{
		this.newCount = this.newCount-1;
		this.count.textContent = this.newCount;
		if (this.newCount === 0||this.newCount<0){
			this.stopCount();
				
			}
	},this.stepTime);
	return this.counter;
}

stopCount(){
	clearInterval(this.counter);
}
render(){
	this.notify = document.createElement("div");
	this.notify.classList.add("notify");	
	this.notify.append(this.createCount());
	this.notify.append(this.createBtn());
	this.notify.append(this.createLine());
	container.append(this.notify);
	this.width = this.line.offsetWidth;
	this.newCount = this.step;
	this.lineDown();
	this.changeName();

}



}
new Notify(10,1000,100,'stop')
new Notify(100,1000,100,'stop')