export const msalConfig = {
  auth: {
    clientId: "caedbd5c-412c-42e6-a596-05b73e1f5579",
    authority: "https://redrocin.ciamlogin.com/caedbd5c-412c-42e6-a596-05b73e1f5579",
    knownAuthorities: ["redrocin.ciamlogin.com"],
    redirectUri: "/auth/callback"
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  }
};

export const loginRequest = {
  scopes: ["openid", "profile", "email"]
};