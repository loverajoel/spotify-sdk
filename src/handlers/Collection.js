"user strict";

class Collection extends Array {

    constructor(list, entity) {
        super(Array);

        if(Array.isArray(list) && entity) {
            list.map(item => {
                this.push(new entity(item));
            }.bind(this));
        }
    }

    set type(data) {
        this._type = `${data}Collection`;
    }

    get type() {
        return this._type;
    }

    set extras(data) {
        this._extras = data;
    }

    get extras() {
        return this._extras;
    }
}

export default Collection;