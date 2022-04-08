import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavList({ btn }) {
    return (
        <li className="nav_item">
            <a href={`#${btn.name}`} className="nav__link">
                <FontAwesomeIcon icon={btn.icon} className="nav__icon" />
                {btn.name[0].toUpperCase() + btn.name.slice(1)}
            </a>
        </li>
    );
}

export default NavList;
