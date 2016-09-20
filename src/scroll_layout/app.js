//(()=>{

	const windowHeight = ()=> window.innerHeight
	const windowWidth = ()=> window.innerWidth
	const positions = {
		x: [],
		y: []
	}
	let totalLength = 0
	
	function removeBlur(){
		let blurred = document.getElementsByClassName('grid-item')
		for(let i=0; i<blurred.length; i++){
			removeClass(blurred[i], 'blur')
		}
	}

	function gridTemplate(){
		let chapterKeys = Object.keys(state.content.chapters) // get all chapter keys
		let everything = []
		let allParts = chapterKeys.map((chapter, index)=>{
			let partKeys = Object.keys(state.content.chapters[chapter].parts)
			partKeys.map(part=>{
				let content = {
					image: state.content.chapters[chapter].parts[part].image,
					chapter: chapter,
					part: part,
					index: index +1
				}
				everything.push(content)
			})
		})
		console.log('allParts', everything, everything.length)
		totalLength = everything.length
		
		let imageGrid = []
		let everythingLength = everything.length
		for(let i=0; i<everythingLength; i++){
			let item = randomNumber(0, everything.length-1)
			imageGrid.push(`
				<div id='grid_${i}' class="grid-item fade" 
					data-chapter='${everything[item].index}' 
					data-chapterName='${everything[item].chapter}' 
					data-part='${everything[item].part}'
					style="background-image: url('${state.image.path}${everything[item].image}')">
				</div>
			`)
			everything.splice(item, 1)	
		}
		return imageGrid.join('')

	}

	function chapterTemplate(){
		let chapterKeys = Object.keys(state.content.chapters)
		return chapterKeys.map((key, index)=>{
			let chapter = state.content.chapters[key]
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
		let content = state.content
		return `
			<section id="introContainer" style="height:${windowHeight()}px">
				<div>
					<h1>${content.headline}</h1>
					<hr class="white short">
					<h2>${content.intro}</h2>
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

	function activeContentTemplate(part){
		return `
			<div class="activeTileTitle">
				<h4>${part.title}</h4>
			</div>
		`
	}

	

	function highlightImage(num){
		let allChapterImages = document.getElementsByClassName(`grid-item`)
		/*console.log(
			'num', num,
			'allChapterImages', allChapterImages
		)*/
		let count = allChapterImages.length
		for(let i = 0; i<count; i++){
			//console.log(allChapterImages[i].getAttribute(`data-chapter`))
			let chapterNumber = allChapterImages[i].getAttribute(`data-chapter`)
			let chapter = allChapterImages[i].getAttribute(`data-chapterName`)
			let part = allChapterImages[i].getAttribute(`data-part`)
			if(chapterNumber == num ){
				allChapterImages[i].className = 'grid-item'
				allChapterImages[i].innerHTML = activeContentTemplate(state.content.chapters[chapter].parts[part]) 
			}

			
		}
	}

	function getPageDetails(){
		state.chapterCount = state.content.chapters.length;
		//state.articleHeight = document.getElementById('articleContainer').clientHeight;
	}
	
	function resetImages(){
		var allGridItems = document.getElementsByClassName('grid-item')
		const imagesPerRow = Math.ceil(Math.sqrt(totalLength))
		const numberOfRows = Math.ceil(Math.sqrt(totalLength))
		const imageWidth = windowWidth()/imagesPerRow
		const imageHeight = windowHeight()/numberOfRows
		//console.log('w', imageWidth, 'h', imageHeight)
		/*console.log('imagesPerRow', imagesPerRow,
			'\numberOfRows', numberOfRows)*/
		for (let currentRow = 0; currentRow<numberOfRows; currentRow++){
			for(let rowIndex = 0; rowIndex<imagesPerRow; rowIndex++){
				let imageToChange = (currentRow * imagesPerRow) + rowIndex
				if(imageToChange >= totalLength){
					return
				}
				allGridItems[imageToChange].style.width = `${imageWidth}px`
				allGridItems[imageToChange].style.height = `${imageHeight}px`
				allGridItems[imageToChange].style.top = `${currentRow * imageHeight }px`
				allGridItems[imageToChange].style.left = `${rowIndex * imageWidth}px`
				allGridItems[imageToChange].className = `grid-item fade blur`
				allGridItems[imageToChange].innerHTML = ''
				
			}
		}
	}




	function positionActiveImages(){
		let allImages = document.getElementsByClassName('grid-item');
		//console.log(allImages)
		let activeImages = []

		for(let i=0; i<allImages.length; i++){
			if( allImages[i].className != 'grid-item fade blur' ){
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
			activeImages[i].className = `grid-item activeImage float${randomNumber(1,2)}`
			activeImages[i].style.top = y[rY] + 'px'
			activeImages[i].style.left = x[rX] + 'px'
		}
		console.log('\n-----------------------\n')
	}


	function scrollEvents(){
		let scrollPosition = window.scrollY
		let currentChapter = Math.ceil((scrollPosition / state.articleHeight())  * Object.keys(state.content.chapters).length)
		console.log(state.content.previousChapter, currentChapter)
		//console.log('scroll pos', scrollPosition)
		//console.log('article height', state.articleHeight())
		//console.log('chapter count', state.chapterCount)
		if(currentChapter !== state.content.previousChapter){
			state.content.previousChapter = currentChapter;
			resetImages();
			highlightImage(currentChapter)
			positionActiveImages()
			//console.log(state.content.previousChapter, currentChapter);
		}
		if(currentChapter === 0){
			resetImages()
			removeBlur()
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
	//	setTileSize();
		resetImages();
		let currentChapter = Math.ceil((window.scrollY / state.articleHeight())  * Object.keys(state.content.chapters).length)
		if(currentChapter === 0){
			resetImages()
			removeBlur()
		}
		
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
				},
				chapter: event.target.getAttribute('data-chapterName'),
				part: event.target.getAttribute('data-part')

			}
			let part = state.content.chapters[properties.chapter].parts[properties.part]			
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
								<h2>${part.title}</h2>
								<p>Dummy text taken from first entry in state. ${part.text}</p>
							</div>
						</div>
						
					</div>
				`
			}
			console.log(popupCard());
			renderTemplate(popupCard(), document.getElementById('popupContainer'));

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

			event.target.style.display = 'none'
			Velocity(document.getElementById("popupImage"), { 
																left: '20%', 
																top: '20%',
																width: '60%',
																height: '60%',
																boxShadowBlur: 350,
															},
															{ 
																duration: 300,
																delay: 100
															});

				document.getElementById(tileId).style.display = ''
				document.getElementById('popupContainer').innerHTML = ''
			}, tileId)
		});


	}
	

	
	


	initPageLoad()


	


	


	
	
//})()