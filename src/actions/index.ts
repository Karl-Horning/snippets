"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code },
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippit(id: number) {
    await db.snippet.delete({ where: { id } });

    revalidatePath("/");
    redirect("/");
}

export const createSnippet = async (
    formState: { message: string },
    formData: FormData
) => {
    try {
        // Validate inputs
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 3) {
            return {
                message: "Title must be longer",
            };
        }

        if (typeof code !== "string" || code.length < 10) {
            return {
                message: "Code must be longer",
            };
        }

        // Create a new database record
        await db.snippet.create({
            data: {
                title,
                code,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: error.message,
            };
        } else {
            return {
                message: "Something went wrong...",
            };
        }
    }

    revalidatePath("/");
    // Redirect back to the root route
    redirect("/");
};
