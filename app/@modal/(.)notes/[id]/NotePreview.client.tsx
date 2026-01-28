'use client';

import css from './NotePreview.module.css';

import { useRouter } from 'next/navigation';

import { type Note } from '@/types/note';

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button className={css.backBtn} onClick={goBack}>
            Go back
          </button>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {note.updatedAt ? note.updatedAt : note.createdAt}
        </p>
        <p className={css.tag}>{note.tag}</p>
      </div>
    </div>
  );
}
