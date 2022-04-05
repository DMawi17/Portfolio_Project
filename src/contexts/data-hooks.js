import React, { createContext, useState, useContext } from "react";
import rowData from "../db.json";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { icon } from "@fortawesome/fontawesome-svg-core";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data] = useState(rowData);
    const { intro, about, skills, qualification, service, portfolio, contact } =
        data;

    // Icons:
    const icons = {
        angle_down: solid("angle-down"),
        code: solid("code"),
        paperPlane: solid("paper-plane"),
        download: solid("download"),
        arrowDwn: solid("arrow-down"),
        mouse: solid("computer-mouse"),
        education: solid("graduation-cap"),
        work: solid("briefcase"),
        cal: solid("calendar-week"),
        grid: solid("table-columns"),
        arrowRgt: solid("arrow-right"),
        check_circle: solid("check-circle"),
        close: solid("xmark"),
        angleRgt: solid("angle-right"),
        angleLft: solid("angle-left"),
        phone: solid("phone"),
        envelope: solid("envelope"),
        location: solid("location-dot"),

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

        qualificationBtn: [
            {
                name: "Education",
                icon: icons.education,
            },

            {
                name: "Work",
                icon: icons.work,
            },
        ],

        serviceBtn: {
            name: "View More",
            icon: icons.arrowRgt,
        },

        contactBtn: [
            { title: "Call Me", address: "+49 15168541398", icon: icons.phone },
            {
                title: "Email",
                address: "asegda17@gmail.com",
                icon: icons.envelope,
            },
            {
                title: "Address",
                address: "70771 Leinfelden-Echterdingen",
                icon: icons.location,
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
                service,
                portfolio,
                contact,
                icons,
                buttons,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
