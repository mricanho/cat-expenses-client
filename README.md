# Cat Expense Web

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Cat Expense Web is a front-end application designed to manage cat-related expenses. The application includes the following features:

### Main UI

- Displays a list of expenses.
- Includes an "Add Expense" button to open the Expense Detail dialog.
- Highlights the rows with the highest spending category (Top CATegory).

### Add Expense

- Opens a modal dialog to input Item name, Category, and Amount (all mandatory).
- Displays a random cat fact from the [Cat Fact API](https://catfact.ninja/) every time the dialog is opened.
- Submits the expense and updates the Main UI.

### Delete Expenses

- Allows users to select one or more items using checkboxes.
- Deletes selected items when the "Delete Expense" button is clicked.

### Top CATegory

- Highlights rows with the highest spending category.
- If two categories have the same spending, both are highlighted.

## Development Notes

- **Commit**: Commit changes at every step after the initial setup.
- **Framework**: Built with React and Next.js.
- **Styling**: Uses Tailwind CSS for styling.
- **TypeScript**: Fully typed with TypeScript.
- **State Management**: Data is stored in LocalStorage with a fallback to IndexedDB (hidden behind a feature flag in `.env`).
- **Testing**: Includes Jest for unit testing and Storybook for component documentation.
- **Linting**: Configured with ESLint.
- **Animations**: Animations are added for modal transitions and other UI interactions.

## Folder Structure

- **types/**: Contains TypeScript type definitions.
- **constants/**: Stores application constants.
- **services/**: Includes API calls and service logic.
- **lib/**: Utility functions and helpers.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Node Version Management

This project uses [nvm](https://github.com/nvm-sh/nvm) for managing Node.js versions. To ensure you're using the correct version, run the following command:

```bash
nvm use
```

This will switch to the Node.js version specified in the `.nvmrc` file

## API Usage

- **Cat Fact API**: Used to fetch random cat facts for the Expense Detail dialog.

## Feature Flags

- **IndexedDB Support**: Enable IndexedDB storage by setting a feature flag in `.env`.

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will execute all unit tests using Jest.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
