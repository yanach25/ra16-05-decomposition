/** Блок наиболее посещаемого*/

function Other(props) {
    if (!props) {
        return null;
    }

    return (
        <div>
            {props.data}
        </div>
    );
}

export default Other;
