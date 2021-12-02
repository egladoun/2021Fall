import React from "react";

export default function(){
    return(
    <section className="hero is-medium is-link">
        <div className="hero-body">
            <p className="title">
                Home Page
            </p>
            <p className="subtitle">
                {props.subtitle}
            </p>
        </div>
    </section>
    )
}