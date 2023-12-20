export class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._nameEl = document.querySelector(nameSelector);
        this._jobEl = document.querySelector(jobSelector);

    }

    getUserInfo() {
        const userInfo = {
            name: this._nameEl.textContent,
            job: this._jobEl.textContent,
        };
        return userInfo;
    }

    setUserInfo(name, job) {
        this._nameEl.textContent = name;
        this._jobEl.textContent = job;
    }

}

export default UserInfo;