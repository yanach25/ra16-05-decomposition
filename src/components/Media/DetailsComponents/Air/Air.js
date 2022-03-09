import './Air.css';

/** Блок в эфире*/
function Air(props) {
    if (!props) {
        return null;
    }

    const {data} = props;
    console.log(data);

    const els = data.map((item, index) => (
        <a href={item.link} key={index}>
            <img src="#" alt="play" className="air-item"/>
            <span className="air-item">{item.title}</span>
            <span className="air-item">{item.description}</span>
        </a>
    ))

    return (
        <div>
            {els}
        </div>
    );
}

export default Air;
