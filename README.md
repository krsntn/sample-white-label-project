### Project Overview

This project is designed to showcase different themes for different clients based on the provided `clientId` parameter. By following the instructions below, you can easily switch between two client themes: `client1` and `client2`.

### Prerequisites

Before you can run the project with different client themes, please make sure you have the following prerequisites installed on your system:

- node.js (version 14.0.0 or higher)
- pnpm (version 6.0.0 or higher)

### Getting Started

Follow these steps to set up and run the project with different client themes:

1. Install the project dependencies using pnpm:

```bash
pnpm install
```

2. Start the development server with the desired clientId parameter:

For client1 theme:

```bash
clientId=client1 pnpm dev
```

For client2 theme:

```bash
clientId=client2 pnpm dev
```

3. Open your web browser and navigate to the local development server url (http://localhost:3000).

### Switching Between Themes

When you run the project with the `clientId` parameter set to `client1`, you will see the `client1` theme in your web application. Similarly, when you run the project with the `clientId` parameter set to `client2`, you will see the `client2` theme.

### Customizing Themes

To customize the themes for `client1` and `client2`, you can modify the project's source code and assets. Depending on the project structure, you may find theme-related configuration files or stylesheets that you can adjust to fit the specific requirements of each client.
