'use server'

import prisma from "../prisma";


export const CreateUser = async (userInfo: any) => {


    try {
        console.log('YOUR USER INFO', userInfo)
        let { firstName, lastName, username, email, clerkId, photo } = userInfo

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

        return {
            success: true,
            message: "User created successfully",
            data: createdUser,
            status: 200
        }


    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: `Some error occured ${error}`,
        }), { status: 500 });
    }
}