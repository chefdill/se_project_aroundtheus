export default class Api {
  constructor() {
    this._baseUrl = "https://around-api.en.tripleten-services.com/v1";
    this._headers = {
      authorization: "f00dbe4d-3bcf-40e3-a46f-9e1ed8206bd5",
      "Content-type": "application/json",
    };
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // 1 LOADING USER INFORMATION INTO THE SERVER
  // GET https://around-api.en.tripleten-services.com/v1/users/me 
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // 2 LOADING CARDS FROM THE SERVER
  // GET https://around-api.en.tripleten-services.com/v1/cards 
  // initial response will be an empty JSON array []
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // 3  EDITING THE PROFILE 
  //  PATCH https://around-api.en.tripleten-services.com/v1/users/me 
  // Add Content-type after the authorization token 
  // body: JSON.stringify ({NAME and ABOUT}) 
  getEditProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name, 
        about: about
      })
      
    }).then(this._checkResponse);
  }
  // 4 ADDING A NEW CARD
  // POST https://around-api.en.tripleten-services.com/v1/cards
  // body: JSON.stringify ({NAME and LINK})
  getNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify ({
        name: name,
        link: link
      })
    })

}

// 5 & 6 CREATING A NEW POPUP FOR DELETING A CARD
  // send DELETE request 
    // DELETE https://around-api.en.tripleten-services.com/v1/cards/cardId 
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkResponse);
    }

    changeAvatar(avatarUrl) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ avatarUrl: avatarUrl }),
      }).then(this._checkResponse);
    }

    updateLike(cardId, isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: isLiked ? "DELETE" : "PUT",
        headers: this._headers,
      }).then(this._checkResponse);
    }
  
    updateAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar,
        }),
      }).then(this._checkResponse);
    }



  }

