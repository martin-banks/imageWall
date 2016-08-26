(()=>{

	var windowHeight = window.innerHeight
	

	function gridTemplate(){
		let imageGrid = []
		for(let i = 0; i<state.count; i++){
			imageGrid.push(`<div id='grid_${i}' class="gridItem" style="background-image: url('${state.image.path}${state.image.name}')"></div>`)
		}
		return imageGrid.join('')
	}

	function articleOverlay(){

	}

	function chapterTemplate(){
		return state.article.chapters.map((chapter, index)=>{
			return `
				<section id='chapter${index}' class="chapter set${chapter.align}" style="height:${windowHeight}px">
					<h3>${chapter.headline}</h3>
					<p>${chapter.text}</p>
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





	// render page
	renderTemplate(renderPage(), state.container)

	
})()