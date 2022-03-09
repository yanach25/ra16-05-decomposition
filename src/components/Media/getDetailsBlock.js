import mediaTypes from "./media-types";
import Weather from "./DetailsComponents/Weather/Weather";
import Popular from "./DetailsComponents/Popular/Popular";
import Other from "./DetailsComponents/Other/Other";
import Tv from "./DetailsComponents/Tv/Tv";
import Air from "./DetailsComponents/Air/Air";

function getDetailsBlock(type, data) {
    if (!data) {
        return null;
    }

    switch (type) {
        case mediaTypes.WEATHER:
            return <Weather data={data}/>
        case mediaTypes.POPULAR:
            return <Popular data={data}/>
        case mediaTypes.OTHER:
            return <Other data={data} />
        case mediaTypes.TV:
            return <Tv data={data} />
        case mediaTypes.AIR:
            return <Air data={data} />
        default:
            return null;
    }
}

export default getDetailsBlock;
