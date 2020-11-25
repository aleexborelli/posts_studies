import React, { createContext, useCallback, useState } from 'react';
import ICredentiaslDev from '../interfaces/credentials';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContextState {
  user: IUser;
  signIn(credentials: ICredentiaslDev): Promise<void>;
}

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('ProjectManagerToken');
    const user = localStorage.getItem('ProjectManagerUser');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async (credentials: ICredentiaslDev) => {
    const response = await api.post('/sessions', credentials);

    const { token, user } = response.data;

    localStorage.setItem('ProjectManagerToken', token);
    localStorage.setItem('ProjectManagerUser', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};
