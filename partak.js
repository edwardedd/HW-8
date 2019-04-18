const container = document.querySelector("#timer");



class Notify{
		constructor(step, lineWidth, lineTime, nameButton){
		this.step = step;
		this.lineWidth = lineWidth;
		this.lineTime = lineTime;			
		this.nameButton = nameButton;
		this.render();
	}

	createCounter(){
		this.counter = document.createElement("div");
		this.counter.classList.add("count_text");
		this.counter.textContent = this.step;
		return this.counter;
	}



	createStart(){
		this.start = document.createElement("button");
		this.start.classList.add("button_first");
		this.start.textContent = this.nameButton;		
		this.start.addEventListener("click", this.pauseInterval.bind(this));
		return this.start;
	}

	createLine(){
		this.line = document.createElement("div");
		this.line.classList.add("line");
		
		this.firstTimer();
		return this.line;
	}


	minusCount(){
		this.count = setInterval(()=>{			
			this.newCount = this.newCount-1;
			this.counter.textContent = this.newCount;
			if (this.newCount === 0||this.newCount<0){
				this.pauseInterval;
				
			}
		},this.lineTime);
		// return this.count;
	}

	pauseInterval(){
		clearInterval(this.interval);	
		clearInterval(this.сount);	
		this.changeName();
	}

	startInterval(){
		this.firstTimer();
	}

	changeName(){
		if(this.start.textContent === 'start'){
			this.start.textContent = 'stop';
		}else if(this.start.textContent === 'stop')
		{this.start.textContent = 'start'};
	};


	firstTimer(){
		const width = this.line.offsetWidth;
		const edd = width/this.step;
		this.interval = setInterval(() =>{		
			const width = this.line.offsetWidth;			
			this.line.style.width = `${width-edd}px`;
		},this.lineTime);
	}
	render(){
		this.notify = document.createElement("div");
		this.notify.classList.add("notify");
		this.notify.append(this.createCounter());
		this.notify.append(this.createStart());
		this.notify.append(this.createLine());
		this.pauseInterval();
		this.minusCount();
		this.changeName();
		this.newCount = this.step;
		container.append(this.notify);
		this.firstTimer();
	}

}
  

 new Notify(10,100,1000,'Start')
 new Notify(100,100,1000,'Stop')


