"use client"

import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";    
import {cards} from "../constants/cards";
import Cards from "./home/Cards";
import Welcome from "./home/Welcome";
import Tool from "./Tool";
import { useRouter } from "next/navigation";

export default function Home() {

  return (
    <div id="home">
        <div>
            <div className="m-10">
                <Welcome />
            </div>
        </div>
        <div className="gap-2 grid sm:grid-cols-4 grid-cols-2">
            {cards.map((card, index) => (
                <Cards card={card} key={index}/>
            ))}
        </div>
    </div>
  )
}
