import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
    console.log({ title }, "?")
    return <Helmet>{title} | Instaclone</Helmet>;
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;