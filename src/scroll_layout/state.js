var state = {
		container: document.getElementById('appContainer'),
		count: 100,
		pageOffset: 200,
		image: {
			path: '../images/',
			name: ()=>`_${randomNumber(1,51)}.jpg`
		},
		articleHeight: ()=> document.getElementById('appContainer').getBoundingClientRect().height,
		article: {
			headline: 'Lorem ipsum dolor',
			intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, vero!',
			previousChapter: 0,
			chapters: {
				chapter_a: {
					headline: 'Chapter A',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: '1.jpg',
					parts: {
						part_a: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '1.jpg'
						}
					}
				},
				chapter_b: {
					headline: 'Chapter B',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: '2.jpg',
					parts: {
						part_a: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '2.jpg'
						}
					}
				},
				chapter_c: {
					headline: 'Chapter C',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: '3.jpg',
					parts: {
						part_a: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '3.jpg'
						}
					}
				},
				chapter_d: {
					headline: 'Chapter D',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: '4.jpg',
					parts: {
						part_a: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '4.jpg'
						}
					}
				},
				chapter_e: {
					headline: 'Chapter E',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
					align: 'center',
					image: '5.jpg',
					parts: {
						part_a: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '5.jpg'
						}
					}
				}	
			}
		}
	}