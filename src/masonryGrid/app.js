(()=>{

	var state = {
		count: 20,
		images:{
			path: '../images/',
			names: [
				'3x4.jpg',
				'16x9.jpg',
				'4x3.jpg'
			]
		},
		size: {
			regular: '',
			doubleHeight: 'grid-item--height2',
			doubleWidth: 'grid-item--width2'
		}	

	}


	const container = document.getElementById('appContainer')
	

	function generateTiles(){
		let sizes = Object.keys(state.size)
		var tiles = [];
		for (let i=0; i<state.count; i++){
			let size1 = randomNumber(0, sizes.length);
			let size2 = ()=>{
				let r = randomNumber(0, 2)
				return r === 1 ? randomNumber(0, sizes.length) : 0
			}
			let image = `${state.images.path}${state.images.names[randomNumber(0, state.images.names.length)]}`
			console.groupCollapsed('sizes:', size1, size2())
			let firstSize = sizes[size1];
			let secondSize = sizes[size2()];
			let extraSizes = `${state.size[firstSize]} ${state.size[secondSize]}`
			let newTile = `
				<div class="grid-item ${extraSizes}" style="background-image: url('${image}')"></div>
			`
			tiles.push(newTile)
		}
		return tiles.join('')
	}

	function gridTemplate(){
		return `
			<div class="grid">
				${generateTiles()}
			</div>
		`
	}

	
	renderTemplate(gridTemplate(), container)


	var msnry = new Masonry( '.grid', {
		columnWidth: 00,
		itemSelector: '.grid-item',
		fitWidth: true
	});



	delegate('.grid', 'click', '.grid-item', ()=>{
		let largeGrid = document.getElementsByClassName('largeGrid')
		for(let i=0; i<largeGrid.length; i++){
			largeGrid[i].className = 'grid-item'
			event.target.style.left = ''
			event.target.style.top = ''
		}
		

		event.target.className += ' largeGrid'
		//event.target.style.left = '0'
		//event.target.style.top = '0'
		msnry.layout();
		
	})



})()