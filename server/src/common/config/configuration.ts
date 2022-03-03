import { readFile, readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join, resolve } from "path";
import creds from "config/development";

const ENV = "development";

export default () => {
    return creds as Record<string, any>;
}