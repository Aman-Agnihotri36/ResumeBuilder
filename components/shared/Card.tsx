import { Card } from "antd";


// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const SimpleCard = ({ Icon, Title, Description }: { Icon: any, Title: string, Description: string }) => {
    return (
        <div>
            <Card style={{ width: 400 }}>
                <p className="p-2 bg-purple-100 rounded-full mb-4">{Icon}</p>
                <p className="text-xl font-bold">{Title}</p>
                <p className="text-gray-600 text-[1rem] pt-3">{Description}</p>
            </Card>
        </div>
    )
}