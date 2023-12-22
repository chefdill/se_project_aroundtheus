export class UserInfo {
    constructor(nameSelector, descriptionSelector) {
        this._nameEl = document.querySelector(nameSelector);
        this._descriptionEl = document.querySelector(descriptionSelector);

    }

    getUserInfo() {
        const userInfo = {
            name: this._nameEl.textContent,
            description: this._descriptionEl.textContent,
        };
        return userInfo;
    }

    setUserInfo(name, description) {
        this._nameEl.textContent = name;
        this._descriptionEl.textContent = description;
    }

}

export default UserInfo;