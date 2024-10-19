import Intro from './Intro'
import Carousel from './Carousel'
import Aboutme from './Aboutme'

const items = [
    { image: "./public/12.jpg", title: "Title 1" },
    { image: "./public/12.jpg", title: "Title 2" },
    { image: "./public/12.jpg", title: "Title 3" },
    { image: "./public/12.jpg", title: "Title 4" },
    { image: "./public/12.jpg", title: "Title 5" },
    { image: "./public/12.jpg", title: "Title 6" },
  ];

function Content() {
    return(
        <main>
            <Intro />
            <Carousel items={items} />
            <Aboutme />
        </main>
    );
}

export default Content;
