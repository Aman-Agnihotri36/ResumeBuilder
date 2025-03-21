import prisma from "@/lib/prisma"



export async function POST(req: Request) {
    const userData = await req.json()

    console.log('YOUR USER DATAAAA', userData)

    try {
        let { firstName, lastName, username, email, clerkId, photo } = userData

        if (!firstName || !lastName || !username || !email || !clerkId) {
            return new Response(JSON.stringify({
                success: false,
                message: "Data is missing",
            }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const createdUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                username,
                email,
                clerkId,
                photo
            }
        })

        if (!createdUser) {
            return new Response(JSON.stringify({
                success: false,
                message: "Some error occured",
            }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        return new Response(JSON.stringify({
            success: true,
            message: "User Created Successfully",
        }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: `Some error occured ${error}`,
        }), { status: 500 });
    }
}