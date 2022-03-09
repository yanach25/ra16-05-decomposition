/** Блок погоды*/

function Weather(props) {
    if (!props) {
        return null;
    }

    const {data} = props;
    const {details} = data;
    const detailsEls = Object.keys(details).map((detail, index) => (
        <div key={index}>{details[detail].title}: {details[detail].temperature}</div>
    ))

    return (
        <div className="weather-wrapper">
            <img src={data.img} alt={data.img}/>
            <div>{data.temperature}</div>
            <div>
                {detailsEls}
            </div>
        </div>
    )
}

export default Weather;
