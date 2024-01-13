class Api {
    constructor(options) {
      // constructor body
      this._header = options._headers;
    }
  
    getInitialCards() {
      return fetch("https://around-api.en.tripleten-services.com/v1", {
        headers: {
            authorization: "9074552f-5489-49c7-bab8-7f6a130e519f"
        }
      })
      .then(res => {
        if (res.ok) {
            return res.json();// ...
    }
    return Promise.reject(`Error: ${res.status}`);
    // other methods for working with the API
  });
}
}


//   {"user":
//     {"name":"Jacques Cousteau",
//   "about":"Sailor, researcher",
//   "avatar":"https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
//   "_id":"02f66c87141a521c2f243ec4"
//     },
//   "token":"836b8479-9e90-454e-94f6-1e85f7ca3e2f"
//   }