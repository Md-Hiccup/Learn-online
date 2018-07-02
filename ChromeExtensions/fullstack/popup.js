function click(e){                  // 5. execute the script
    chrome.tabs.executeScript(null,
    { code: "document.body.style.backgroundImage = 'url(" + images[e.target.id]+ "'"}); // change the color to the color clicked
    window.close();                 // close all the popup window
}

document.addEventListener('DOMContentLoaded', function() {  // 1. when dom is completely loaded
    var divs = document.querySelectorAll('div');            // 2. find all divs
    for (var i=0; i< divs.length; i++){                     // 3. loop through all divs
        divs[i].addEventListener('click', click);           // 4. wait for a click
    }
});

var images = {
    joe1: 'https://picsum.photos/200/300/?image=882',
    joe2: 'https://picsum.photos/200/300/?image=885',
    joe3: 'https://picsum.photos/200/300/?image=886',
    joe4: 'white'
}
