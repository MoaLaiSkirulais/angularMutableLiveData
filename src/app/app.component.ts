import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../class/Animal.class';
import { MutableLiveData } from '../class/MutableLiveData.class';

@Component({
	selector: 'app-root',
	imports: [NgFor],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {

	animalA: MutableLiveData<Animal>;
	animalB: Animal;

	animalsA: MutableLiveData<Array<Animal>>;
	animalsB: Array<Animal>;

	constructor() {

		this.animalA = new MutableLiveData(Animal);
		this.animalB = new Animal();

		this.animalA.observe(() => { 
			this.animalB = this.animalA.getValue();
		});

		this.animalsA = new MutableLiveData(Array<Animal>);
		this.animalsB = new Array<Animal>();

		this.animalsA.observe(() => { 
			this.animalsB = this.animalsA.getValue();
		});		
	}

	changeAnimal() {

		var animal: Animal = this.animalA.getValue();
		animal.name = "Tim";
		animal.race = "Horse";
		animal.age = 25;
		this.animalA.postValue(animal);

		var animals : Array<Animal> = this.animalsA.getValue();
		animals.push(animal)
		this.animalsA.postValue(animals)
	}
}
