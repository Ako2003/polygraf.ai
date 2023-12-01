import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function Cards({card}) {
  return (
    <div>
        <Card className="m-5">
            <CardHeader className="pb-0 pt-2 px-4 flex-col sm:items-start">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={card.image}
                    width={260}
                />
            </CardHeader>
            <CardBody className="max-sm:text-center overflow-visible py-2">
                <h4 className="font-bold text-large">{card.title}</h4>
                <small className="text-default-500">{card.description}</small>
            </CardBody>
        </Card>
    </div>
  )
}
