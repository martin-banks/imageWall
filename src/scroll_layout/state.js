var state = {
		container: document.getElementById('appContainer'),
		count: 100,
		pageOffset: 200,
		image: {
			path: '../images/',
			name: ()=>`_${randomNumber(1,51)}.jpg`
		},
		articleHeight: ()=> document.getElementById('appContainer').getBoundingClientRect(),
		article: {
			headline: 'Lorem ipsum dolor',
			intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, vero!',
			previousChapter: 0,
			chapters: [
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				},
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				},
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				},
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				},
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				},
				{
					headline: 'Lorem ipsum dolor sit amet',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
				}
			]
		}
	
	}