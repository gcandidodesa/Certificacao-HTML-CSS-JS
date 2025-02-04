let selectedPet = null;
pet1Element = document.getElementById("pet1");
pet2Element = document.getElementById("pet2");


class Pet{
  constructor(id){
    this.id = id;
    this.fedLevel = 100;
    this.fedElement = document.getElementById(`hunger${id}`);
    this.messageElement = document.getElementById(`message${id}`);
    this.displayElement = document.getElementById(`pet${id}`);
  }
  feed(amount){
    this.fedLevel += amount;
    if (this.fedLevel > 100) this.fedLevel = 100;
    this.fedElement.innerHTML = this.fedLevel;
  }
  decreaseFedLevel(){
    this.fedLevel -=10;
    if (this.fedLevel < 0) this.fedLevel = 0;
    this.fedElement.innerHTML = this.fedLevel;
    if (this.fedLevel === 0){
      this.messageElement.innerHTML = "Pet ran away";
      this.displayElement.style.opacity = 0.5;
    }
  }

}

const pet1 = new Pet(1);
const pet2 = new Pet(2);

function feedPet(amount){
  if (selectedPet === 1){
    pet1.feed(amount);
  } else {
    pet2.feed(amount);
  }
  }

function selectPet(id){
  pet1Element.classList.remove("selected");
  pet2Element.classList.remove("selected");
  selectedPet = id;

  if (id === 1){
    pet1Element.classList.add("selected");
  } else {
    pet2Element.classList.add("selected");
  }
}

  setInterval(() => {
    pet1.decreaseFedLevel();
    pet2.decreaseFedLevel();
  }, 5000);

selectPet (1);