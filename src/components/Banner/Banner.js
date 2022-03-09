import './Banner.css';

function Banner(props) {
    const {img} = props;
    return (
        <img className="banner" src={img} alt={img} />
    )
}

Banner.defaultProps = {
    img: 'https://storage.mds.yandex.net/get-bstor/1957752/1ed92b8c-6f77-4d32-ae6e-c342d5e8cc06.jpeg',
}

export default Banner;
