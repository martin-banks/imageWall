(()=>{

	var windowHeight = window.innerHeight
	var windowWidth = window.innerWidth
	

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


	delegate('article', 'click', '.exploreButton', ()=>{
		let allImages = document.getElementsByClassName('gridItem');
		console.log(allImages)
		let activeImages = []

		for(let i=0; i<allImages.length; i++){
			if( allImages[i].className != 'gridItem fade' ){
				activeImages.push(allImages[i]) 
			}
		}
		console.log(activeImages)

		
		function r(){
			console.log('generating positions')
			let num = windowWidth/5 * randomNumber(0, 5)
			for (let i = 0; i <= randomLeft.length; i++) {
				if ( num === randomLeft[i]){
					r()
					return
				} else {
					randomLeft.push(num)
					console.log(randomLeft.length, activeImages.length)
				}
				if( randomLeft.length !== activeImages.length){
					r()
				}
			}
		}
		//r()

		var randomLeft = [];
		var randomTop = [];

		function generate(arr){
			var num = Math.floor(windowWidth/5 * randomNumber(0, 5))
		
			for(let i = 0; i<=arr.length; i++){
				if (num === arr[i]){
					generate(arr)
					return
				} else {
					arr.push(num)
					console.log('number', arr, i, num)
					return
				}
			}	
		}

		for(let i=0; i<activeImages.length; i++){
			generate(randomLeft)
			generate(randomTop)

			activeImages[i].className = 'activeImage'
		}

		setTimeout(function() {
			for(let i=0; i<activeImages.length; i++){
				activeImages[i].style.top = randomTop[i] + 'px'
				activeImages[i].style.left = randomLeft[i] + 'px'
			}
		}, 3000);


	})
	
})()