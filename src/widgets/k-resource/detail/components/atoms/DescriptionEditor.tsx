import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import TextArea from '@/shared/ui/textarea/TextArea';
import { useState } from 'react';

const DescriptionEditor = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col justify-between gap-2">
      <Subtitle variant="subtitle1" children="Description" />
      <TextArea value={message} onChange={(value) => setMessage(value)} rows={6} />
    </div>
  );
};

export default DescriptionEditor;
