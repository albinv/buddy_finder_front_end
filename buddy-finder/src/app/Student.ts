export interface Student {
    _id:                string,
    name:               string,
    email:              string,
    modules:            string[],
    date_registered:    string
}

export interface MongoDBInsertReturn {
    acknowledged:   boolean,
    insertedId:     string,
}