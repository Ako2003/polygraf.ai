import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Steps({step}) {
  return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={step.image}
                width={40}
                />
                <div className="flex flex-col">
                <p className="text-md">{step.title}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{step.description}</p>
            </CardBody>
        </Card>
  );
}
