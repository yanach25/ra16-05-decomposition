import './SearchBlock.css';

/** Поисковый блок*/
function SearchBlock() {
    const mockLinks = [
        {title: 'video', link: 'video'},
        {title: 'books', link: 'books'},
        {title: 'music', link: 'music'},
    ]

    const linksEls = mockLinks.map((item) => (
        <li key={item.link}><a className="search-link" href={item.link}>{item.title}</a></li>
    ))

    return (
        <div className="search-block">
            <div className="search-links">
                <ul>{linksEls}</ul>
            </div>
            <div className="search">
                <img className="logo" src="https://openclipart.org/image/800px/264237" alt="logo"/>
                <input />
                <button>Search</button>
            </div>
            <div>
                Найдется все, например <a href="#">Фаза луны сегодня</a>
            </div>
        </div>
    );
}

export default SearchBlock;
