let dataVinDiesel = [
    {
        data: [
            {
                Judul: "Fast & Furious 7 (Furious 7)",
                Pemain: "Vin Diesel, Paul Walker, Jason Statham, Dwayne Johnson",
                Sinopsis: "Deckard Shaw seeks revenge against Dominic Toretto and his team for the death of his brother."
            },
            {
                Tahun: 2015,
                Rating: 7.1,
                Durasi: "02:17:00"
            }
        ],
        Trailer: "https://youtu.be/Skpu5HaVkOc",
        Sampul: "cover/fast7.jpg"
    },
    {
        data: [
            {
                Judul: "Riddick",
                Pemain: "Vin Diesel, Karl Urban, Katee Sackhoff",
                Sinopsis: "Left for dead on a desolate planet, Riddick fights for survival against alien predators and mercenaries."
            },
            {
                Tahun: 2013,
                Rating: 6.4,
                Durasi: "01:59:00"
            }
        ],
        Trailer: "https://youtu.be/zH0U7h2WJpo",
        Sampul: "cover/riddick.jpg"
    },
    {
        data: [
            {
                Judul: "Fast & Furious 6",
                Pemain: "Vin Diesel, Paul Walker, Dwayne Johnson, Michelle Rodriguez",
                Sinopsis: "Hobbs recruits Dom and his team to take down a skilled mercenary organization."
            },
            {
                Tahun: 2013,
                Rating: 7.0,
                Durasi: "02:10:00"
            }
        ],
        Trailer: "https://youtu.be/dKi5XoeTN0k",
        Sampul: "cover/fast6.jpg"
    },
    {
        data: [
            {
                Judul: "Guardians of the Galaxy",
                Pemain: "Vin Diesel (Groot), Chris Pratt, Zoe Saldana",
                Sinopsis: "A group of intergalactic misfits team up to save the galaxy from Ronan the Accuser."
            },
            {
                Tahun: 2014,
                Rating: 8.0,
                Durasi: "02:01:00"
            }
        ],
        Trailer: "https://youtu.be/d96cjJhvlMA",
        Sampul: "cover/gotg.jpg"
    },
    {
        data: [
            {
                Judul: "Fast Five",
                Pemain: "Vin Diesel, Paul Walker, Dwayne Johnson",
                Sinopsis: "Dom and his crew plan a heist in Rio while being pursued by a relentless federal agent."
            },
            {
                Tahun: 2011,
                Rating: 7.3,
                Durasi: "02:10:00"
            }
        ],
        Trailer: "https://youtu.be/mw2AqdB5EVA",
        Sampul: "cover/fast5.jpg"
    },
    {
        data: [
            {
                Judul: "The Chronicles of Riddick",
                Pemain: "Vin Diesel, Judi Dench, Karl Urban",
                Sinopsis: "Riddick battles the Necromongers, a fanatical army that converts or kills all in their path."
            },
            {
                Tahun: 2004,
                Rating: 6.7,
                Durasi: "01:59:00"
            }
        ],
        Trailer: "https://youtu.be/zH0U7h2WJpo",
        Sampul: "cover/chronicles_riddick.jpg"
    },
    {
        data: [
            {
                Judul: "Babylon A.D.",
                Pemain: "Vin Diesel, Michelle Yeoh, Mélanie Thierry",
                Sinopsis: "A mercenary escorts a woman with a secret from Russia to New York."
            },
            {
                Tahun: 2008,
                Rating: 5.0,
                Durasi: "01:30:00"
            }
        ],
        Trailer: "https://youtu.be/3haUxI5SmaI",
        Sampul: "cover/babylon_ad.jpg"
    },
    {
        data: [
            {
                Judul: "The Pacifier",
                Pemain: "Vin Diesel, Lauren Graham, Brittany Snow",
                Sinopsis: "A tough Navy SEAL is assigned to protect a family of five children."
            },
            {
                Tahun: 2005,
                Rating: 5.1,
                Durasi: "01:35:00"
            }
        ],
        Trailer: "https://youtu.be/j1XUWQClt1s",
        Sampul: "cover/pacifier.jpg"
    },
    {
        data: [
            {
                Judul: "xXx",
                Pemain: "Vin Diesel, Asia Argento, Samuel L. Jackson",
                Sinopsis: "An extreme sports athlete is recruited by the government for a dangerous mission."
            },
            {
                Tahun: 2002,
                Rating: 5.9,
                Durasi: "02:04:00"
            }
        ],
        Trailer: "https://youtu.be/vZlcQTCRwWQ",
        Sampul: "cover/xxx.jpg"
    },
    {
        data: [
            {
                Judul: "Pitch Black",
                Pemain: "Vin Diesel, Radha Mitchell, Cole Hauser",
                Sinopsis: "A spaceship crashes on a desert planet where dangerous creatures emerge at night."
            },
            {
                Tahun: 2000,
                Rating: 7.1,
                Durasi: "01:52:00"
            }
        ],
        Trailer: "https://youtu.be/fm1K6Cm7Yy0",
        Sampul: "cover/pitch_black.jpg"
    }
];

const movieList = document.getElementById('movie-list');
const loadingIndicator = document.getElementById('loading');
const movieDetail = document.getElementById('movie-detail');

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    displayMovies(query);
});

function displayMovies(query) {
    loadingIndicator.classList.remove('hidden');
    movieList.innerHTML = '';

    setTimeout(() => {
        const filteredMovies = dataVinDiesel.filter(movie => {
            const title = movie.data[0].Judul.toLowerCase();
            return title.includes(query) || query === '';
        });

        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Sampul}" alt="${movie.data[0].Judul}" onload="this.style.visibility='visible'" onerror="this.style.visibility='hidden'">
                <div>
                    <h3>${movie.data[0].Judul}</h3>
                    <p>${movie.data[0].Sinopsis}</p>
                    <button onclick="viewDetails(${dataVinDiesel.indexOf(movie)})">View Details</button>
                </div>
            `;
            movieList.appendChild(movieElement);
        });

        loadingIndicator.classList.add('hidden');
    }, 1000);
}

function viewDetails(index) {
    const movie = dataVinDiesel[index];
    movieDetail.innerHTML = `
        <h2>${movie.data[0].Judul}</h2>
        <p><strong>Pemain:</strong> ${movie.data[0].Pemain}</p>
        <p><strong>Sinopsis:</strong> ${movie.data[0].Sinopsis}</p>
        <p><strong>Tahun:</strong> ${movie.data[1].Tahun}</p>
        <p><strong>Rating:</strong> ${movie.data[1].Rating}</p>
        <p><strong>Durasi:</strong> ${movie.data[1].Durasi}</p>
        <button onclick="downloadCover('${movie.Sampul}', '${movie.data[0].Judul}')">Download Cover</button>
        <button onclick="shareMovie('${movie.data[0].Judul}', '${movie.Sampul}')">Share on WhatsApp</button>
        <a href="${movie.Trailer}" target="_blank">Watch Trailer</a>
    `;
    movieDetail.classList.remove('hidden');
}

function downloadCover(url, title) {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function shareMovie(title, cover) {
    const message = `Check out this movie: ${title}`;
    const link = `https://example.com/${cover}`; // Use an actual link for sharing
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message + ' ' + link)}`, '_blank');
}