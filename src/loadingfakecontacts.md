// import localforage from "localforage";
// import { getContacts } from "./contacts";


// export async function loader() {
//     console.log("fake loader");
//     await createFakeContacts();
//     const contacts = await getContacts();
//     return { contacts };
// };



// export async function createFakeContacts() {
//     console.log("running... multiple contacts");

//     // Define an array of contact objects with fake data
//     const contacts = [
//         { id: "aaaaaaa", createdAt: Date.now(), first: "John", last: "Doe", avatar: "https://placekitten.com/g/200/200?image=1", website: "linkedin.com/in/johndoe", number: "123-555-1234", notes: "Some notes", favorite: false },
//         { id: "bbbbbbb", createdAt: Date.now(), first: "Jane", last: "Doe", avatar: "https://placekitten.com/g/200/200?image=2", website: "linkedin.com/in/janedoe", number: "123-555-5678", notes: "Some notes", favorite: false },
//         { id: "ccccccc", createdAt: Date.now(), first: "Bob", last: "Smith", avatar: "https://placekitten.com/g/200/200?image=3", website: "linkedin.com/in/bobsmith", number: "123-555-9012", notes: "Some notes", favorite: false },
//         { id: "ddddddd", createdAt: Date.now(), first: "Sue", last: "Jones", avatar: "https://placekitten.com/g/200/200?image=4", website: "linkedin.com/in/suejones", number: "123-555-3456", notes: "Some notes", favorite: false },
//         { id: "eeeeeee", createdAt: Date.now(), first: "Mike", last: "Brown", avatar: "https://placekitten.com/g/200/200?image=5", website: "linkedin.com/in/mikebrown", number: "123-555-7890", notes: "Some notes", favorite: false },
//         { id: "fffffff", createdAt: Date.now(), first: "Karen", last: "Davis", avatar: "https://placekitten.com/g/200/200?image=6", website: "linkedin.com/in/karendavis", number: "123-555-2345", notes: "Some notes", favorite: false },
//         { id: "ggggggg", createdAt: Date.now(), first: "Tom", last: "Wilson", avatar: "https://placekitten.com/g/200/200?image=7", website: "linkedin.com/in/tomwilson", number: "123-555-6789", notes: "Some notes", favorite: false },
//         { id: "hhhhhhh", createdAt: Date.now(), first: "Amy", last: "Lee", avatar: "https://placekitten.com/g/200/200?image=8", website: "linkedin.com/in/amylee", number: "123-555-0123", notes: "Some notes", favorite: false },
//         { id: "iiiiiii", createdAt: Date.now(), first: "David", last: "Nguyen", avatar: "https://placekitten.com/g/200/200?image=9", website: "linkedin.com/in/davidnguyen", number: "123-555-4567", notes: "Some notes", favorite: false },
//         { id: "jjjjjjj", createdAt: Date.now(), first: "Lisa", last: "Kim", avatar: "https://placekitten.com/g/200/200?image=10", website: "linkedin.com/in/lisakim", number: "123-555-8901", notes: "Some notes", favorite: false }
//     ];

//     await localforage.setItem("contacts", contacts);
// };



<!-- export default function LoadFakeContactsButton() {
    return (
        <div>
        </div>
    )
}; -->