"use strict";

class User {

    constructor(client) {
        this._client = client;
    }

    get() {
        return this._client.request(`/users/${this.id}`);
    }

    me() {
        return this._client.request(`/me`);
    }

}

export default User;