'use client';
import { useState } from 'react';
import MailToModal from '@/components/mailToModal/MailToModal.tsx';

export default function ModalTrigger() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => setIsVisible(!isVisible);

  return (
    <>
      <button onClick={toggleModal}>Show Modal</button>
      <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <MailToModal title="My Modal">
          <p>This is a modal content.</p>
          <button onClick={toggleModal}>Close</button>
        </MailToModal>
      </div>
    </>
  );
}
