export class UserInfo {
    constructor(titleSelector, descriptionSelector) {
        this._titleEl = document.querySelector(titleSelector);
        this._descriptionEl = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        const userInfo = {
            title: this._titleEl.textContent,
            description: this._descriptionEl.textContent,
        };
        return userInfo;
    }

    setUserInfo(title, description) {
        this._titleEl.textContent = title;
        this._descriptionEl.textContent = description;
    }

}

export default UserInfo;