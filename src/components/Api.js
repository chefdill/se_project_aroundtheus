class Api {
    constructor(options) {
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
            return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}
}

loadInfo() {

    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
        method: "GET",
        avatar: 
        "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/moved_avatar.jpg",
        _id: "e20537ed11237f86bbb20ccb",
        cohort: "group-42",
        headers: {
            authorization: "9074552f-5489-49c7-bab8-7f6a130e519f",
        },
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    }

// editProfile(){

//     return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
//         method: "PATCH",
//         headers: {
//             authorization: "9074552f-5489-49c7-bab8-7f6a130e519f", 
//             "Content-type": "application/json",
//         }
//     })

//     }


