import React, {useState, useEffect, createContext} from 'react';
import {ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

export const AuthContext = createContext(null);

const AuthNavigator: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return authSubscriber;
  }, []);

  const onAuthStateChanged = result => {
    setUser(result);
    if (initializing) setInitializing(false);
  };

  if (initializing) {
    return <ActivityIndicator />;
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  );
};

export default AuthNavigator;
