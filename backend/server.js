// import express form "express";
import express from "express";
import dotenv from "dotenv"

const app = express();
// dotenv.config();
app.get('/api/jokes', (req, res) => {
    const jokes =
        [
            {
                "id": 1,
                "title": "Programmer Joke",
                "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
            },
            {
                "id": 2,
                "title": "Parallel Lines",
                "content": "Parallel lines have so much in common… it’s a shame they’ll never meet."
            },
            {
                "id": 3,
                "title": "Coffee Break",
                "content": "Why did the developer go broke? Because he used up all his cache."
            },
            {
                "id": 4,
                "title": "Math Joke",
                "content": "Why was the equal sign so humble? Because he knew he wasn’t less than or greater than anyone else."
            },
            {
                "id": 5,
                "title": "Time Travel",
                "content": "I would tell you a joke about time travel… but you didn’t like it."
            },
            {
                "id": 6,
                "title": "Skeleton Joke",
                "content": "Why don’t skeletons fight each other? They don’t have the guts."
            },
            {
                "id": 7,
                "title": "Ocean Joke",
                "content": "Why don’t oysters donate to charity? Because they are shellfish."
            },
            {
                "id": 8,
                "title": "Library Joke",
                "content": "Why did the librarian get kicked off the plane? Because it was overbooked."
            },
            {
                "id": 9,
                "title": "Astronomy Joke",
                "content": "Why did the sun go to school? To get a little brighter."
            },
            {
                "id": 10,
                "title": "Computer Joke",
                "content": "Why was the computer cold? It left its Windows open."
            }
        ]
    res.send(jokes)
    // console.log(jokes)
})
app.get('/hi', (req, res) => {
    res.send("hi? what")
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`port has started at http://localhost:${port}`)
})