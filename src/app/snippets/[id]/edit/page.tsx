// Edit
import { notFound } from "next/navigation";
import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
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

    return (
        <>
            <SnippetEditForm snippet={snippet} />
        </>
    );
}
