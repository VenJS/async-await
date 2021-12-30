import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
      alert("💣");
    });

    this.emit(Application.events.READY);
  }

  _loading = document.createElement('progress');
  async _load() { await fetch('https://swapi.boom.dev/api/planets').then(response=>response.json()).then(res=>res.results)};
  _create();
  _startLoading();
  _stopLoading();
}
