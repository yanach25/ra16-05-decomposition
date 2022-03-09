import './Tv.css';

/** Блок телепередач*/
function Tv(props) {
    if (!props) {
        return null;
    }

    const {data} = props;

    const tvEls = data.map((item, index) => (
        <div key={index}>
            <span className="tv-item">{item.time}</span>
            <span className="tv-item">{item.name}</span>
            <span className="tv-item">{item.channel}</span>
        </div>
    ))

    return (
        <div>
            {tvEls}
        </div>
    );
}

export default Tv;
