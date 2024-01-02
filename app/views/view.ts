export class View {

    protected elemento: HTMLAnchorElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);

    }
}