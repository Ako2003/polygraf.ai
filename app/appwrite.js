import { Client, Storage, ID } from "appwrite";

const client = new Client()

const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656b03c3df17900a5ad4');

const promise = storage.createFile(
    '656b05ace417a17086a3',
    ID.unique(),
    document.getElementById('uploader').files[0]
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

export default storage;
