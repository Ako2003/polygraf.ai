import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";    
import {cards} from "../constants/cards";
import Cards from "./Cards";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <section>
        <div>
            <div className="welcome m-10">
                <Welcome />
            </div>
        </div>
        <div className="gap-2 grid sm:grid-cols-4 grid-cols-1">
            {cards.map((card, index) => (
                <Cards card={card}/>
            ))}
        </div>
    </section>
  )
}
