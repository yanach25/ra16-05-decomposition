/** Табы с новостями*/
import {useState} from "react";
import './Tabs.css';

function Tabs(props) {
    const mockTabsContent = {
        russia: [
            {title: 'test1', icon: '1', link: 'test1'},
            {title: 'test2', icon: '2', link: 'test2'},
            {title: 'test3', icon: '3', link: 'test3'},
        ],
        world: [
            {title: 'test4', icon: '4', link: 'test4'},
            {title: 'test5', icon: '5', link: 'test5'},
            {title: 'test6', icon: '6', link: 'test6'},
        ],
        politics: [
            {title: 'test7', icon: '7', link: 'test7'},
            {title: 'test8', icon: '8', link: 'test8'},
            {title: 'test9', icon: '9', link: 'test9'},
        ],
    }

    const {active, tabs} = props;
    const [activeTab, setActive] = useState(active);
    const [news, setNews] = useState(mockTabsContent[tabs[active].type]);

    const tabsEls = tabs.map((item, index) => (
        <li className="tab" key={item.type}>
            <a href={item.type} className={`${activeTab === index ? 'active' : ''}`}
               onClick={(event) => onLinkClickHandler(event, index)}>{item.title}</a>
        </li>
    ))

    const onLinkClickHandler = (event, index) => {
        event.preventDefault();
        if (activeTab !== index) {
            setActive(index);
            setNews(mockTabsContent[tabs[index].type])
        }
    }

    const newsEls = news.map(item => (
        <div className="news" key={item.link}>
            <img src={item.link} alt="item.link"/>
            <a href={item.link}>{item.title}</a>
        </div>
    ))

    return (<div>
        <ul className="tabs">
            {tabsEls}
        </ul>
        <div className="tabsContent">
            {newsEls}
        </div>
    </div>);
}

export default Tabs;
