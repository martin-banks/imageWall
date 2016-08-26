(()=>{

	var windowHeight = window.innerHeight
	

	function gridTemplate(){
		let imageGrid = []
		for(let i = 0; i<state.count; i++){
			imageGrid.push(`<div id='grid_${i}' class="gridItem fade" style="background-image: url('${state.image.path}${state.image.name}')"></div>`)
		}
		return imageGrid.join('')
	}

	function articleOverlay(){

	}

	function chapterTemplate(){
		return state.article.chapters.map((chapter, index)=>{
			return `
				<section id='chapter${index}' class="chapter set_${chapter.align}" style="height:${windowHeight}px">
					<div>
						<h3><span>${index+1}</span></h3>
						<h3>${chapter.headline}</h3>
						<h5>${chapter.text}</h5>
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
		var gridItems = document.getElementsByClassName('gridItem')
			for(let i=0; i<gridItems.length; i++){
				gridItems[i].className = 'gridItem fade';
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

	window.addEventListener("scroll", function () {
		scrollEvents()
	}, false);
	
})()