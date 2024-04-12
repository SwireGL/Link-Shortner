import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axiosApi from "../../axiosApi.ts";

function LinkForm() {
    const [link, setLink] = useState({ url: '', shortUrl: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosApi.post('/links', { url: link.url });
            setLink({
                url: '',
                shortUrl: `http://localhost:8000/${response.data.shortUrl}`
            });
        } catch (error) {
            console.error('Error creating short link:', error);
            alert('Failed to create short link');
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1>Shorten your link!</h1>
            <form onSubmit={handleSubmit} style={{
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                width: '80%'
            }}>
                <TextField
                    label="URL"
                    variant="outlined"
                    value={link.url}
                    onChange={(e) => setLink({ ...link, url: e.target.value })}
                />
                <Button type="submit" variant="contained" style={{ marginTop: '20px' }}>Shorten</Button>
                {link.shortUrl && (
                    <div>
                        <p>Short URL: <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">{link.shortUrl}</a></p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default LinkForm;