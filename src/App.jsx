import Nav from "./Components/Nav";
import {
  CustomerReview,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpeicalOffer,
  Subsribe,
  SuperQuality,
} from "./Sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpeicalOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subsribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
