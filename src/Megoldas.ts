import fs from "fs";
import Footgolf from "./Footgolf";

export default class Megoldas {
    private Footgolfok: Footgolf[] = [];

    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.Footgolfok.push(new Footgolf(aktSor));
            });
    }
    public get indulokszama(): number {
        let darab = 0;
        for (const i of this.Footgolfok) {
            darab++;
        }
        return darab;
    }
    public get Noiversenyzok(): number {
        let darab: number = 0;
        let eredmeny: number = 0;
        for (const i of this.Footgolfok) {
            if (i.nev == "Noi") {
                darab++;
            }
        }
        return darab;
    }
    public fajlbaIras(): void {
        const kiirsor: string[] = [];
        for (const i of this.Footgolfok) {
            kiirsor.push(`${i.nev} ${i.pontok}\n`);
        }
        fs.writeFileSync("osszpontFF.txt", kiirsor.join(""));
    }
}
