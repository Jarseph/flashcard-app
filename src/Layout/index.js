import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home";
import CreateDeck from "../Components/createDeck";
import Deck from "../Components/deck";
import Study from "../Components/study";
import EditDeck from "../Components/editDeck";
import CreateCard from "../Components/CreateCard";
import EditCard from "../Components/editCard";


function Layout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/decks/new">
                        <CreateDeck />
                    </Route>
                    <Route exact path="/decks/:deckId">
                        <Deck />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <EditDeck />
                    </Route>
                    <Route path="/decks/:deckId/cards/new">
                        <CreateCard />
                    </Route>
                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard />
                    </Route>
                    <NotFound />
                </Switch>
            </div>
        </div>
    );
}

export default Layout;

