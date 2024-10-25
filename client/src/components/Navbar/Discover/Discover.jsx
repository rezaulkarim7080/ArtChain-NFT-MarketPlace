import { Link } from "react-router-dom";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div
          key={i}
          className=" p-2 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300"
        >
          <a href={`/${el.link}`} className="block">
            {el.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Discover;
