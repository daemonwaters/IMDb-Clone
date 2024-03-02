import { MdLocalMovies } from "react-icons/md";
import { MdOutlineMonitor } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { IoPlayCircle } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";

const menuListData = [
  {
    heading: "Movies",
    icon: MdLocalMovies,
    list: [
      "release calendar",
      "top 250 movies",
      "most popular movies",
      "browse movies by genre",
      "top box office",
      "showtime & tickets",
      "movie news",
      "india movie spotlight",
    ],
    id: 1,
  },
  {
    heading: "TV Shows",
    icon: MdOutlineMonitor,
    list: [
      "what's on tv & streaming",
      "top 250 tv shows",
      "most popular tv shows",
      "browse tv shows by genre",
      "tv news",
    ],
    id: 2,
  },
  {
    heading: "Award & Events",
    icon: MdStars,
    list: [
      "oscars",
      "black history month",
      "sundance film festival",
      "SXSW",
      "STARmeter awards",
      "awards central",
      "festival central",
      "all events",
    ],
    id: 3,
  },
  {
    heading: "Watch",
    icon: IoPlayCircle,
    list: [
      "what to watch",
      "latest trailers",
      "imdb originals",
      "imdb picks",
      "imdb spotlight",
      "imdb podcasts",
    ],
    id: 4,
  },
  {
    heading: "Celebs",
    icon: IoMdPeople,
    list: ["born today", "most popular celebs", "celebrity news"],
    id: 5,
  },
  {
    heading: "Community",
    icon: FaGlobeAmericas,
    list: ["help center", "contributor zone", "polls"],
    id: 6,
  },
];

export { menuListData };
