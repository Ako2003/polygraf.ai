import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
export default function Cards({card}) {
  return (
    <div className="max-sm:mx-14">
        <Card className="m-5 sm:h-80">
            <CardHeader className="pb-0 pt-2 sm:px-4 flex-col">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl max-sm:w-56"
                    src={card.image}
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