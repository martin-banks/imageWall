// Utility functions

function siblings(selector) {
	var element = document.querySelector(selector)
	var childElements = Array.from(element.parentNode.children)
	return childElements.filter(function(child) {
		return child !== element
	})
}

function closest(element, query) {
	while (!!element && element !== document) {
		if (element.matches(query)) {
			return element
		}
		element = element.parentNode
	}
	return null
}

function delegate(selector, eventName, targetSelector, listener) {
	document.querySelector(selector).addEventListener(eventName, function (event) {
		var closestMatch = closest(event.target, targetSelector)
		if (closestMatch) {
			event.delegateTarget = closestMatch
			listener(event)
		}
	})
}

function renderTemplate(content, into){
	into.innerHTML = content
}

var randomNumber = (low, high)=>{
	return (Math.floor(Math.random()*high)) + low
}


function addClass(elem, className){
	if (elem.classList) {
		elem.classList.add(className);
	} else {
		elem.className += ' ' + className;
	}
}

function removeClass(elem, className){
	if(!!elem){
		if (elem.classList) {
			elem.classList.remove(className);
		}
		else {
			elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

