
const SocialIcon = ({icon, href}) => {
    return (
        <>
            <a href={href}>
                <img src={icon} />
            </a>
        </>
    )
}

export default SocialIcon