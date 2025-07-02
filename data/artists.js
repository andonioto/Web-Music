// Database degli artisti musicali
const artists = [
    // Rock (100 artisti)
    {
        name: "The Beatles",
        genre: "Rock",
        debut: 1960,
        members: 4,
        popularity: 1,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5b241d5f463f5c875ad0c9b3"
    },
    {
        name: "Queen",
        genre: "Rock",
        debut: 1970,
        members: 4,
        popularity: 2,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42"
    },
    {
        name: "Led Zeppelin",
        genre: "Rock",
        debut: 1968,
        members: 4,
        popularity: 3,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/207803ce008388d3427a685254b2e08333d72fda"
    },
    {
        name: "Pink Floyd",
        genre: "Rock",
        debut: 1965,
        members: 5,
        popularity: 4,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07"
    },
    {
        name: "The Rolling Stones",
        genre: "Rock",
        debut: 1962,
        members: 4,
        popularity: 5,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eba04e2e0a80e64f8e95f5cf3c"
    },
    {
        name: "AC/DC",
        genre: "Rock",
        debut: 1973,
        members: 5,
        popularity: 6,
        nationality: "AU",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a70a6c15e8fbc6a9a0d0236"
    },
    {
        name: "Nirvana",
        genre: "Rock",
        debut: 1987,
        members: 3,
        popularity: 7,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Metallica",
        genre: "Rock",
        debut: 1981,
        members: 4,
        popularity: 8,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb69ca98dd3083f1082d740e44"
    },
    {
        name: "U2",
        genre: "Rock",
        debut: 1976,
        members: 4,
        popularity: 9,
        nationality: "IE",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5d46d7e8fe5897f35f81f3a5"
    },
    {
        name: "Guns N' Roses",
        genre: "Rock",
        debut: 1985,
        members: 5,
        popularity: 10,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5a00a58af33a559af8e40f12"
    },
    {
        name: "Foo Fighters",
        genre: "Rock",
        debut: 1994,
        members: 6,
        popularity: 11,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a43b89b573bd4d42e6b5a9a"
    },
    {
        name: "Red Hot Chili Peppers",
        genre: "Rock",
        debut: 1983,
        members: 4,
        popularity: 12,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5fec5593e94104e5e6c7f0a6"
    },
    {
        name: "Radiohead",
        genre: "Rock",
        debut: 1985,
        members: 5,
        popularity: 13,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Who",
        genre: "Rock",
        debut: 1964,
        members: 4,
        popularity: 14,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Green Day",
        genre: "Rock",
        debut: 1986,
        members: 3,
        popularity: 15,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "The Doors",
        genre: "Rock",
        debut: 1965,
        members: 4,
        popularity: 16,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Aerosmith",
        genre: "Rock",
        debut: 1970,
        members: 5,
        popularity: 17,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "The Eagles",
        genre: "Rock",
        debut: 1971,
        members: 5,
        popularity: 18,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Bon Jovi",
        genre: "Rock",
        debut: 1983,
        members: 5,
        popularity: 19,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Fleetwood Mac",
        genre: "Rock",
        debut: 1967,
        members: 5,
        popularity: 20,
        nationality: "UK",
        gender: "Mixed",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "The Police",
        genre: "Rock",
        debut: 1977,
        members: 3,
        popularity: 21,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Clash",
        genre: "Rock",
        debut: 1976,
        members: 4,
        popularity: 22,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Black Sabbath",
        genre: "Rock",
        debut: 1968,
        members: 4,
        popularity: 23,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Deep Purple",
        genre: "Rock",
        debut: 1968,
        members: 5,
        popularity: 24,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "The Kinks",
        genre: "Rock",
        debut: 1964,
        members: 4,
        popularity: 25,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "The Ramones",
        genre: "Rock",
        debut: 1974,
        members: 4,
        popularity: 26,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Pearl Jam",
        genre: "Rock",
        debut: 1990,
        members: 5,
        popularity: 27,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "The Smiths",
        genre: "Rock",
        debut: 1982,
        members: 4,
        popularity: 28,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "R.E.M.",
        genre: "Rock",
        debut: 1980,
        members: 4,
        popularity: 29,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Cure",
        genre: "Rock",
        debut: 1976,
        members: 5,
        popularity: 30,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "ZZ Top",
        genre: "Rock",
        debut: 1969,
        members: 3,
        popularity: 31,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Rush",
        genre: "Rock",
        debut: 1968,
        members: 3,
        popularity: 32,
        nationality: "CA",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Dire Straits",
        genre: "Rock",
        debut: 1977,
        members: 4,
        popularity: 33,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "The Jimi Hendrix Experience",
        genre: "Rock",
        debut: 1966,
        members: 3,
        popularity: 34,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Creedence Clearwater Revival",
        genre: "Rock",
        debut: 1967,
        members: 4,
        popularity: 35,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "The Beach Boys",
        genre: "Rock",
        debut: 1961,
        members: 5,
        popularity: 36,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Lynyrd Skynyrd",
        genre: "Rock",
        debut: 1964,
        members: 7,
        popularity: 37,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Allman Brothers Band",
        genre: "Rock",
        debut: 1969,
        members: 6,
        popularity: 38,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Cream",
        genre: "Rock",
        debut: 1966,
        members: 3,
        popularity: 39,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "The Velvet Underground",
        genre: "Rock",
        debut: 1964,
        members: 4,
        popularity: 40,
        nationality: "US",
        gender: "Mixed",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Scorpions",
        genre: "Rock",
        debut: 1965,
        members: 5,
        popularity: 41,
        nationality: "DE",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Def Leppard",
        genre: "Rock",
        debut: 1977,
        members: 5,
        popularity: 42,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Iron Maiden",
        genre: "Rock",
        debut: 1975,
        members: 6,
        popularity: 43,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Judas Priest",
        genre: "Rock",
        debut: 1969,
        members: 5,
        popularity: 44,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Kiss",
        genre: "Rock",
        debut: 1973,
        members: 4,
        popularity: 45,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "Motörhead",
        genre: "Rock",
        debut: 1975,
        members: 3,
        popularity: 46,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Thin Lizzy",
        genre: "Rock",
        debut: 1969,
        members: 4,
        popularity: 47,
        nationality: "IE",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Van Halen",
        genre: "Rock",
        debut: 1972,
        members: 4,
        popularity: 48,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Yes",
        genre: "Rock",
        debut: 1968,
        members: 5,
        popularity: 49,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Genesis",
        genre: "Rock",
        debut: 1967,
        members: 5,
        popularity: 50,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Muse",
        genre: "Rock",
        debut: 1994,
        members: 3,
        popularity: 51,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Arctic Monkeys",
        genre: "Rock",
        debut: 2002,
        members: 4,
        popularity: 52,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "The Killers",
        genre: "Rock",
        debut: 2001,
        members: 4,
        popularity: 53,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "Kings of Leon",
        genre: "Rock",
        debut: 1999,
        members: 4,
        popularity: 54,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Oasis",
        genre: "Rock",
        debut: 1991,
        members: 5,
        popularity: 55,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Blur",
        genre: "Rock",
        debut: 1988,
        members: 4,
        popularity: 56,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "The Strokes",
        genre: "Rock",
        debut: 1998,
        members: 5,
        popularity: 57,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Linkin Park",
        genre: "Rock",
        debut: 1996,
        members: 6,
        popularity: 58,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "System of a Down",
        genre: "Rock",
        debut: 1994,
        members: 4,
        popularity: 59,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Rage Against the Machine",
        genre: "Rock",
        debut: 1991,
        members: 4,
        popularity: 60,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Soundgarden",
        genre: "Rock",
        debut: 1984,
        members: 4,
        popularity: 61,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "Alice in Chains",
        genre: "Rock",
        debut: 1987,
        members: 4,
        popularity: 62,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Stone Temple Pilots",
        genre: "Rock",
        debut: 1989,
        members: 4,
        popularity: 63,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Audioslave",
        genre: "Rock",
        debut: 2001,
        members: 4,
        popularity: 64,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Temple of the Dog",
        genre: "Rock",
        debut: 1990,
        members: 5,
        popularity: 65,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Velvet Revolver",
        genre: "Rock",
        debut: 2002,
        members: 5,
        popularity: 66,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Them Crooked Vultures",
        genre: "Rock",
        debut: 2009,
        members: 3,
        popularity: 67,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Traveling Wilburys",
        genre: "Rock",
        debut: 1988,
        members: 5,
        popularity: 68,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Crosby, Stills, Nash & Young",
        genre: "Rock",
        debut: 1968,
        members: 4,
        popularity: 69,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Band",
        genre: "Rock",
        debut: 1964,
        members: 5,
        popularity: 70,
        nationality: "CA",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "The Pretenders",
        genre: "Rock",
        debut: 1978,
        members: 4,
        popularity: 71,
        nationality: "UK",
        gender: "Mixed",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Blondie",
        genre: "Rock",
        debut: 1974,
        members: 6,
        popularity: 72,
        nationality: "US",
        gender: "Mixed",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Talking Heads",
        genre: "Rock",
        debut: 1975,
        members: 4,
        popularity: 73,
        nationality: "US",
        gender: "Mixed",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "The Cars",
        genre: "Rock",
        debut: 1976,
        members: 5,
        popularity: 74,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Cheap Trick",
        genre: "Rock",
        debut: 1973,
        members: 4,
        popularity: 75,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Boston",
        genre: "Rock",
        debut: 1976,
        members: 6,
        popularity: 76,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Journey",
        genre: "Rock",
        debut: 1973,
        members: 5,
        popularity: 77,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "Foreigner",
        genre: "Rock",
        debut: 1976,
        members: 6,
        popularity: 78,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "Styx",
        genre: "Rock",
        debut: 1972,
        members: 6,
        popularity: 79,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "REO Speedwagon",
        genre: "Rock",
        debut: 1967,
        members: 5,
        popularity: 80,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Kansas",
        genre: "Rock",
        debut: 1973,
        members: 6,
        popularity: 81,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Toto",
        genre: "Rock",
        debut: 1977,
        members: 7,
        popularity: 82,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Steely Dan",
        genre: "Rock",
        debut: 1972,
        members: 2,
        popularity: 83,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "The Doobie Brothers",
        genre: "Rock",
        debut: 1970,
        members: 4,
        popularity: 84,
        nationality: "US",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "Supertramp",
        genre: "Rock",
        debut: 1969,
        members: 5,
        popularity: 85,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "Electric Light Orchestra",
        genre: "Rock",
        debut: 1970,
        members: 7,
        popularity: 86,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "The Alan Parsons Project",
        genre: "Rock",
        debut: 1975,
        members: 2,
        popularity: 87,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Jethro Tull",
        genre: "Rock",
        debut: 1967,
        members: 5,
        popularity: 88,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "King Crimson",
        genre: "Rock",
        debut: 1968,
        members: 7,
        popularity: 89,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Emerson, Lake & Palmer",
        genre: "Rock",
        debut: 1970,
        members: 3,
        popularity: 90,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "The Moody Blues",
        genre: "Rock",
        debut: 1964,
        members: 5,
        popularity: 91,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Procol Harum",
        genre: "Rock",
        debut: 1967,
        members: 5,
        popularity: 92,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    {
        name: "The Zombies",
        genre: "Rock",
        debut: 1961,
        members: 5,
        popularity: 93,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6dd0e4c4a0f6f3cf1b8b"
    },
    {
        name: "The Animals",
        genre: "Rock",
        debut: 1962,
        members: 5,
        popularity: 94,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e9055b7a6aa4a0e823d4e5a"
    },
    {
        name: "The Yardbirds",
        genre: "Rock",
        debut: 1963,
        members: 5,
        popularity: 95,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8b1a1af7291196ca9c0a38"
    },
    {
        name: "Cream",
        genre: "Rock",
        debut: 1966,
        members: 3,
        popularity: 96,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2170e0ac8f1f5c1471fd5f66"
    },
    {
        name: "Traffic",
        genre: "Rock",
        debut: 1967,
        members: 4,
        popularity: 97,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5cdfa4d7da5151e3e8c03c4f"
    },
    {
        name: "Blind Faith",
        genre: "Rock",
        debut: 1969,
        members: 4,
        popularity: 98,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb62cfd724d39a2d2ae6b1b963"
    },
    {
        name: "Bad Company",
        genre: "Rock",
        debut: 1973,
        members: 4,
        popularity: 99,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
    },
    {
        name: "Free",
        genre: "Rock",
        debut: 1968,
        members: 4,
        popularity: 100,
        nationality: "UK",
        gender: "Male",
        imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4e8cc3e2a1d5d91f2b0ddf63"
    },
    // Pop (100 artisti)
    // Pop
{
    name: "Michael Jackson",
    genre: "Pop",
    debut: 1964,
    members: 1,
    popularity: 1,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Madonna",
    genre: "Pop",
    debut: 1982,
    members: 1,
    popularity: 2,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb96b3becd5da8ebb6d1b0eab0"
},
{
    name: "Beyoncé",
    genre: "Pop",
    debut: 1997,
    members: 1,
    popularity: 3,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb12e3f20d05a8d6cfde988715"
},
{
    name: "Taylor Swift",
    genre: "Pop",
    debut: 2006,
    members: 1,
    popularity: 4,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc1972f631"
},
{
    name: "Adele",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 5,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17"
},
{
    name: "Ed Sheeran",
    genre: "Pop",
    debut: 2011,
    members: 1,
    popularity: 6,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb3bcef85e105dfc42399ef0c2"
},
{
    name: "Rihanna",
    genre: "Pop",
    debut: 2005,
    members: 1,
    popularity: 7,
    nationality: "BB",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb99e4fca7c0b7cb166d915789"
},
{
    name: "Lady Gaga",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 8,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8e83939c1ac8f1b5fb9e7f26"
},
{
    name: "Bruno Mars",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 9,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7f51580c83cc68f12c72eb86"
},
{
    name: "Katy Perry",
    genre: "Pop",
    debut: 2001,
    members: 1,
    popularity: 10,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9e3acf1eaf3b8846e836f441"
},
{
    name: "Justin Bieber",
    genre: "Pop",
    debut: 2009,
    members: 1,
    popularity: 11,
    nationality: "CA",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea98"
},
{
    name: "Ariana Grande",
    genre: "Pop",
    debut: 2011,
    members: 1,
    popularity: 12,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952"
},
{
    name: "Coldplay",
    genre: "Pop",
    debut: 1996,
    members: 4,
    popularity: 13,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3"
},
{
    name: "Maroon 5",
    genre: "Pop",
    debut: 1994,
    members: 5,
    popularity: 14,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4838f042479e43a7ee4e0c3f"
},
{
    name: "Dua Lipa",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 15,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8858"
},
{
    name: "The Weeknd",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 16,
    nationality: "CA",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5ebf5c10cb5c1c6a2cbb2f1dfe6"
},
{
    name: "Billie Eilish",
    genre: "Pop",
    debut: 2016,
    members: 1,
    popularity: 17,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7b9745289c1765196517d409"
},
{
    name: "Shawn Mendes",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 18,
    nationality: "CA",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0373e57fa075d30d5eb3af1a"
},
{
    name: "Selena Gomez",
    genre: "Pop",
    debut: 2009,
    members: 1,
    popularity: 19,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828"
},
{
    name: "Post Malone",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 20,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5ebb894ef9fa437b0389c5567cc"
},
{
    name: "Imagine Dragons",
    genre: "Pop",
    debut: 2008,
    members: 4,
    popularity: 21,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e"
},
{
    name: "Shakira",
    genre: "Pop",
    debut: 1990,
    members: 1,
    popularity: 22,
    nationality: "CO",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eba3a7cba1b59a8c6b82d29b5c"
},
{
    name: "Sam Smith",
    genre: "Pop",
    debut: 2012,
    members: 1,
    popularity: 23,
    nationality: "UK",
    gender: "Non-Binary",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb10ca40ea0b0b5082dba0ff75"
},
{
    name: "Miley Cyrus",
    genre: "Pop",
    debut: 2006,
    members: 1,
    popularity: 24,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7e1fbc7f5f247d4e041f2528"
},
{
    name: "Harry Styles",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 25,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb1487a2cce8e7c9539d1694cb"
},
{
    name: "Camila Cabello",
    genre: "Pop",
    debut: 2012,
    members: 1,
    popularity: 26,
    nationality: "CU",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0fd01a5a28fe4186b34c4b21"
},
{
    name: "Charlie Puth",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 27,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7ef2d8a71d3cd555a508c009"
},
{
    name: "Halsey",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 28,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb33c009a358936f1f28e82f6c"
},
{
    name: "Demi Lovato",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 29,
    nationality: "US",
    gender: "Non-Binary",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7b2e7a1e180a4f5d5f953c5b"
},
{
    name: "Sia",
    genre: "Pop",
    debut: 1997,
    members: 1,
    popularity: 30,
    nationality: "AU",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6a8c80f3ede195f53f6c5eee"
},
{
    name: "OneRepublic",
    genre: "Pop",
    debut: 2002,
    members: 5,
    popularity: 31,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4a169f33da6406c6d93b58a3"
},
{
    name: "Ellie Goulding",
    genre: "Pop",
    debut: 2009,
    members: 1,
    popularity: 32,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6e0c0c7f22a12618f4412dea"
},
{
    name: "Zayn",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 33,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lana Del Rey",
    genre: "Pop",
    debut: 2005,
    members: 1,
    popularity: 34,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb676ac28cae5560c5ef5a1ec8"
},
{
    name: "NSYNC",
    genre: "Pop",
    debut: 1995,
    members: 5,
    popularity: 35,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a8e9b1c7f339c0d5d4b2c9a"
},
{
    name: "Backstreet Boys",
    genre: "Pop",
    debut: 1993,
    members: 5,
    popularity: 36,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7c8b6b2c414c3351ca71ff48"
},
{
    name: "Britney Spears",
    genre: "Pop",
    debut: 1998,
    members: 1,
    popularity: 37,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb53237d078a42d3d9052d2a6c"
},
{
    name: "Christina Aguilera",
    genre: "Pop",
    debut: 1999,
    members: 1,
    popularity: 38,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4c4547d332b5ff259f850f2e"
},
{
    name: "Spice Girls",
    genre: "Pop",
    debut: 1994,
    members: 5,
    popularity: 39,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8f1e5d8c979b1c9b8fec165a"
},
{
    name: "Kylie Minogue",
    genre: "Pop",
    debut: 1987,
    members: 1,
    popularity: 40,
    nationality: "AU",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9f8957ec8d3ebe3f7b5a7ed3"
},
{
    name: "Robbie Williams",
    genre: "Pop",
    debut: 1990,
    members: 1,
    popularity: 41,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4856a7e9c6371fe2f8e5e0b8"
},
{
    name: "Celine Dion",
    genre: "Pop",
    debut: 1981,
    members: 1,
    popularity: 42,
    nationality: "CA",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8fba7b2f6a1af87c4b5b0cbd"
},
{
    name: "Enrique Iglesias",
    genre: "Pop",
    debut: 1995,
    members: 1,
    popularity: 43,
    nationality: "ES",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9fd33b9e6c9e75c1c7ed9d6e"
},
{
    name: "Avril Lavigne",
    genre: "Pop",
    debut: 2002,
    members: 1,
    popularity: 44,
    nationality: "CA",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7d6a13d76c9f3bdb50c8f6e5"
},
{
    name: "Kelly Clarkson",
    genre: "Pop",
    debut: 2002,
    members: 1,
    popularity: 45,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "P!nk",
    genre: "Pop",
    debut: 2000,
    members: 1,
    popularity: 46,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7bbad5b73d46b4f69c616ae3"
},
{
    name: "Alicia Keys",
    genre: "Pop",
    debut: 2001,
    members: 1,
    popularity: 47,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2aa26b955786bce4bc306238"
},
{
    name: "Usher",
    genre: "Pop",
    debut: 1994,
    members: 1,
    popularity: 48,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8ac5d7c4defd1f4ab8762889"
},
{
    name: "Jennifer Lopez",
    genre: "Pop",
    debut: 1999,
    members: 1,
    popularity: 49,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eba3a7cba1b59a8c6b82d29b5c"
},
{
    name: "Jessie J",
    genre: "Pop",
    debut: 2011,
    members: 1,
    popularity: 50,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4c173eee2d3c08380f753fd6"
},
{
    name: "Meghan Trainor",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 51,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb1a3c3de8b933f2bba7a3accf"
},
{
    name: "Shania Twain",
    genre: "Pop",
    debut: 1993,
    members: 1,
    popularity: 52,
    nationality: "CA",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9e2a94c94e7edd4c2afc0630"
},
{
    name: "Cher",
    genre: "Pop",
    debut: 1965,
    members: 1,
    popularity: 53,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0db8dbd9e1fe6e0d05b2f5a9"
},
{
    name: "Tina Turner",
    genre: "Pop",
    debut: 1958,
    members: 1,
    popularity: 54,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "Olivia Rodrigo",
    genre: "Pop",
    debut: 2020,
    members: 1,
    popularity: 55,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb87d3811a78930acd7a1e7c50"
},
{
    name: "Lorde",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 56,
    nationality: "NZ",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb1a84c3e38a3ec0c90c8e4f5f"
},
{
    name: "Troye Sivan",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 57,
    nationality: "AU",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7d3811a78930acd7a1e7c50"
},
{
    name: "Doja Cat",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 58,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb727a2ac15eeacb495373f7e0"
},
{
    name: "Lizzo",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 59,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Lil Nas X",
    genre: "Pop",
    debut: 2018,
    members: 1,
    popularity: 60,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb5d874e59fd1a196ee6be3e4e"
},
{
    name: "Tones and I",
    genre: "Pop",
    debut: 2018,
    members: 1,
    popularity: 61,
    nationality: "AU",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb98d5d0e8041ee25ad6b4a773"
},
{
    name: "Lewis Capaldi",
    genre: "Pop",
    debut: 2017,
    members: 1,
    popularity: 62,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9d2c862fea745301d7d223bb"
},
{
    name: "Niall Horan",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 63,
    nationality: "IE",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9d2c862fea745301d7d223bb"
},
{
    name: "Louis Tomlinson",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 64,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Liam Payne",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 65,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Normani",
    genre: "Pop",
    debut: 2012,
    members: 1,
    popularity: 66,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Fifth Harmony",
    genre: "Pop",
    debut: 2012,
    members: 5,
    popularity: 67,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Little Mix",
    genre: "Pop",
    debut: 2011,
    members: 4,
    popularity: 68,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Jonas Brothers",
    genre: "Pop",
    debut: 2005,
    members: 3,
    popularity: 69,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Kesha",
    genre: "Pop",
    debut: 2009,
    members: 1,
    popularity: 70,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Pitbull",
    genre: "Pop",
    debut: 2004,
    members: 1,
    popularity: 71,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Flo Rida",
    genre: "Pop",
    debut: 2007,
    members: 1,
    popularity: 72,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Jason Derulo",
    genre: "Pop",
    debut: 2009,
    members: 1,
    popularity: 73,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Zara Larsson",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 74,
    nationality: "SE",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Tove Lo",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 75,
    nationality: "SE",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Sigrid",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 76,
    nationality: "NO",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Ava Max",
    genre: "Pop",
    debut: 2018,
    members: 1,
    popularity: 77,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Bebe Rexha",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 78,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Rita Ora",
    genre: "Pop",
    debut: 2012,
    members: 1,
    popularity: 79,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Charli XCX",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 80,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Anne-Marie",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 81,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Jess Glynne",
    genre: "Pop",
    debut: 2014,
    members: 1,
    popularity: 82,
    nationality: "UK",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Clean Bandit",
    genre: "Pop",
    debut: 2008,
    members: 3,
    popularity: 83,
    nationality: "UK",
    gender: "Mixed",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Zedd",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 84,
    nationality: "RU",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Calvin Harris",
    genre: "Pop",
    debut: 2007,
    members: 1,
    popularity: 85,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "David Guetta",
    genre: "Pop",
    debut: 2002,
    members: 1,
    popularity: 86,
    nationality: "FR",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Avicii",
    genre: "Pop",
    debut: 2011,
    members: 1,
    popularity: 87,
    nationality: "SE",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Marshmello",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 88,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "The Chainsmokers",
    genre: "Pop",
    debut: 2012,
    members: 2,
    popularity: 89,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Alan Walker",
    genre: "Pop",
    debut: 2015,
    members: 1,
    popularity: 90,
    nationality: "NO",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Kygo",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 91,
    nationality: "NO",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Martin Garrix",
    genre: "Pop",
    debut: 2012,
    members: 1,
    popularity: 92,
    nationality: "NL",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Tiësto",
    genre: "Pop",
    debut: 1994,
    members: 1,
    popularity: 93,
    nationality: "NL",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Major Lazer",
    genre: "Pop",
    debut: 2008,
    members: 3,
    popularity: 94,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Diplo",
    genre: "Pop",
    debut: 2004,
    members: 1,
    popularity: 95,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "DJ Snake",
    genre: "Pop",
    debut: 2013,
    members: 1,
    popularity: 96,
    nationality: "FR",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Skrillex",
    genre: "Pop",
    debut: 2010,
    members: 1,
    popularity: 97,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Steve Aoki",
    genre: "Pop",
    debut: 2008,
    members: 1,
    popularity: 98,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Disclosure",
    genre: "Pop",
    debut: 2010,
    members: 2,
    popularity: 99,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
{
    name: "Galantis",
    genre: "Pop",
    debut: 2012,
    members: 2,
    popularity: 100,
    nationality: "SE",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb0e08ea2c4d6789fbf5cbe0aa"
},
// Rap/Hip Hop
{
    name: "Eminem",
    genre: "Rap",
    debut: 1996,
    members: 1,
    popularity: 1,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb3d3d4f3774a2e8d7c998eafa"
},
{
    name: "Jay-Z",
    genre: "Rap",
    debut: 1996,
    members: 1,
    popularity: 2,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb7e1fbc7f5f247d4e041f2528"
},
{
    name: "Tupac Shakur",
    genre: "Rap",
    debut: 1991,
    members: 1,
    popularity: 3,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a8e9b1c7f339c0d5d4b2c9a"
},
{
    name: "The Notorious B.I.G.",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 4,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb15a5333f1d326bd5ab858a56"
},
{
    name: "Kendrick Lamar",
    genre: "Rap",
    debut: 2010,
    members: 1,
    popularity: 5,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb2783a79eee2bda9a1c93db28"
},
{
    name: "Drake",
    genre: "Rap",
    debut: 2006,
    members: 1,
    popularity: 6,
    nationality: "CA",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
},
{
    name: "Kanye West",
    genre: "Rap",
    debut: 2004,
    members: 1,
    popularity: 7,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a"
},
{
    name: "Snoop Dogg",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 8,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a753f4189a97e4117177391"
},
{
    name: "Dr. Dre",
    genre: "Rap",
    debut: 1984,
    members: 1,
    popularity: 9,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6ce202b0e71263ed1e0fe475"
},
{
    name: "Nas",
    genre: "Rap",
    debut: 1991,
    members: 1,
    popularity: 10,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8e0ce2c63be4c4df2c775bd2"
},
{
    name: "Wu-Tang Clan",
    genre: "Rap",
    debut: 1992,
    members: 9,
    popularity: 11,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "Run-DMC",
    genre: "Rap",
    debut: 1981,
    members: 3,
    popularity: 12,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "Public Enemy",
    genre: "Rap",
    debut: 1982,
    members: 5,
    popularity: 13,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "Beastie Boys",
    genre: "Rap",
    debut: 1981,
    members: 3,
    popularity: 14,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "OutKast",
    genre: "Rap",
    debut: 1992,
    members: 2,
    popularity: 15,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb9a3a9bf2ac3f1e6e29c90ddd"
},
{
    name: "J. Cole",
    genre: "Rap",
    debut: 2007,
    members: 1,
    popularity: 16,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb80f8e21b47418d3b8beb3892"
},
{
    name: "Travis Scott",
    genre: "Rap",
    debut: 2012,
    members: 1,
    popularity: 17,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb19c2790b8c20dfc2e0e0d753"
},
{
    name: "A$AP Rocky",
    genre: "Rap",
    debut: 2011,
    members: 1,
    popularity: 18,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb64e5b25340d1f62a4e5b5ef0"
},
{
    name: "Tyler, The Creator",
    genre: "Rap",
    debut: 2009,
    members: 1,
    popularity: 19,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada"
},
{
    name: "Cardi B",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 20,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb6b752cafb5da52c6e2fe3f9c"
},
{
    name: "Nicki Minaj",
    genre: "Rap",
    debut: 2007,
    members: 1,
    popularity: 21,
    nationality: "TT",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Megan Thee Stallion",
    genre: "Rap",
    debut: 2016,
    members: 1,
    popularity: 22,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Missy Elliott",
    genre: "Rap",
    debut: 1997,
    members: 1,
    popularity: 23,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lauryn Hill",
    genre: "Rap",
    debut: 1993,
    members: 1,
    popularity: 24,
    nationality: "US",
    gender: "Female",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Ice Cube",
    genre: "Rap",
    debut: 1986,
    members: 1,
    popularity: 25,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "50 Cent",
    genre: "Rap",
    debut: 1996,
    members: 1,
    popularity: 26,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Wayne",
    genre: "Rap",
    debut: 1995,
    members: 1,
    popularity: 27,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Future",
    genre: "Rap",
    debut: 2010,
    members: 1,
    popularity: 28,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Young Thug",
    genre: "Rap",
    debut: 2011,
    members: 1,
    popularity: 29,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Migos",
    genre: "Rap",
    debut: 2009,
    members: 3,
    popularity: 30,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Uzi Vert",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 31,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "21 Savage",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 32,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Juice WRLD",
    genre: "Rap",
    debut: 2017,
    members: 1,
    popularity: 33,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "XXXTentacion",
    genre: "Rap",
    debut: 2013,
    members: 1,
    popularity: 34,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Pop Smoke",
    genre: "Rap",
    debut: 2018,
    members: 1,
    popularity: 35,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Mac Miller",
    genre: "Rap",
    debut: 2007,
    members: 1,
    popularity: 36,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Kid Cudi",
    genre: "Rap",
    debut: 2008,
    members: 1,
    popularity: 37,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Chance the Rapper",
    genre: "Rap",
    debut: 2012,
    members: 1,
    popularity: 38,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Logic",
    genre: "Rap",
    debut: 2009,
    members: 1,
    popularity: 39,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "A Tribe Called Quest",
    genre: "Rap",
    debut: 1985,
    members: 4,
    popularity: 40,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "N.W.A",
    genre: "Rap",
    debut: 1986,
    members: 5,
    popularity: 41,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "De La Soul",
    genre: "Rap",
    debut: 1987,
    members: 3,
    popularity: 42,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "The Roots",
    genre: "Rap",
    debut: 1987,
    members: 11,
    popularity: 43,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Cypress Hill",
    genre: "Rap",
    debut: 1988,
    members: 4,
    popularity: 44,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Bone Thugs-n-Harmony",
    genre: "Rap",
    debut: 1991,
    members: 5,
    popularity: 45,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Mos Def",
    genre: "Rap",
    debut: 1994,
    members: 1,
    popularity: 46,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Common",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 47,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Talib Kweli",
    genre: "Rap",
    debut: 1995,
    members: 1,
    popularity: 48,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "The Game",
    genre: "Rap",
    debut: 2002,
    members: 1,
    popularity: 49,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Ludacris",
    genre: "Rap",
    debut: 1998,
    members: 1,
    popularity: 50,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "T.I.",
    genre: "Rap",
    debut: 2001,
    members: 1,
    popularity: 51,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Baby",
    genre: "Rap",
    debut: 2017,
    members: 1,
    popularity: 52,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "DaBaby",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 53,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Roddy Ricch",
    genre: "Rap",
    debut: 2017,
    members: 1,
    popularity: 54,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Gunna",
    genre: "Rap",
    debut: 2016,
    members: 1,
    popularity: 55,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Durk",
    genre: "Rap",
    debut: 2011,
    members: 1,
    popularity: 56,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Polo G",
    genre: "Rap",
    debut: 2018,
    members: 1,
    popularity: 57,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Jack Harlow",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 58,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Playboi Carti",
    genre: "Rap",
    debut: 2011,
    members: 1,
    popularity: 59,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Trippie Redd",
    genre: "Rap",
    debut: 2014,
    members: 1,
    popularity: 60,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Tjay",
    genre: "Rap",
    debut: 2017,
    members: 1,
    popularity: 61,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Yachty",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 62,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Pump",
    genre: "Rap",
    debut: 2016,
    members: 1,
    popularity: 63,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Peep",
    genre: "Rap",
    debut: 2015,
    members: 1,
    popularity: 64,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Lil Skies",
    genre: "Rap",
    debut: 2016,
    members: 1,
    popularity: 65,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Rich The Kid",
    genre: "Rap",
    debut: 2013,
    members: 1,
    popularity: 66,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "YG",
    genre: "Rap",
    debut: 2009,
    members: 1,
    popularity: 67,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "ScHoolboy Q",
    genre: "Rap",
    debut: 2008,
    members: 1,
    popularity: 68,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "A$AP Ferg",
    genre: "Rap",
    debut: 2013,
    members: 1,
    popularity: 69,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Vince Staples",
    genre: "Rap",
    debut: 2010,
    members: 1,
    popularity: 70,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Joey Bada$$",
    genre: "Rap",
    debut: 2012,
    members: 1,
    popularity: 71,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Denzel Curry",
    genre: "Rap",
    debut: 2011,
    members: 1,
    popularity: 72,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Pusha T",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 73,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Big Sean",
    genre: "Rap",
    debut: 2007,
    members: 1,
    popularity: 74,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "2 Chainz",
    genre: "Rap",
    debut: 1997,
    members: 1,
    popularity: 75,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Rick Ross",
    genre: "Rap",
    debut: 2006,
    members: 1,
    popularity: 76,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Wiz Khalifa",
    genre: "Rap",
    debut: 2005,
    members: 1,
    popularity: 77,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Meek Mill",
    genre: "Rap",
    debut: 2008,
    members: 1,
    popularity: 78,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Gucci Mane",
    genre: "Rap",
    debut: 2001,
    members: 1,
    popularity: 79,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Jeezy",
    genre: "Rap",
    debut: 2001,
    members: 1,
    popularity: 80,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Busta Rhymes",
    genre: "Rap",
    debut: 1989,
    members: 1,
    popularity: 81,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "DMX",
    genre: "Rap",
    debut: 1998,
    members: 1,
    popularity: 82,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Method Man",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 83,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Ghostface Killah",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 84,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Raekwon",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 85,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "GZA",
    genre: "Rap",
    debut: 1990,
    members: 1,
    popularity: 86,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "RZA",
    genre: "Rap",
    debut: 1991,
    members: 1,
    popularity: 87,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Ol' Dirty Bastard",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 88,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Inspectah Deck",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 89,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "U-God",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 90,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Masta Killa",
    genre: "Rap",
    debut: 1992,
    members: 1,
    popularity: 91,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Cappadonna",
    genre: "Rap",
    debut: 1995,
    members: 1,
    popularity: 92,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Redman",
    genre: "Rap",
    debut: 1990,
    members: 1,
    popularity: 93,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "LL Cool J",
    genre: "Rap",
    debut: 1984,
    members: 1,
    popularity: 94,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "KRS-One",
    genre: "Rap",
    debut: 1985,
    members: 1,
    popularity: 95,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Rakim",
    genre: "Rap",
    debut: 1986,
    members: 1,
    popularity: 96,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Big Daddy Kane",
    genre: "Rap",
    debut: 1986,
    members: 1,
    popularity: 97,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Slick Rick",
    genre: "Rap",
    debut: 1985,
    members: 1,
    popularity: 98,
    nationality: "UK",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Kurtis Blow",
    genre: "Rap",
    debut: 1979,
    members: 1,
    popularity: 99,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
},
{
    name: "Grandmaster Flash",
    genre: "Rap",
    debut: 1978,
    members: 1,
    popularity: 100,
    nationality: "US",
    gender: "Male",
    imageUrl: "https://i.scdn.co/image/ab6761610000e5eb8c5ce3e5539d92fe07692f7c"
}
]