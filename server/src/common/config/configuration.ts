import { readFile, readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join, resolve } from "path";

const ENV = "development";

export default () => {
    return yaml.load(
        readFileSync(resolve(__dirname, "../../../../config", `${ENV}.json`), 'utf-8')
    ) as Record<string, any>;
}