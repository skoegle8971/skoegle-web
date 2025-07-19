'use client';

import { useEffect, useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [media, setMedia] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id);
    });
  }, []);

  useEffect(() => {
    if (userId) fetchImages();
  }, [userId]);

  async function fetchImages() {
    const res = await fetch(`/api/get-user-images?userId=${userId}`);
    const data = await res.json();
    setMedia(data);
  }

  async function uploadImage(e) {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    const path = `${userId}/${uuidv4()}.${file.name.split('.').pop()}`;
    const { error } = await supabase.storage
      .from('skoegleimages')
      .upload(path, file);

    if (error) return alert(error.message);

    const { data } = supabase.storage
      .from('skoegleimages')
      .getPublicUrl(path);

    await fetch('/api/save-image-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, imageUrl: data.publicUrl }),
    });

    fetchImages();
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUserId('');
  }

  if (!userId) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  return (
    <div style={{ padding: 20 }}>
      <input type="file" onChange={uploadImage} />
      <h2>My Uploads</h2>
      {media.length === 0 && <p>No uploads yet.</p>}
      {media.map((img) => (
        <div key={img._id} style={{ margin: '1rem 0' }}>
          <img src={img.imageUrl} alt="" style={{ maxWidth: '300px' }} />
        </div>
      ))}
      <button onClick={signOut}>Logout</button>
    </div>
  );
}



