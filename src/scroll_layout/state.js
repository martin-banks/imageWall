var state = {
		container: document.getElementById('appContainer'),
		count: 45,
		pageOffset: 400,
		rows: 6,
		columns: 6,
		image: {
			path: '../images/',
			name: ()=>`_${randomNumber(1,51)}.jpg`
		},
		articleHeight: ()=> document.getElementById('appContainer').getBoundingClientRect().height,
		content: {
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
							image: '10.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '11.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '12.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '13.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '14.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '15.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '16.jpg'
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
							image: '20.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '21.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '22.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '23.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '24.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '25.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '26.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '27.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '28.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '29.jpg'
						},
						part_j: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '30.jpg'
						},
						part_k: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '28.jpg'
						},
						part_l: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '29.jpg'
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
							image: '30.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '31.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '32.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '33.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '34.jpg'
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
							image: '40.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '41.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '42.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '43.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '44.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '45.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '46.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '47.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '48.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '49.jpg'
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
							image: '00.jpg'
						},
						part_b: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '01.jpg'
						},
						part_c: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '02.jpg'
						},
						part_d: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '03.jpg'
						},
						part_e: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '04.jpg'
						},
						part_f: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '05.jpg'
						},
						part_g: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '06.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '07.jpg'
						},
						part_h: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '08.jpg'
						},
						part_i: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '09.jpg'
						},
						part_j: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '03.jpg'
						},
						part_k: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '04.jpg'
						},
						part_l: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '05.jpg'
						},
						part_m: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '06.jpg'
						},
						part_n: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '07.jpg'
						},
						part_o: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '08.jpg'
						},
						part_p: {
							title: 'First article title',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit voluptatum labore incidunt ullam dolor in eaque debitis repudiandae expedita, quidem libero fuga, quos rem corrupti, vitae reiciendis. A, autem!',
							image: '09.jpg'
						}
					}
				}	
			}
		}
	}