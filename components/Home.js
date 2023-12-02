import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";    
import {cards} from "../constants/cards";
import Cards from "./Cards";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <div>
        <div>
            <div className="m-10">
                <Welcome />
            </div>
        </div>
        <div className="gap-2 grid sm:grid-cols-4 grid-cols-1">
            {cards.map((card, index) => (
                <Cards card={card} key={index}/>
            ))}
        </div>
    </div>
  )
}
