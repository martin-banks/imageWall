//(()=>{

	const windowHeight = ()=> window.innerHeight
	const windowWidth = ()=> window.innerWidth

	const positions = {
		x: [],
		y: []
	}


	




	let totalLength = 0
	









/*
	let allPartKeys = chapterKeys.map((key, index)=> { // for each chapter
		chapterKeysIndexes.push(index) 
		let partKeys = Object.keys(state.content.chapters[key].parts) // add length of each chapters' parts to total
		totalLength += partKeys.length
		return partKeys // return all of it's part keys
	})


	console.log(
		'allPartKeys', allPartKeys,
		'\nchapterKeysIndexes', chapterKeysIndexes
		)
	console.log(totalLength)


*/
	function gridTemplate(){
		let chapterKeys = Object.keys(state.content.chapters) // get all chapter keys
		let everything = []
		let allParts = chapterKeys.map(chapter=>{
			let partKeys = Object.keys(state.content.chapters[chapter].parts)
			partKeys.map(part=>{
				let content = {
					parts: state.content.chapters[chapter].parts[part],
					chapter: chapter
				}
				everything.push(content)
			})
		})
		console.log('allParts', everything, everything.length)
		
		let imageGrid = []
		let everythingLength = everything.length
		for(let i=0; i<everythingLength; i++){
			let item = randomNumber(0, everything.length-1)
			console.log(item)
			imageGrid.push(`
				<div id='grid_${i}' class="grid-item fade" data-chapter='${everything[item].chapter}'
					style="background-image: url('${state.image.path}${everything[item].parts.image}')">
				</div>
			`)
			everything.splice(item, 1)	
		}
		console.log(imageGrid)

		return imageGrid.join('')
		

		/*
		for (let i=0; i<totalLength; i++){
			
			let randomChapterIndex = randomNumber(0, (chapterKeysIndexes.length))
			let randomChapterIndexValue = chapterKeysIndexes[randomChapterIndex]
				let randomChapter = allPartKeys[ randomChapterIndexValue ]
				let randomChapterKey = chapterKeys[ randomChapterIndexValue ]


			let randomChapterLength = randomChapter.length
				let randomPartIndex = randomNumber(0, (randomChapterLength))
				let randomPartKey = randomChapter[randomPartIndex]
			
			let randomPart = state.content.chapters[randomChapterKey].parts[randomPartKey]

			console.log(
				'\n\n\n', i,
				'\nrandomChapterIndex', randomChapterIndex,
				'\nrandomChapterIndexValue', randomChapterIndexValue,
				'\nrandomChapterKey', randomChapterKey,
				'\nchapterKeysIndexes', chapterKeysIndexes,
				'\nrandomChapter', randomChapter,
				'\nrandomChapterLength', randomChapterLength,
				'\nrandonPartIndex', randomPartIndex,
				'\nrandomPartKey', randomPartKey,
				'\nrandomPart', randomPart
				)
			console.log(
				'chapter', randomChapterKey,'\npart', randomPartKey, 
				'\nimage', randomPart.image
			)

			



			imageGrid.push(`
				<div id='grid_${i}' class="grid-item fade" data-chapter='${randomChapterKey}'
					style="background-image: url('${state.image.path}${randomPart.image}')">
				</div>
			`)

			// remove part chosen
			allPartKeys[randomChapterIndex].splice(randomPartIndex, 1)
			// remove chapter if empty
			if(allPartKeys[randomChapterIndex].length === 0){
				chapterKeysIndexes.splice(randomChapterIndex ,1)
			}


			allPartKeys.forEach(part=>{
				console.log('part', part)
			})
		

		}// for loop
*/		//return imageGrid.join('')
	}




	/*
	function gridTemplate(){
		let imageGrid = []
		for(let i = 0; i<state.content.chapters.length; i++){;
			let r = randomNumber(0,state.content.chapters.parts.length)
			//console.log(r)
			imageGrid.push(`
				<div id='grid_${i}' class="grid-item fade" data-chapter='${r+1}'
					style="background-image: url('${state.image.path}${state.content.chapters[r].image}')">
				</div>
			`)
		}
		return imageGrid.join('')
	}*/

	function setTileSize() {
		let tiles = document.getElementsByClassName('grid-item')
		console.log(tiles)
		for (let i = tiles.length - 1; i >= 0; i--) {
			//tiles[i].style.width = `${windowWidth()/9}px`
			//tiles[i].style.height = `${windowHeight()/5}px`
		}
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
		state.chapterCount = state.content.chapters.length;
		//state.articleHeight = document.getElementById('articleContainer').clientHeight;
	}
	
	function resetImages(){
		var allGridItems = document.getElementsByClassName('grid-item')
		//console.log(allGridItems)
		const imagesPerRow = 9
		const numberOfRows = 5
		const imageWidth = windowWidth()/imagesPerRow
		const imageHeight = windowHeight()/numberOfRows
		//console.log('w', imageWidth, 'h', imageHeight)
		//const currentRow = ()=> numberOfRows * i // 0 index
		for (let currentRow = 0; currentRow<numberOfRows; currentRow++){
			//console.log('current row', currentRow)
			for(let rowIndex = 0; rowIndex<imagesPerRow; rowIndex++){
				let imageToChange = (currentRow * imagesPerRow) + rowIndex
				//console.log('image to change', imageToChange)
				allGridItems[imageToChange].style.width = `${imageWidth}px`
				allGridItems[imageToChange].style.height = `${imageHeight}px`
				allGridItems[imageToChange].style.top = `${currentRow * imageHeight }px`
				allGridItems[imageToChange].style.left = `${rowIndex * imageWidth}px`
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
			activeImages[i].className = `grid-item activeImage float${randomNumber(1,2)}`
			activeImages[i].style.top = y[rY] + 'px'
			activeImages[i].style.left = x[rX] + 'px'
		}
		console.log('\n-----------------------\n')
	}


	function scrollEvents(){
		var scrollPosition = window.scrollY
		var currentChapter = Math.ceil((scrollPosition / state.articleHeight())  * Object.keys(state.content.chapters).length)
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
								<p>Dummy text taken from first entry in state. ${state.content.chapters[0].text}</p>
							</div>
						</div>
						
					</div>
				`
			}
			console.log(popupCard());
			renderTemplate(popupCard(), document.getElementById('popupContainer'));
//<<<<<<< HEAD
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
//=======
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