# Snippet Management Application

This application allows users to manage code snippets efficiently. Users can create, edit, delete, and view code snippets through a user-friendly interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Features

- **Create**: Users can create new code snippets by providing a title and the code itself.
- **Edit**: Existing code snippets can be edited to update the title or modify the code.
- **Delete**: Users can remove unwanted code snippets from the application.
- **View**: All code snippets are listed on the main page, and users can view each snippet individually.

## Technologies Used

- **Next.js**: The frontend is built using Next.js, providing server-side rendering and efficient routing. This project is taken from the course "Next JS: The Complete Developer's Guide" by [Stephen Grider](https://github.com/StephenGrider).
- **Tailwind CSS**: Styling is done using Tailwind CSS, allowing for rapid UI development.
- **Prisma**: Prisma is used as the ORM for interacting with the database, making it easy to manage database operations.
- **Monaco Editor**: The code editor is implemented using the Monaco Editor, providing syntax highlighting and code editing capabilities.
- **SQLite**: SQLite is used as the database to store code snippets.

## Getting Started

1. Clone the repository: `git clone https://github.com/Karl-Horning/snippets`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

1. **Create a Snippet**: Click on the "New" button to create a new code snippet. Provide a title and the code, then click "Create" to save it.
2. **Edit a Snippet**: Click on the snippet title to view the details. From there, click "Edit" to modify the title or code. Click "Save" to apply the changes.
3. **Delete a Snippet**: On the snippet details page, click "Delete" to remove the snippet from the application.
4. **View Snippets**: All snippets are listed on the main page. Click on a snippet title to view its details and code.

## Contributors

- Karl Horning (@karlhorning)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
