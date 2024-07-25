## Note.me: A Secure MERN Note-Taking App
[![Netlify Status](https://api.netlify.com/api/v1/badges/b721716b-fa30-4ebd-9355-71cb9f25fc4c/deploy-status)](https://app.netlify.com/sites/chuha-note/deploys)

### Features

* **User Authentication:** Secure signup and login using email.
* **Note Management:** Create, Read, Update, and Delete notes.
* **Search Functionality:** Search notes by content for easy retrieval.
* **Light/Dark Theme:** Switch between light and dark themes for better viewing experience.
* **PDF Export:** Download all your notes as a single PDF for offline access or sharing.
* **Mobile Responsiveness:** Adapts seamlessly to different screen sizes.

### Technologies Used

* **Frontend:** React.js
* **Backend:** Express.js
* **Database:** MongoDB
* **Runtime:** Node.js
* **Additional Libraries:**
    * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    * [React-pdf](https://react-pdf.org/)

### Installation

```bash
git clone https://github.com/YKGupta/Note.me-CipherSchools.git
cd Note.me-CipherSchools
cd backend
npm install
cd ../frontend
npm install
```

### Configuration

Create a .env file to store the required environment variables as follows:

```bash
cd backend
touch .env
```

Store the following:

```
PORT=<A PORT NUMBER>
MONGO_URI="<YOUR MONGODB ATLAS DATABASE URI>"
JWT_SECRET_KEY="<YOUR SECRET KEY>"
```

The same for the frontend

```bash
cd frontend
touch .env
```

Store the following

```
REACT_APP_API_HOST="https://localhost:<A PORT NUMBER>"

```

### Usage

```bash
cd backend
node src/index.js
cd ../frontend
npm start
```

### Contribution

Clone the repository, make your changes and initiate a pull request!
