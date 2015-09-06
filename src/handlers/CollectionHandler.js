"user strict";

import Collection from '../helpers/Collection';

class CollectionHandler {

	constructor(items, handler, source) {
		var collection = new Collection(source);
		
		items.map((item) => {
			return collection.push(new handler().convert(item));
		});

		collection.type = collection[0].type;
		// collection.source = source; FIXME: review this
		return collection;
	}

}

export default CollectionHandler;