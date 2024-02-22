// [id]
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import { deleteSnippit } from "@/actions";

interface SnippetShowPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const { id } = props.params;
    // Convert ID to integer
    const snippetId = parseInt(id, 10);

    const snippet = await db.snippet.findFirst({
        where: { id: snippetId },
    });

    if (!snippet) {
        return notFound();
    }

    const { title, code } = snippet;

    const deleteSnippetAction = deleteSnippit.bind(null, snippet.id);

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <Link
                        href={`/snippets/${snippetId}/edit`}
                        className="p-2 border rounded"
                    >
                        Edit
                    </Link>
                    <form action={deleteSnippetAction}>
                        <button className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{code}</code>
            </pre>
        </div>
    );
}
