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
import { useEffect } from "react";


export async function action() {
    const contact = await createContact();
    return redirect(`contacts/${contact.id}/edit`);
};

export async function loader({ request }) {
    // michael card will always exist
    await createMichaelCard();

    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
};


async function createMichaelCard() {
    // check local forage for micahel Id
    let michaelIdStorage = localStorage.getItem("michaelIdStorage");
    let michaelExists = await getContact(michaelIdStorage);

    // if null create card
    if(!michaelExists){
        console.log("creating card");
        const michaelContactCard = await createContact();
        const michaelInfo = {
            first: "Michael",
            last: "Kim",
            avatar: "https://placekitten.com/g/200/200",
            website: "www.linkedin.com/in/michaelkim3/",
            notes: "michael.dev.kim@gmail.com github.com/sparklinglemonwater",
            favorite: true,
        };
        await updateContact(michaelContactCard.id, michaelInfo);
        localStorage.setItem("michaelIdStorage", michaelContactCard.id);
    };
    return michaelExists;
}


export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q])


    useEffect(() => {
        createMichaelCard();
    }, [])

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