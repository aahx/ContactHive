import { getContacts, createContact, updateContact } from "../contacts";
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
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
};



export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q])

    // const [michaelExists, setMichaelExists] = useState(false);
    // useEffect(() => {
    //     async function createMichael(){
    //         if(!michaelExists){
    //             console.log("run once")
    //             const michaelContactCard = await createContact();
    //             console.log("my contact card");
    //             console.log(michaelContactCard);
    //             console.log("and ID");
    //             console.log(michaelContactCard.id);

    //             const michaelInfo = {
    //                 first: "Michael",
    //                 last: "Kim",
    //                 avatar: "https://placekitten.com/g/200/200",
    //                 website: "michael.dev.kim@gmail.com",
    //                 notes: "website.com/in/michaelkim3",
    //                 favorite: true,
    //             };
    //             await updateContact(michaelContactCard.id, michaelInfo);
    //             setMichaelExists(true);
    //         };
    //     };
    //     console.log("true?", michaelExists)
    //     createMichael();
    // },[])

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