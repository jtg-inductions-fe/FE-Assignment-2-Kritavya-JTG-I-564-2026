export const STORAGE_KEYS = {
    AUTH_TOKEN: 'github_explorer_pat',
    AUTH_USERNAME: 'github_explorer_username',
    AUTH_AVATAR: 'github_explorer_avatar',
} as const;

export const GITHUB_PAT_DOCS_URL =
    'https://github.com/settings/tokens/new?scopes=read:user,user:follow&description=GitHub+Explorer';
