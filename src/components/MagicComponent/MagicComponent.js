import './MagicComponent.css';

/** Какой-то странный рекламный компонент, не могу описать, что это и зачем*/
function MagicComponent(props) {
    const {data} = props;
    if (!data) {
        return null;
    }

    return (
        <div className="magic-wrapper">
            <img src={data.img} alt={data.img}/>
            <a href={data.link}>{data.title}</a>
            <span>{data.description}</span>
        </div>
    )
}

export default MagicComponent;
