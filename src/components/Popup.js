export default class Popup {
    constructor({ popupSelector })  {
    this._popupElement = document.querySelector(popupSelector);
    } 
    
    open() {
        //open popups
        this._popupElement.classList.add("modal_opened");
        document.addEventListener("keydown", this._handleEscClose);
        }
        
    close() {
        //close popups
            this._popupElement.classList.remove("modal_opened");
            document.removeEventListener("keydown", this._handleEscClose);
        }
        
    _handleEscClose = (e) => {
        //listens for esc button
          if (e.key === "Escape") {
            this.close();
          }      
        };

    setEventListeners(){
        //sets listeners
        this._popupElement.addEventListener("click", (evt) => {
            if(
                evt.target === this._popupElement || evt.target.classList.contains("modal__close")
            ) {
                this.close();
            }
        });
        }
}

