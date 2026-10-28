export interface AuthState {
    token: string | null;
    username: string | null;
    avatarUrl: string | null;
    isAuthenticated: boolean;
}
