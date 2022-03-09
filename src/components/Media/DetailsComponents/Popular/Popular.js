/** Блок наиболее посещаемого*/

function Popular(props) {
    if (!props) {
        return null;
    }

    const {data} = props;

    const popularEls = data.map((item, index) => (
        <div key={index}><a href={item.link}>{item.title}</a> - {item.description}</div>
    ))

    return (
        <div>
            {popularEls}
        </div>
    );
}

export default Popular;
