import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {
    const createSnippet = async (formData: FormData) => {
        // Use server action
        "use server";

        // Validate inputs
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        // Create a new database record
        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });

        // TODO: Remove
        console.log(snippet);

        // Redirect back to the root route
        redirect("/");
    };

    return (
        <>
            <form action={createSnippet}>
                <h3 className="font-bold m-3">Create a Snippet</h3>
                <div className="flex flex-col gap-4">
                    {/* Title input */}
                    <div className="flex gap-4">
                        <label className="w-12" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="border rounded p-2 w-full"
                            id="title"
                            name="title"
                            type="text"
                        />
                    </div>

                    {/* Code textarea */}
                    <div className="flex gap-4">
                        <label className="w-12" htmlFor="code">
                            Code
                        </label>
                        <textarea
                            className="border rounded p-2 w-full"
                            id="code"
                            name="code"
                        />
                    </div>
                    <button className="rounded p-2 bg-blue-200" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}
