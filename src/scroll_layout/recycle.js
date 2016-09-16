
// social shating container
const social = document.querySelector('.section-social-wrapper')
// append to new location in the article


// work with as?
/*
//rhr m-rec
	#newscorpau_ads-4 .widget widget_newscorpau_ads
*/


let newLocation = // id/class of some DOM elem to append social to
let social = document.querySelector('.section-social-wrapper');

// might need a wrapper
let socialWrapper = `
	<div class="section-wrapper section-social-wrapper">
		${social}
	</div>`

document.querySelector(newLocation).innerHTML = social.innerHTML

/*
// elems on escape page to recycle
.tg-tlc-storymeta
	.tg-tlc-storymeta_author
	time.tg-tlc-storymeta_timestamp
*/	

div.tg-tlc-storybody // article content
	tg-tlc-storybody_intro



let articleElements = {
	body: {
		pars: []
	}
}


// store article content in new object.
// use this new object as content /state source to re-render page with custom template
// untested
let storyBodyContainer = document.querySelector('.tg-tlc-storybody').children
for(let i =0; i<storyBodyContainer.length; i++){
	let newElem = {
		text: storyBodyContainer[i].textContent,
		id: storyBodyContainer[i].id,
		class: storyBodyContainer[i].className,
	}
	articleElements.body.pars.push(newElem)
}
console.log(temp)

