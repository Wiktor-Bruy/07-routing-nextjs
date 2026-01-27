import { fetchNoteById } from '@/lib/api';

import Modal from '@/components/Modal/Modal';
import NotePreviewComponent from '@/components/NotePreview/NotePreview';

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreviewComponent note={note} />
    </Modal>
  );
}
