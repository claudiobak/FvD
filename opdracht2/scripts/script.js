/* 1. zoek de 4 radio buttons op en sla die op in een variabele */
// document.querySelector

var filterAll = document.querySelector("#filter-all");
var filterPeople = document.querySelector("#filter-people");
var filterAnimals = document.querySelector("#filter-animals");
var filterItems = document.querySelector("#filter-items");

/* 2. laat de radio buttons luisteren naar wijzigingen */
// addEventListener
// roep dan steeds dezelfde functie aan

filterAll.addEventListener("change", filterenMaar);
filterPeople.addEventListener("change", filterenMaar);
filterAnimals.addEventListener("change", filterenMaar);
filterItems.addEventListener("change", filterenMaar);

/* 3. maak die functie aan */
// zoek de ul op en stop die in een variabele
// sla de value van de gekozen radio button op in een variabele --> event.target.value
// verwijder de huidige class van de ul --> deLijst.className = "";
// voeg de de nieuwe value als class toe aan de ul --> gebruik daarvoor de variabele van 2 regels omhoog

function filterenMaar(event) {
  let hetNieuweFilter = event.target.value;
  
  let deLijst = document.querySelector("#mainlist");
  
  // oude class weghalen - ik weet alleen niet welke van de 4 - daarom allemaal
  deLijst.classList.remove("all");
  deLijst.classList.remove("people");
  deLijst.classList.remove("animals");
  deLijst.classList.remove("items");
  
  // nieuwe class toevoegen
  deLijst.classList.add(hetNieuweFilter);
  
}


/* de opties om het zoeken te initialiseren */
var options = {
  // de classes van de h2's en p's (daarin gaat gezocht worden naar matches)
  valueNames: [ 'name', 'movie' ]
};

/* het daadwerkelijk initialiseren van het zoeken */
// theList - de ID van de main
// options - hierboven gedefinieerd
var charactersList = new List('theList', options);



/************************/
/* CODE VOOR DE HARTJES */
/************************/

/* alle button met class 'wish' in de HTML opzoeken */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met buttons (een array) in de variabele 'hearts' opslaan */
var hearts = document.querySelectorAll("button.wish");

/* elke button laten luisteren naar een klik */
/* na een klik de functie 'toggleLove' uitvoeren */
for (i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", addToFavorites);
}

/* liefde declareren of liefde wegnemen */
function addToFavorites(event) {
  /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  var clickedHeart = event.target;
  let li = event.target.closest("li");
  let movieId = li.id;
  const movieFromFavs = document.querySelector(`#favlistitems #${movieId}`);

  console.log(movieFromFavs);

  /* als het hartje gebroken is */
  if (clickedHeart.innerHTML == "♡") {
    /* het lege hartje vervangen door het hele hartje */
    clickedHeart.innerHTML = "&#10084;";
    
    /* het aria-label wijzigen van toevoegen naar verwijderen */
    clickedHeart.setAttribute("aria-label", "Remove from Favorites");
    
    /* en dan de functie aanroepen om de wishlist aan te passen */
    /* in dit geval moet er liefde bij */
    /* vandaar 'plus' */
    updateWishlist("plus");




    	// en daarna article toevoegen aan ul
	// een kopie maken van het article
  let liLiked = event.target.closest("li");
	let liClone = liLiked.cloneNode(true);

  let liCloneHartje = liClone.querySelector("button.wish");

  liCloneHartje.addEventListener('click', removeFromWishlist);

	
	
	// de li aan de ul toevoegen
	theList.appendChild(liClone);

  }
  /* als het hartje heel is */
  else {
    /* het hele hartje vervangen door het lege hartje */
    clickedHeart.innerHTML = "♡";
    if(movieFromFavs){
      movieFromFavs.remove();
    }
    /* het aria-label wijzigen van verwijderen naar toevoegen */
    clickedHeart.setAttribute("aria-label", "Add to Favorites");
    
    /* en dan de functie aanroepen om de love-list aan te passen */
    /* in dit geval moet er liefde af */
    /* vandaar 'min' */
    updateWishlist("min");
  }
}




function removeFromWishlist(event){
  console.log(event.target)
  let li = event.target.closest("li");
  li.remove();
  var clickedHeart = event.target;
  let movieId = li.id;
  const movieFromList = document.getElementById(movieId);
  const heart = movieFromList.querySelector('button');
  console.log(movieFromList);
  
  
  if (clickedHeart.innerHTML == "♡") {
    /* het lege hartje vervangen door het hele hartje */
    clickedHeart.innerHTML = "&#10084;";
    heart.innerHTML = "&#10084;";
    
    /* het aria-label wijzigen van toevoegen naar verwijderen */
    clickedHeart.setAttribute("aria-label", "Remove from Favorites");
    
    /* en dan de functie aanroepen om de wishlist aan te passen */
    /* in dit geval moet er liefde bij */
    /* vandaar 'plus' */
    updateWishlist("plus");
  }
  else{
    
    // voeg hier toe dat nummers naast hartje verwijderd worden na klikken op hartje in wishlist
    
    /* het hartje vervangen door het gebroken hartje */
    heart.innerHTML = "♡";
     clickedHeart.innerHTML = "♡";
    
    
     /* het aria-label wijzigen van verwijderen naar toevoegen */
     clickedHeart.setAttribute("aria-label", "Add to Favorites");
     
     /* en dan de functie aanroepen om de love-list aan te passen */
     /* in dit geval moet er liefde af */
     /* vandaar 'min' */
     updateWishlist("min");
  }
  
}



/* de Wishlist in de nav in de header updaten */
/* de action die meegegeven wordt, is "plus" of "min" */
function updateWishlist(action) {
  /* het getal (de span) in de Wishlist-link in de nav opzoeken */
  /* die span in de variabele 'loveListAmount' opslaan */
  let wishlist = document.querySelector(".wishlist");
  let wishlistAmount = wishlist.querySelector("span");
  
  /* het huidige aantal gele hartjes bepalen */
  let currentAmount = wishlistAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* het nieuwe aantal gele hartjes bepalen */
  /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
  let newAmount;
  
  /* als er liefde bij moet */
  if (action == "plus") {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount + 1;
    
    if (newAmount == 1) {
      wishlistAmount.classList.add("positive");
    }
  }
  
  /* als er liefde af moet */
  else {
    /* het nieuwe aantal gele hartjes berekenen */
    newAmount = currentAmount - 1;
    
    if (newAmount == 0) {
      wishlistAmount.classList.remove("positive");
    }
  }
  
  /* tenslotte het nieuwe aantal in de HTML zetten */
  wishlistAmount.innerHTML = newAmount;
  
  /* de class updated wordt toegevoegd aan de wishlist-link */
  /* met CSS wordt dan een animatie geactiveerd */
  wishlist.classList.add("updated");
  
  /* om de animatie bij een volgende klik op een hartje weer af te spelen moet de class weer verwijderd worden als de animatie klaar is */
  /* dat kun je doen met het animationend event */
  /* dat event gaat af als de animatie klaar is met afspelen */
  /* je kunt de wishlist-link laten luisteren naar het einde van de animatie */
  wishlist.addEventListener("animationend", function(event){
    /* dan kun je in de functie de class updated weer verwijderen */
    wishlist.classList.remove("updated");
  }, { once: true });
  
}


// wishlist openen

const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const menu = document.querySelector('#favlist');

openButton.addEventListener('click', (event) => {
	// console.log(event.target.nextElementSibling);
	menu.classList.add('is-open')
	// event.target.nextElementSibling.classList.add('is-open')
} );
									 
closeButton.addEventListener('click', (event) => {
	menu.classList.remove('is-open')
	// event.target.nextElementSibling.classList.remove('is-open')

});











// add items to favoritelist ul
const theArticle = document.querySelector('button.wish');
const theList = document.querySelector('#favlistitems');

	
	// en daarna article toevoegen aan ul
	// een kopie maken van het article
	let articleClone = event.target.cloneNode(true);
	
	// een li maken
	let newLi = document.createElement("li");
	
	// de kopie in de li stoppen
	newLi.appendChild(articleClone);
	
	// de li aan de ul toevoegen
	theList.appendChild(newLi);
