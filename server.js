const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serves frontend & /audio/*.mp3

// Curated 30-Track 90s Bollywood MP3 Playlist (100% Pure Audio MP3, No Video)
const songs = [
    {
        id: 1,
        title: "Baazigar O Baazigar",
        movie: "Baazigar (1993)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Venus Worldwide Entertainment",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Baazigar%20O%20Baazigar.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Do Dil Mil Rahe Hain",
        movie: "Pardes (1997)",
        singers: "Kumar Sanu",
        credits: "Tips Official Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Do%20Dil%20Mil%20Rahe%20Hain.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Ladki Badi Anjani Hai",
        movie: "Kuch Kuch Hota Hai (1998)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Sony Music India",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Ladki%20Badi%20Anjani.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "Mera Dil Bhi Kitna Pagal Hai",
        movie: "Saajan (1991)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Venus Records",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Mera%20Dil%20Bhi%20Kitna%20Pagal%20Hai.mp3",
        cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Chura Ke Dil Mera",
        movie: "Main Khiladi Tu Anari (1994)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Venus Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Chura%20Ke%20Dil%20Mera%20Goriya%20Chali.mp3",
        cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        title: "Dil Ka Aalam",
        movie: "Aashiqui (1990)",
        singers: "Kumar Sanu",
        credits: "T-Series Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Dil%20Ka%20Aalam%20Main.mp3",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 7,
        title: "Ab Tere Bin Jee Lenge Hum",
        movie: "Aashiqui (1990)",
        singers: "Kumar Sanu",
        credits: "T-Series Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Ab%20Teray%20Bin%20Jee%20Lengay%20Hum.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 8,
        title: "Tu Meri Zindagi Hai",
        movie: "Aashiqui (1990)",
        singers: "Kumar Sanu, Anuradha Paudwal",
        credits: "T-Series Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Tu%20Meri%20Zindagi%20Hai.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 9,
        title: "Bas Ek Sanam Chahiye",
        movie: "Aashiqui (1990)",
        singers: "Kumar Sanu",
        credits: "T-Series Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Bas%20Ek%20Sanam%20Chahiye.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 10,
        title: "Tu Pyar Hai Kisi Aur Ka",
        movie: "Dil Hai Ke Manta Nahin (1991)",
        singers: "Kumar Sanu, Anuradha Paudwal",
        credits: "T-Series Classics",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Tu%20Pyar%20Hai%20Kisi%20Aur%20Ka.mp3",
        cover: "https://images.unsplash.com/photo-1445985543469-221e5744637b?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 11,
        title: "Dil Ne Ye Kaha Hai Dil Se",
        movie: "Dhadkan (2000)",
        singers: "Udit Narayan, Alka Yagnik, Kumar Sanu",
        credits: "Venus Records",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Dil%20Ne%20Ye%20Kaha%20Hai%20Dil%20Se%20sung.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 12,
        title: "Jab Koi Baat Bigad Jaye",
        movie: "Jurm (1990)",
        singers: "Kumar Sanu, Sadhana Sargam",
        credits: "HMV / Saregama India",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Jab%20Koi%20Baat%20Bigad%20Jaye.mp3",
        cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 13,
        title: "Jadoo Hai Tera Hi Jadoo",
        movie: "Ghulam (1998)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Jadoo%20Hai%20Tera%20Hi%20Jadoo.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 14,
        title: "Chand Se Parda Kijiye",
        movie: "Aao Pyaar Karen (1994)",
        singers: "Kumar Sanu",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Chand%20Se%20Parda%20Kijiye.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 15,
        title: "Nasha Ye Pyar Ka Nasha",
        movie: "Mann (1999)",
        singers: "Udit Narayan",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Nasha%20Ye%20Pyar%20Ka%20Nasha%20Hai.mp3",
        cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 16,
        title: "Aankh Hai Bhari Bhari",
        movie: "Tum Se Achcha Kaun Hai (2002)",
        singers: "Kumar Sanu",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Aankh%20Hai%20Bhari%20Bhari.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 17,
        title: "Teri Chunariya Dil Le Gayi",
        movie: "Hello Brother (1999)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Teri%20Chunariya.mp3",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 18,
        title: "Tere Ishq Mein Naachenge",
        movie: "Raja Hindustani (1996)",
        singers: "Kumar Sanu, Alisha Chinai, Sapna Mukerji",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Tere%20Ishq%20Mein%20Naachenge.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 19,
        title: "Barsaat Ke Mausam Mein",
        movie: "Naajayaz (1995)",
        singers: "Kumar Sanu, Roop Kumar Rathod",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Barsaat%20Ke%20Mausam%20Mein.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 20,
        title: "Sochenge Tumhe Pyar",
        movie: "Deewana (1992)",
        singers: "Kumar Sanu",
        credits: "Venus Records",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Sochenge%20Tumhe.mp3",
        cover: "https://images.unsplash.com/photo-1445985543469-221e5744637b?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 21,
        title: "Kasam Khake Kaho",
        movie: "Dil Hai Tumhaara (2002)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Kasam%20Khake%20Kaho.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 22,
        title: "Mohabbat Dil Ka Sakoon",
        movie: "Dil Hai Tumhaara (2002)",
        singers: "Alka Yagnik, Kumar Sanu, Udit Narayan",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Mohabbat%20Dil%20Ka%20Sakoon.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 23,
        title: "Nazrein Mili Milke Jhuki",
        movie: "Shikari (2000)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Nazrein%20Mili%20Milke%20Jhuki.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 24,
        title: "Kitna Pyar Tumhe Karte Hain",
        movie: "Ek Ladka Ek Ladki (1992)",
        singers: "Kumar Sanu, Sadhana Sargam",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Kitna%20Pyar%20Tumhe%20Karte%20Hain.mp3",
        cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 25,
        title: "Kajal Kajal Teri Aankhon Ka",
        movie: "Sapoot (1996)",
        singers: "Kumar Sanu, Sadhana Sargam",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Kajal%20Kajal%20Teri%20Aankhon%20Ka.mp3",
        cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 26,
        title: "Shikwa Nahi Kisi Se",
        movie: "Naseeb (1997)",
        singers: "Kumar Sanu",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Shikwa%20Nahi%20Kisi%20Se%20Kisi%20Se.mp3",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 27,
        title: "Hum Pyar Hain Tumhare",
        movie: "Haan Maine Bhi Pyaar Kiya (2002)",
        singers: "Kumar Sanu, Alka Yagnik",
        credits: "Tips Music",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Hum%20Pyar%20Hain%20Tumhare.mp3",
        cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 28,
        title: "Saajan Saajan Teri Dulhan",
        movie: "Aarzoo (1999)",
        singers: "Alka Yagnik, Kumar Sanu",
        credits: "Saregama India",
        url: "https://archive.org/download/LaguKumarSanuTerbaik_201801/Saajan.mp3",
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 29,
        title: "Kaash Tum Mujhse Ek Baar Kaho",
        movie: "Aatish (1994)",
        singers: "Kumar Sanu",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Kaash%20Tum%20Mujhse%20Ek%20Baar%20Kaho.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&auto=format&fit=crop&q=80"
    },
    {
        id: 30,
        title: "Mera Chand Mujhe Aaya Hai Nazar",
        movie: "Yeh Hai Mumbai Meri Jaan (1999)",
        singers: "Kumar Sanu",
        credits: "Tips Music",
        url: "https://archive.org/download/LagJaoGaleMeriJanam/Mera%20Chand%20Mujhe%20Aya%20Hai%20Nazar.mp3",
        cover: "https://images.unsplash.com/photo-1445985543469-221e5744637b?w=300&auto=format&fit=crop&q=80"
    }
];

// GET /api/songs
app.get("/api/songs", (req, res) => {
    res.json(songs);
});

// GET /api/songs/:id
app.get("/api/songs/:id", (req, res) => {
    const s = songs.find(x => x.id === Number(req.params.id));
    if (!s) return res.status(404).json({ error: "Song not found" });
    res.json(s);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log("\n========================================");
    console.log("  📻 90s का ज़माना (90s Ka Zamana Radio)");
    console.log(`  ➜ Local:   http://localhost:${PORT}`);
    console.log("  ➜ Open the URL above in your browser!");
    console.log("  (Press Ctrl+C to stop the server)");
    console.log("========================================\n");
});

server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`\n[ERROR] Port ${PORT} is already in use by another process.`);
        console.error(`Please stop the running server or choose another port using PORT=3001 npm start\n`);
    } else {
        console.error("Server error:", err);
    }
});

module.exports = app;