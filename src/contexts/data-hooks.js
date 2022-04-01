import React, { createContext, useState, useContext } from "react";
import rowData from "../db.json";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data] = useState(rowData);
    const [toggleOpen, setToggleOpen] = useState(false);

    // Skills and Qualification:

    const { intro, about, skills, qualification } = data;

    // Toggle function for SkillContent:

    const handleToggle = (e) => {
        setToggleOpen(!toggleOpen);
    };

    // Icons:

    const icons = {
        angle_down: solid("angle-down"),
        code: solid("code"),
        paperPlane: solid("paper-plane"),
        download: solid("download"),
        arrowDwn: solid("arrow-down"),
        mouse: solid("computer-mouse"),

        fabLinkedIn: brands("linkedin-in"),
        fabGithub: brands("github-alt"),
        fabCodepen: brands("codepen"),
    };

    // Buttons:

    const buttons = {
        introBtn: {
            name: "Contact Me",
            icon: icons.paperPlane,
        },

        scrollDwnBtn: {
            name: "Scroll down",
            icons: {
                mouse: icons.mouse,
                arrowDwn: icons.arrowDwn,
            },
        },

        aboutBtn: {
            name: "Download CV",
            icon: icons.download,
        },

        socialBtn: [
            {
                url: intro.socials.LinkedIn,
                icon: icons.fabLinkedIn,
            },

            {
                url: intro.socials.Github,
                icon: icons.fabGithub,
            },

            {
                url: intro.socials.Codepen,
                icon: icons.fabCodepen,
            },
        ],
    };

    /* ...................................................................... */

    return (
        <DataContext.Provider
            value={{
                intro,
                about,
                skills,
                qualification,
                handleToggle,
                toggleOpen,
                icons,
                buttons,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
