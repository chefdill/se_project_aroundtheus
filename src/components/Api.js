class Api {
  constructor(options) {
    // constructor body
    this._headers = options.headers;
    this.baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // other methods for working with the API

  loadInfo() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      cohort: "group-42",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editProfile(name, about) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  // pass name and link as argument
  addNewCard(data) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this.baseUrl + `/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({
        _id: cardId,
      }),
    }).then(this._checkResponse);
  }

  updateLike(cardId, isLiked) {
    return fetch(this.baseUrl + `/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._checkResponse);
  }
}

export default Api;