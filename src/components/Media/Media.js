import MediaItem from "./MediaItem";
import mediaTypes from "./media-types";

/** Wrapper для медиа блока*/
function Media() {
    const mockedMedia = [
        {
            description: 'test1',
            type: mediaTypes.WEATHER,
            data: {
                img: 'rain',
                temperature: 15,
                details: {
                    morning: {temperature: 10, title: 'утро'},
                    day: {temperature: 20, title: 'день'},
                    evening:{temperature: 7, title: 'вечер'},
                }
            }
        },
        {
            description: 'test2',
            type: mediaTypes.POPULAR,
            data: [
                {link: 'test', title: 'title', description: 'description'},
                {link: 'test1', title: 'title1', description: 'description1'},
            ]
        },
        {
            description: 'test3',
            type: mediaTypes.OTHER,
            data: 'Some text'
        },
        {
            description: 'test4',
            type: mediaTypes.TV,
            data: [
                {time: '05.00', name: 'tom and jerry', channel: 'first'},
                {time: '05.10', name: 'test', channel: 'second'},
            ]
        },
        {
            description: 'test5',
            type: mediaTypes.AIR,
            data: [
                {link: 'test', title: 'title', description: 'description'},
                {link: 'test1', title: 'title1', description: 'description1'},
            ]
        },
    ]

    return (mockedMedia.map((item) => <MediaItem key={item.description} data={item} />));
}

export default Media;
