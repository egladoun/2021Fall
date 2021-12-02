import React from "react";
import { Route, Routes } from "react-router";
import Hero from "./views/Hero";


const About = ()=> <h1 className="title">Welcome to the About Page</h1>
const Home = ()=> <Hero title="Home Page" subtitle="The main page" />
const Feed = ()=> <Hero title="Feed Page" subtitle="The page with all your stuff" />
const Users = ()=> <Hero title="Users Page" subtitle="The list of users page" />



export default function OurRoutes(){
    return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
    </Routes>
    );
}