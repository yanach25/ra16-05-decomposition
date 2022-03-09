import './Courses.css';

/** Курсы валют, нефти и прочих ништяков*/
function Courses(props) {
    const {data} = props;

    const coursesEls = data.map((item) => (
        <li key={item.title} className="courses-list">
            <span className="courses-title">{item.title}</span>
            <span className="courses-course">{item.course}</span>
            <span className="courses-diff">{item.diff}</span>
        </li>
    ))

    return (<ul className="courses">
        {coursesEls}
    </ul>);
}

export default Courses;
