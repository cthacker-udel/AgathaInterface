import { AccountEntity } from "src/app/entities/account/Account.entity";

const creds = {

    "mongo": {

        "name": "mongo",
        "host": "localhost",
        "type": "mongodb",
        "url": "example-url",
        "entities": [AccountEntity]

    }

}

export default creds;