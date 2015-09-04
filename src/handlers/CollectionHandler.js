"user strict";

import CollectionEntity from '../entities/CollectionEntity';

class CollectionHandler {

	constructor(items, handler, source) {
		var collection = new CollectionEntity();
		
		items.map((item) => {
			return collection.push(new handler().convert(item));
		});

		collection.type = collection[0].type;
		// collection.source = source; FIXME: review this
		return collection;
	}

}

export default CollectionHandler;