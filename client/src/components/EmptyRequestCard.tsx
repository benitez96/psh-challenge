import { Card, CardBody } from "@nextui-org/react";



export const EmptyRequestCard = () => ( 
  <div className="flex justify-center w-full p-2 absolute top-1/2 left-0">
    <Card>
      <CardBody>
        <p className="text-center">It seems like there is nothing here.
        </p>
      </CardBody>
    </Card>
  </div>
)
