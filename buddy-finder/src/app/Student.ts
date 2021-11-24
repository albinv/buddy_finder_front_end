export interface Student {
    _id:                string,
    name:               string,
    email:              string,
    modules:            string[],
    date_registered:    string
}


export class StudentClass {

    constructor(
        public name:               string,
        public email:              string,
        public modulesString:      string,
        public modules:            string[],
        public date_registered:    string
    ) {  }
}

export interface MongoDBInsertReturn {
    acknowledged:   boolean,
    insertedId:     string,
}