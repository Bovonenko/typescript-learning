// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

type Animal = 'cat' | 'dog' | 'bird';

enum AnimalStatus {
	Available = 'available',
	NotAvailable = 'not available',
}

interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
}

interface AnimalAvailableData extends AnimalData {
	location: string;
	age?: number;
}

interface AnimalNotAvailableData {
	message: string;
	nextUpdateIn: Date;
}

interface Available {
	status: AnimalStatus.Available;
	data: AnimalAvailableData;
}

interface NotAvailable {
	status: AnimalStatus.NotAvailable;
	data: AnimalNotAvailableData;
}

type Res = Available | NotAvailable;

function isAvailable(res: Res): res is Available {
	return (res as Available).status === AnimalStatus.Available;
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
	if (isAvailable(animal)) {
		// Заменить условие!
		return animal.data;
	} else {
		return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
	}
}
