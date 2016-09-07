//(()=>{

	var windowHeight = window.innerHeight
	var windowWidth = window.innerWidth

	function gridTemplate(){
		let imageGrid = []
		for(let i = 0; i<state.count; i++){
			imageGrid.push(`<div id='grid_${i}' class="gridItem fade" style="background-image: url('${state.image.path}${state.image.name()}')"></div>`)
		}
		return imageGrid.join('')
	}

	function chapterTemplate(){
		return state.article.chapters.map((chapter, index)=>{
			return `
				<section id='chapter${index}' class="chapter set_${chapter.align}" style="height:${windowHeight}px">
					<div>
						<h3><span>${index+1}</span></h3>
						<h3>${chapter.headline}</h3>
						<h5>${chapter.text}</h5>
						<div class="exploreButton">
							<h4>Explore<h4>
						</div>
					</div>
					
				</section>
			`
		}).join('')
	}

	function introTemplate(){
		let article = state.article
		return `
			<section id="introContainer" style="height:${windowHeight}px">
				<div>
					<h1>${article.headline}</h1>
					<hr class="white short">
					<h2>${article.intro}</h2>
				</div>		
			</section>
		`
	}


	function renderPage(){
		return `
			<section id="imageGridContainer">
				${gridTemplate()}
			</section>

			<section id="articleContainer">
				<article>
					${introTemplate()}
					${chapterTemplate()}
				</article>
			</section>
		`
	}

	function resetImages(){
		//resetPositions()
		var gridItems = document.getElementById('imageGridContainer').children
		for(let i=0; i<gridItems.length; i++){
			gridItems[i].className = 'gridItem fade';
			gridItems[i].style.top = '';
			gridItems[i].style.left = ''
		}
	}

	function highlightImage(count){
		for(let i = 0; i<count; i++){
			var randomImage = document.getElementById(`grid_${randomNumber(1, state.count)}`);
			randomImage.className = 'gridItem';
		}
	}

	function getPageDetails(){
		state.chapterCount = state.article.chapters.length;
		state.articleHeight = document.getElementById('articleContainer').clientHeight;
	}
	

	function scrollEvents(){
		var scrollPosition = window.scrollY - 500
		var currentChapter = Math.ceil((scrollPosition / state.articleHeight)  * state.chapterCount)
		if(currentChapter != state.article.previousChapter){
			state.article.previousChapter = currentChapter;
			resetImages();
			highlightImage(randomNumber(5,20))
			console.log(state.article.previousChapter, currentChapter);
		}
		if(currentChapter === 0){
			resetImages()
		}
	}


	// render page
	renderTemplate(renderPage(), state.container)
	getPageDetails();


	window.addEventListener("scroll", ()=> {
		scrollEvents()
	}, false);

	const positions = {
		x: [],
		y: []
	}

	generateActivePos = ()=>{
		for(let i = 0; i<6; i++){
			positions.x.push(Math.floor( windowWidth / 6) * i)
			positions.y.push(Math.floor( windowHeight / 6) * i)
		}
	}
	generateActivePos()
	

	function positionActiveImages(activeImages){
		let x = positions.x;
		let y = positions.y;
		for(let i=0; i<activeImages.length; i++){
			let rX = randomNumber(0, x.length);
			/*x = x.filter(val=>{
				return val !== x[rX]
			})*/
			let rY = randomNumber(0, y.length);
			/*y = y.filter(val=>{
				return val !== y[rY]
			})*/
			console.log('\tx', rX, 'y', rY)
			activeImages[i].className = 'activeImage'
			activeImages[i].style.top = y[rY] + 'px'
			activeImages[i].style.left = x[rX] + 'px'
		}
	}
	


	delegate('article', 'click', '.exploreButton', ()=>{
		let allImages = document.getElementsByClassName('gridItem');
		console.log(allImages)
		let activeImages = []

		for(let i=0; i<allImages.length; i++){
			if( allImages[i].className != 'gridItem fade' ){
				activeImages.push(allImages[i]) 
			}
		}
		console.log(activeImages);
		positionActiveImages(activeImages)
	});
	
//})()