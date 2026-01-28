import { fetchNoteById } from '@/lib/api';

import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreviewClient note={note} />
    </Modal>
  );
}
