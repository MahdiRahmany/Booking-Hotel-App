```markdown
# Booking Hotel App

A comprehensive hotel booking platform built with React and Vite, featuring dynamic data management, interactive maps, date range selection, and user-friendly interfaces to provide a seamless booking experience for users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Packages and Dependencies](#packages-and-dependencies)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/booking-hotel-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd booking-hotel-app
   ```

3. **Install the dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

4. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   This command runs both the Vite development server and the JSON Server concurrently. The React application will be accessible at `http://localhost:3000`, and the mock API server will run at `http://localhost:5000`.

5. **Build the project for production:**

   Using npm:

   ```bash
   npm run build
   ```

   Or using Yarn:

   ```bash
   yarn build
   ```

6. **Preview the production build:**

   Using npm:

   ```bash
   npm run preview
   ```

   Or using Yarn:

   ```bash
   yarn preview
   ```

   This will start a local server to preview the production build.

## Scripts

- **`dev`**: Starts the development server using Vite and runs JSON Server to provide a mock API.
- **`build`**: Builds the application for production.
- **`lint`**: Runs ESLint to analyze code for potential errors and maintain code quality.
- **`preview`**: Previews the production build locally.

## Usage

After completing the installation steps:

1. **Run the development server:**

   ```bash
   npm run dev
   ```

   The React application will be accessible at `http://localhost:3000`, and the JSON Server API will be available at `http://localhost:5000`.

2. **Build for production:**

   ```bash
   npm run build
   ```

   The optimized production build will be available in the `dist` directory.

3. **Preview the production build:**

   ```bash
   npm run preview
   ```

   This will start a local server to preview the production build.

## Packages and Dependencies

### Dependencies

These are the runtime dependencies required for the application to function.

- **[axios](https://axios-http.com/)**: `^1.5.0`  
  Promise-based HTTP client for the browser and Node.js, used for making API requests.

- **[date-fns](https://date-fns.org/)**: `^3.6.0`  
  Modern JavaScript date utility library for parsing, validating, manipulating, and formatting dates.

- **[json-server](https://github.com/typicode/json-server)**: `^1.0.0-beta.1`  
  Provides a full fake REST API with zero coding, used here to mock backend API endpoints.

- **[react](https://reactjs.org/)**: `^18.3.1`  
  A JavaScript library for building user interfaces.

- **[react-country-flag](https://github.com/danalloway/react-country-flag)**: `^3.1.0`  
  A React component for displaying country flags.

- **[react-date-range](https://github.com/hypeserver/react-date-range)**: `^2.0.1`  
  A flexible and customizable date range picker component for React.

- **[react-dom](https://reactjs.org/docs/react-dom.html)**: `^18.2.0`  
  Serves as the entry point to the DOM and server renderers for React.

- **[react-hot-toast](https://react-hot-toast.com/)**: `^2.4.1`  
  A lightweight and customizable toast notification library for React.

- **[react-icons](https://react-icons.github.io/react-icons/)**: `^5.2.1`  
  Include popular icons in your React projects easily.

- **[react-leaflet](https://react-leaflet.js.org/)**: `^4.2.1`  
  React components for Leaflet maps, enabling interactive maps in the application.

- **[react-router-dom](https://reactrouter.com/)**: `^6.26.0`  
  Declarative routing for React applications.

- **[react-toastify](https://fkhadra.github.io/react-toastify/introduction)**: `^10.0.5`  
  Provides easy-to-use and customizable toast notifications for React.

### Dev Dependencies

These are the development dependencies required for building and maintaining the project.

- **[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)**: `^18.2.15`  
  TypeScript definitions for React.

- **[@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped)**: `^18.2.7`  
  TypeScript definitions for React DOM.

- **[@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react)**: `^4.0.3`  
  Official Vite plugin for React, enabling features like Fast Refresh.

- **[concurrently](https://github.com/open-cli-tools/concurrently)**: `^9.0.1`  
  Run multiple commands concurrently, used here to run Vite and JSON Server simultaneously.

- **[eslint](https://eslint.org/)**: `^8.45.0`  
  A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

- **[eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)**: `^7.32.2`  
  React-specific linting rules for ESLint.

- **[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)**: `^4.6.0`  
  Enforces the Rules of Hooks for React Hooks.

- **[eslint-plugin-react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin/tree/main/eslint-plugin-react-refresh)**: `^0.4.3`  
  ESLint plugin for React Refresh, enabling fast refresh during development.

- **[vite](https://vitejs.dev/)**: `^4.4.5`  
  Next Generation Frontend Tooling for faster and leaner development.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**

Please ensure your code adheres to the project's coding standards and passes all linting checks.
