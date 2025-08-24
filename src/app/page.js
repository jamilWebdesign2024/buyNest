import BooksPage from "./books/page";
import Hero from "./components/hero";
import FeaturedBooks from "./components/HomePage/FeaturedBooks/FeaturedBooks";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
