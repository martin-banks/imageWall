var state = {
		container: document.getElementById('appContainer'),
		count: 100,
		pageOffset: 200,
		image: {
			path: '../placeholder/',
			name: ()=>`_${randomNumber(1,51)}.jpg`
		},
		articleHeight: ()=> document.getElementById('appContainer').getBoundingClientRect().height,
		article: {
			headline: 'Lorem ipsum dolor',
			intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, vero!',
			previousChapter: 0,
			chapters: [
				{
					headline: 'Chapter A',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'A.png'
				},
				{
					headline: 'Chapter B',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'B.png'
				},
				{
					headline: 'Chapter C',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'C.png'
				},
				{
					headline: 'Chapter D',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'D.png'
				},
				{
					headline: 'Chapter E',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'E.png'
				},
				{
					headline: 'Chapter F',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: 'F.png'
				}
			]
		}
	
	}