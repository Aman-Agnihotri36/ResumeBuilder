import { Card } from "antd";

interface CardProps {
    Icon: JSX.Element;
    Title: string
    Description: string;
}

export const Card2: React.FC<CardProps> = ({ Icon, Title, Description }) => {
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