import EventEmitter from "./EventEmitter";

export default class SubcribleClick extends EventEmitter {
  constructor() {
    super();
    this.click();
  }

  click() {
    const subScribleBut = document.querySelector(".subscrible-but");
    if (subScribleBut) {
      subScribleBut.addEventListener("click", () => {
        this.trigger("onClick");
      });
    }
  }

}
