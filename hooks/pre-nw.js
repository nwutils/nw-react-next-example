import { cp } from "fs/promises";

async function preNW () {
    await cp("package.nw.json", ".next/package.json");
}

preNW();
