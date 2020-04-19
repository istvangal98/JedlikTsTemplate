export default class Footgolf {
    private _nev: string;
    private _kategoria: string;
    private _egyesuletnev: string;
    private _pontok: number;

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._nev = m[0];
        this._kategoria = m[1];
        this._egyesuletnev = m[2];
        this._pontok = parseInt(m[3]);
    }
    public get nev(): string {
        return this._nev;
    }
    public get kategoria(): string {
        return this._kategoria;
    }
    public get egyesuletnev(): string {
        return this._egyesuletnev;
    }
    public get pontok(): number {
        return this._pontok;
    }
}
