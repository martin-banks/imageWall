(()=>{
	var state = {
		count: 20,
		images:{
			path: '../images',
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
	var randomNumber = (low, high)=>{
		return (Math.floor(Math.random()*high)) + low
	}

	function generateTiles(){
		let sizes = Object.keys(state.size)
		var tiles = [];
		for (let i=0; i<state.count; i++){
			let size1 = randomNumber(0, sizes.length);
			let size2 = ()=>{
				let r = randomNumber(0, 2)
				return r === 1 ? randomNumber(0, sizes.length) : 0
			}
			console.groupCollapsed('sizes:', size1, size2())
			let firstSize = sizes[size1];
			let secondSize = sizes[size2()];
			let newTile = `<div class="grid-item ${state.size[firstSize]} "></div>`
			tiles.push(newTile)
		}
		return tiles.join('')
	}

	function gridTemplate(){
		return `
			<div class="grid">
				<div class="grid-sizer"></div>
				${generateTiles()}
			</div>
		`
	}

	function renderTemplate(content, into){
		into.innerHTML = content
	}
	
	renderTemplate(gridTemplate(), container)


	var msnry = new Masonry( '.grid', {
		columnWidth: 0,
		itemSelector: '.grid-item'
	});

})()