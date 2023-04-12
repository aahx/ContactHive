import { getContacts, createContact, getContact, updateContact } from "../contacts";
import {
    Outlet,
    NavLink,
    useLoaderData,
    Form,
    redirect,
    useNavigation,
    useSubmit,
} from "react-router-dom";
import { useState, useEffect } from "react";


export async function action() {
    const contact = await createContact();
    return redirect(`contacts/${contact.id}/edit`);
};

export async function loader({ request }) {
    console.log("root loader running..")

    await getOrCreateMichaelCard();
    console.log("checking michael card");

    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    console.log("contacts", contacts);
    return { contacts, q };
};

async function getOrCreateMichaelCard() {
    let michaelId = localStorage.getItem("michaelId");
    console.log("michaelId from localstorage:", michaelId);

    let michaelExists = await getContact(michaelId);
    console.log("does michael exist?", michaelExists);

    if (!michaelExists) {
        console.log("creating card");
        const michaelContactCard = await createContact();
        const michaelInfo = {
            first: "Michael",
            last: "Kim",
            avatar: "https://placekitten.com/g/200/200",
            website: "www.linkedin.com/in/michaelkim3/",
            notes: "michael.dev.kim@gmail.com",
            favorite: true,
        };
        await updateContact(michaelContactCard.id, michaelInfo);
        console.log("michaelContactCard created", michaelContactCard);

        localStorage.setItem("michaelId", michaelContactCard.id);
        console.log("setting localstorage");
        console.log(localStorage.getItem("michaelId"));

        michaelExists = await getContact(michaelId);
    }
    console.log("return michaelExists");
    console.log(michaelExists);
    return michaelExists;
}















// let michaelId = "";
// console.log("michaelId", michaelId);

// async function checkMichael(){
//     const michaelExists = await getContact(michaelId);
//     console.log("? ----", michaelExists);

//     if(!michaelExists){
//         const michaelCreated = localStorage.getItem("michaelCreated");
//         console.log("!michaelExists pre");   
//         await createMichael();
//         console.log("!michaelExists post");
//     } else {
//         console.log("!michaelExists return");
//         return;
//     }
// };

// async function createMichael(){
//     const michaelCard = await createContact();
//     michaelId = michaelCard.id;
//     const michaelInfo = {
//         first: "Michael",
//         last: "Kim",
//         avatar: "https://placekitten.com/g/200/200",
//         website: "www.linkedin.com/in/michaelkim3/",
//         notes: "michael.dev.kim@gmail.com",
//         favorite: true,
//     };
//     await updateContact(michaelCard.id, michaelInfo);
// };



export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q])


    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? "loading" : ""}
                            aria-label="Aria Label Search Contacts"
                            placeholder="Placeholder Search Contacts"
                            type="search"
                            autoComplete="off"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                });
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>

                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div
                id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    )
};