import { notFound } from "next/navigation";
import { db } from "@/db";

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

    return (
        <>
            <div>{title}</div>
            <div>{code}</div>
        </>
    );
}
