import './MediaItem.css';
import getDetailsBlock from "./getDetailsBlock";

/** Wrapper для отдельного элемента в медиа блоке*/
function MediaItem(props) {
    const {data} = props;
    let detailsBlock = getDetailsBlock(data.type, data.data)

    return (
        <div className="media-item">
            <div className="media-item__description">
                {data.description}
            </div>
            {detailsBlock}
        </div>
    );
}

export default MediaItem;
