import "./App.css";
import AboutUs from "./components/AboutUs";
import DeltaCity from "./components/DeltaCity";
import TheFuture from "./components/TheFuture";

function App() {
  return (
    <div>
      <AboutUs
        title="About Us"
        content="Omni Consumer Products, or OCP, is the firm which recently agreed
            with officials of the Motor City to fund and run the Detroit Metro
            Police Department. Dick Jones, the president of OCP had this to say,
            “Shifts in tax structure have made the economy ideal for corporate
            growth. But community services, in this case law enforcement, have
            suffered. I think it's time we gave something back. Take a close
            look at the track record of this company. You'll see that we've
            gambled in markets usually regarded as nonprofit. Hospitals.
            Prisons. Space exploration. I say, good business is where you find
            it.”"
            id="about"
      />
      <DeltaCity
        title="Delta City"
        content="Labor leaders agreed to sanction construction of OCP's Delta City
            thereby creating one million much-needed new jobs despite questions
            about worker safety in dangerous Old Detroit. Omni Consumer Products
            and the city of Detroit will join in a bold new venture. Sometimes
            we just must start over from scratch to make things right. And
            that's exactly what we're going to do. We're going to build a
            brand-new city where Detroit now stands. An example to the world.
            We're going to raise towers of glass and steel. Every citizen will
            have a living unit, safe, secure, and clean. Don't be nostalgic.
            Today's neighborhoods are places where bad things happen. Anyone can
            buy OCP stock and own a piece of our city. Welcome to our city as it
            should be, and as it will be--in the hands of responsible private
            enterprise!"
            id="delta"
      />
      <TheFuture
        title="The Future of Law Enforcement"
        content="We now have a contract to run local law enforcement. But at the
            Security Concepts division of Omni Consumer Products, we believe an
            efficient police force is only part of the solution. We need a
            24-hour-a-day police officer. A cop who doesn't need to eat or
            sleep. A cop with superior firepower and the reflexes to use it.
            Here at Security Concepts, we get the best of both worlds. The
            fastest reflexes modern technology has to offer, onboard
            computer-assisted memory and a lifetime of on-the-street law
            enforcement programming. Robert Morton, the vice president of
            Security Concepts at Omni Consumer Products explains, “I can't
            comment on Delta City. That’s not my division. But I will tell you
            this: Security Concepts projects the end of crime in Old Detroit
            within 40 days. There's a new guy in town. His name's RoboCop.”"
            id="future"
      />
    </div>
  );
}

export default App;
