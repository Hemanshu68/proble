import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { new_campus, old_campus, new_campus2 } from "../assets/Images";

const items = [
    {
        src: old_campus,
        altText: "Slide 1",
        header: "Current Campus",
        caption: "",
        key: "1",
    },
    {
        src: new_campus,
        altText: "Slide 2",
        header: "Upcoming Campus",
        caption: "",
        key: "2",
    },
    {
        src: new_campus2,
        altText: "Slide 3",
        header: "Upcoming Campus",
        caption: "",
        key: "3",
    },
];

const HomeCorosel = () => <UncontrolledCarousel items={items} />;

export default HomeCorosel;
