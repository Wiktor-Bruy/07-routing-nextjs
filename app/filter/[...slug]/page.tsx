import css from './page.module.css';

import Link from 'next/link';

import { type FetchTagNote } from '@/types/note';
import { fetchFilterNotes } from '@/lib/api';

interface FilterNotesProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterNotes({ params }: FilterNotesProps) {
  const { slug } = await params;
  const tag = slug[0] as FetchTagNote;
  const noteList = await fetchFilterNotes(tag);

  return (
    <ul className={css.list}>
      {noteList.map(note => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <Link className={css.link} href={`/notes/${note.id}`}>
              View details
            </Link>
          </div>
        </li>
      ))}
      {noteList.length === 0 && <p>There are no notes for this tag...</p>}
    </ul>
  );
}
