import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../services/apis";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user,        setUser]        = useState(null);
  const [loading,     setLoading]     = useState(true);
  const [demoSession, setDemoSession] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) { setLoading(false); return; }

    authAPI.me()
      .then((res) => {
        setUser(res.data);
        if (res.data.role === "demo") {
          const wasDemo = sessionStorage.getItem("demo_session") === "true";
          if (wasDemo) setDemoSession(true);
        }
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      })
      .finally(() => setLoading(false));
  }, []);

  const loginAsDemo = async (email, password) => {
    const res = await authAPI.login(email, password);
    localStorage.setItem("access_token",  res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    const me = await authAPI.me();
    setUser(me.data);
    if (me.data.role === "demo") {
      setDemoSession(true);
      sessionStorage.setItem("demo_session", "true");
    }
  };

const login = async (email, password) => {
  const res = await authAPI.login(email, password);
  localStorage.setItem("access_token",  res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);
  const me = await authAPI.me();
  setUser(me.data);
  return me.data.role;
};
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    sessionStorage.removeItem("demo_session");
    setUser(null);
    setDemoSession(false);
  };

  const isAdmin = user?.role === "admin";
  const isDemo  = user?.role === "demo";

  return (
    <AuthContext.Provider value={{
      user, loading,
      isAdmin, isDemo,
      demoSession,
      login, loginAsDemo, logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);