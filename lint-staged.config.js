/* This configuration applies Prettier formatting and ESLint linting to all staged `.ts` and `.tsx` files */
export default {
    'src/**/*.{ts,tsx}': `eslint .`,
    'src/**/*.{ts,tsx}': `prettier --write ./src ./index.html`,
};
