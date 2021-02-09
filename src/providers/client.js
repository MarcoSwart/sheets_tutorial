import React, { useState, createContext, useEffect } from "react";

export const ClientContext = createContext(null);

export function ClientProvider({ children }) {
    var CLIENT_ID = '374215012772-g9f3hhiqfelp662h12qjv20f9vd14dkt.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyDhFXX9Rg8G2EBeDUjeFhuPr3Z9AdjaNeI';
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    var SCOPES = 'https://www.googleapis.com/auth/drive';
    const [userSignedIn, setUserSignedIn] = useState(false);

    useEffect(() => {
        window.gapi.load('client:auth2', initClient);;
    }, []);

    useEffect(() => {
        console.log(userSignedIn);
    }, [userSignedIn]);

    function initClient() {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            // Listen for sign-in state changes.
            window.gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => setUserSignedIn(isSignedIn));
            // Handle the initial sign-in state.
            setUserSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function (error) {
            // appendPre(JSON.stringify(error, null, 2));
            console.log(error);
        });
    }

    function signIn(event) {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    function signOut(event) {
        window.gapi.auth2.getAuthInstance().signOut();
    }

    return (
        <ClientContext.Provider
            value={{
                // Actions
                signIn,
                signOut,

                //State
                userSignedIn,
            }}
        >
            {children || null}
        </ClientContext.Provider>
    );
}
