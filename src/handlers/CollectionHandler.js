"user strict";

import CollectionEntity from '../entities/CollectionEntity';

class CollectionHandler {

	constructor(items, handler) {
		var collection = new CollectionEntity();
		
		items.map((item) => {
			return collection.push(new handler().convert(item));
		});

		collection.type = collection[0].type;
		return collection;
	}

}

export default CollectionHandler;