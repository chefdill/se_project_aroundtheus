export class UserInfo {
    constructor(titleSelector, descriptionSelector, avatarSelector) {
        this._titleEl = document.querySelector(titleSelector);
        this._descriptionEl = document.querySelector(descriptionSelector);
        this._avatarEl = document.querySelector(avatarSelector);
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

    setAvatar(avatar) {
        this._avatarEl.src = avatar;
    }

}

export default UserInfo;