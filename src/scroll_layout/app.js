//(()=>{

	const windowHeight = ()=> window.innerHeight
	const windowWidth = ()=> window.innerWidth

	const positions = {
		x: [],
		y: []
	}




	let totalLength = 0
	let chapterkeys = Object.keys(state.article.chapers) // get all chapter keys
	
	let allPartKeys = chapterKeys.map(key=> { // for each chapter
		let partKeys = Object.keys(state.article.chapters[key]) // add length of each chapters' parts to total
		totalLength += partKeys.length
		return partKeys // return all of it's part keys
	})
	
//		should output
//		chapters [
//			[ a,b,c ... ],
//			[ a,b,c ... ],
//			...
//		]


	for (let i=0; i<=totalLength; i++){
		let chapterNumber = randomNumber(0, chapterKeys.length)
		let chapterKey = chapterKeys[chapterNumber]
		let randomChapter = state.article.chapters[ chapterKey ] // choose random chapter
		
		let partNumber = randomNumber(0, allPartKeys)
		let randomPart = randomChapter[ partNumber ] //choose random part from random chapter

//		----- render ----- 

		chapterKeys.filter((chapterKey, chapterIndex)=>{
			chapterKey.filter((part, partIndex)=>{
				return part !== randomPart
			})
			return chapterKey.length > 0
		})

//		filter part
//			return !part // remove this part from parts array
//		filter chapter
//			if chapter.part.length === 0 
	}

	


	
	function gridTemplate(){
		let imageGrid = []
		for(let i = 0; i<state.article.chapters.length; i++){;
			let r = randomNumber(0,state.article.chapters.parts.length)
			//console.log(r)
			imageGrid.push(`
				<div id='grid_${i}' class="grid-item fade" data-chapter='${r+1}'
					style="background-image: url('${state.image.path}${state.article.chapters[r].image}')">
				</div>
			`)
		}
		return imageGrid.join('')
	}

	function setTileSize() {
		let tiles = document.getElementsByClassName('grid-item')
		for (let i = tiles.length - 1; i >= 0; i--) {
			tiles[i].style.width = `${windowWidth()/10}px`
			tiles[i].style.height = `${windowHeight()/10}px`
		}
	}

	function chapterTemplate(){
		return state.article.chapters.map((chapter, index)=>{
			return `
				<section id='chapter${index}' class="chapter set_${chapter.align}" style="height:${windowHeight()}px">
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
			<section id="introContainer" style="height:${windowHeight()}px">
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
				<div id="masonryContainer" class ="grid">
					<div class='grid-sizer'></div>
					${gridTemplate()}
				</div>
			</section>

			<section id="articleContainer">
				<article>
					${introTemplate()}
					${chapterTemplate()}
				</article>
			</section>
			<section id="popupContainer"></section>
		`
	}

	

	function highlightImage(num){
		let allChapterImages = document.getElementsByClassName(`grid-item`)
		/*let activeImages = allChapterImages.filter((image)=>{
			return image.hasAttribute(`chapter${num}`)
		})*/
		console.log(num)
		let count = allChapterImages.length
		for(let i = 0; i<count; i++){
			//console.log(allChapterImages[i].getAttribute(`data-chapter`))
			if(allChapterImages[i].getAttribute(`data-chapter`) == num ){
				allChapterImages[i].className = 'grid-item'
			}
			//let randomImage = document.getElementById(`grid_${randomNumber(1, 99)}`);
			//randomImage.className = 'grid-item';
			
		}
	}

	function getPageDetails(){
		state.chapterCount = state.article.chapters.length;
		//state.articleHeight = document.getElementById('articleContainer').clientHeight;
	}
	
	function resetImages(){
		var allGridItems = document.getElementsByClassName('grid-item')

		const imagesPerRow = 10
		const numberOfRows = 10
		const imageWidth = 10
		const imageHeight = 10
		//const currentRow = ()=> numberOfRows * i // 0 index
		for (let currentRow = 0; currentRow<numberOfRows; currentRow++){
			//console.log('current row', currentRow)
			for(let rowIndex = 0; rowIndex<imagesPerRow; rowIndex++){
				let imageToChange = (currentRow * imagesPerRow) + rowIndex
				//console.log('image to change', imageToChange)
				allGridItems[imageToChange].style.top = `${rowIndex * imageWidth }%`
				allGridItems[imageToChange].style.left = `${currentRow * imageHeight}%`
				allGridItems[imageToChange].className = `grid-item fade`
			}
		}
	}




	function positionActiveImages(){
		let allImages = document.getElementsByClassName('grid-item');
		//console.log(allImages)
		let activeImages = []

		for(let i=0; i<allImages.length; i++){
			if( allImages[i].className != 'grid-item fade' ){
				activeImages.push(allImages[i]) 
			}
		}
		//console.log(activeImages);
		let x = positions.x;
		let y = positions.y;
		for(let i=0; i<activeImages.length; i++){
			let rX = randomNumber(0, x.length);
			let rY = randomNumber(0, y.length);

			console.log('\tx', rX, 'y', rY)
			activeImages[i].className = 'grid-item activeImage'
			activeImages[i].style.top = y[rY] + 'px'
			activeImages[i].style.left = x[rX] + 'px'
		}
		console.log('\n-----------------------\n')
	}


	function scrollEvents(){
		var scrollPosition = window.scrollY
		var currentChapter = Math.ceil((scrollPosition / state.articleHeight())  * state.chapterCount)
		console.log(state.article.previousChapter, currentChapter)
		//console.log('scroll pos', scrollPosition)
		//console.log('article height', state.articleHeight())
		//console.log('chapter count', state.chapterCount)
		if(currentChapter !== state.article.previousChapter){
			state.article.previousChapter = currentChapter;
			resetImages();
			highlightImage(currentChapter)
			positionActiveImages()
			//console.log(state.article.previousChapter, currentChapter);
		}
		if(currentChapter === 0){
			resetImages()
		}
	}

	generateActivePos = ()=>{
		for(let i = 0; i<8; i++){
			positions.x.push(Math.floor( windowWidth() / 8) * i)
			positions.y.push(Math.floor( windowHeight() / 8) * i)
		}
	}
	




	// render page
	function initPageLoad(){
		renderTemplate(renderPage(), state.container)
		getPageDetails();
		setTileSize();
		resetImages();
		
		generateActivePos();
		window.addEventListener("scroll", ()=> {
			scrollEvents();

		}, false);



		delegate('html', 'click', '.activeImage', ()=>{ // render popup card view
			document.querySelector('body').style.overflow = 'hidden'
			const properties = {
				pos: {
					y: event.target.getBoundingClientRect().top,
					x: event.target.getBoundingClientRect().left
				},
				id: event.target.id,
				img: event.target.style.backgroundImage,
				size: {
					w: event.target.style.width,
					h: event.target.style.height
				}
			}			
			let popupStyle = ()=>{
				return `
					width: ${properties.size.w};
					height: ${properties.size.h};
					left: ${properties.pos.x}px;
					top: ${properties.pos.y}px;
					background-image: ${properties.img}
				`
			}
			let popupCard = ()=>{
				return `
					<div id="popup">
						<div id="popupImage" class="popupImagePosition" style='${popupStyle()}'>
							<div class="popupText">
								<h2>${properties.id}</h2>
								<p>Dummy text taken from first entry in state. ${state.article.chapters[0].text}</p>
							</div>
						</div>
						
					</div>
				`
			}
			console.log(popupCard());
			renderTemplate(popupCard(), document.getElementById('popupContainer'));
			//event.target.style.display = 'none'
			let tileId = closest(event.target, '.grid-item').id;
			document.getElementById(tileId).style.display = 'none'
			Velocity(
				document.getElementById("popupImage"), 
				{ // store these values in variables
					left: '20%', 
					top: '20%',
					width: '60%',
					height: '60%',
					boxShadowBlur: 350,
				},
				{ 
					duration: 300,
					delay: 100,
				}
			);

			//////////////////////////////

			delegate('#popupContainer', 'click', '#popupImage', (e)=>{ // close panel
				document.querySelector('body').style.overflow = ''
				console.log('tile id ', tileId, e)
				// remove popup image
				console.log(properties.pos.x)
				// animate card closing
				/*Velocity(event.target, {
										left: 0,
										top: 0,
										width: '100px',
										height: '100px'
									}).then(()=>{
										document.getElementById('popupContainer').innerHTML = ''
									})*/
				document.getElementById(tileId).style.display = ''
				document.getElementById('popupContainer').innerHTML = ''
			}, tileId)
		});


	}
	

	
	


	initPageLoad()


	


	


	
	
//})()