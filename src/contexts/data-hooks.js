import React, { createContext, useState, useContext } from "react";
import rowData from "../db.json";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data] = useState(rowData);
    const { intro, about, skills, qualification, portfolio, contact, footer } =
        data;

    const icons = {
        user: solid("user"),
        house: solid("house-chimney"),
        file: solid("file-alt"),
        img: solid("image"),
        x: solid("x"),
        bars: solid("bars-staggered"),

        angles_down: solid("angles-down"),
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
        scrollUp: solid("arrow-up"),

        fabLinkedIn: brands("linkedin-in"),
        fabGithub: brands("github-alt"),
        fabCodepen: brands("codepen"),
    };

    // Buttons:
    const buttons = {
        navBtn: [
            { name: "home", icon: icons.house },
            { name: "about", icon: icons.user },
            { name: "skills", icon: icons.file },
            { name: "portfolio", icon: icons.img },
            { name: "contact", icon: icons.paperPlane },
        ],

        introBtn: {
            name: "Contact Me",
            icon: icons.paperPlane,
        },

        scrollDwnBtn: {
            icons: {
                angles_down: icons.angles_down,
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
            { title: "Call Me", address: "+49 15168541398", icon: icons.phone, url: "images/phone.svg" },
            {
                title: "Email",
                address: "asegda17@gamil.com",
                icon: icons.envelope,
            },
            {
                title: "Address",
                address: "70771 Leinfelden-Echterdingen",
                icon: icons.location, url: "images/map.svg"
            },
        ],

        whoops404Btn: {
            name: "Back to our site",
            icon: icons.angleLft,
        },
    };

    return (
        <DataContext.Provider
            value={{
                intro,
                about,
                skills,
                qualification,
                portfolio,
                contact,
                footer,
                icons,
                buttons,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
