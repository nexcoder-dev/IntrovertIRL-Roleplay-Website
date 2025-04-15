import { useState, useEffect } from 'react';

const DISCORD_CLIENT_ID = '1328662491563294720';
let REDIRECT_URI = '';

if (typeof window !== 'undefined') {
  REDIRECT_URI = `${window.location.origin}/#whitelist`;
}


export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
}

export const useDiscordAuth = () => {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    const fetchUser = async () => {
      try {
        const response = await fetch('https://discord.com/api/users/@me', {
          headers: {
            authorization: `${tokenType} ${accessToken}`,
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          localStorage.setItem('discord_user', JSON.stringify(userData));
        }
      } catch (error) {
        console.error('Failed to fetch Discord user:', error);
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchUser();
    } else {
      const savedUser = localStorage.getItem('discord_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    }
  }, []);

  const login = () => {
    const redirectUri = `${window.location.origin}/#whitelist`;
  
    const params = new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: 'token',
      scope: 'identify',
    });
  
    window.location.href = `https://discord.com/api/oauth2/authorize?${params}`;
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('discord_user');
  };

  return { user, loading, login, logout };
};