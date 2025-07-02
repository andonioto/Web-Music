// Flag per verificare il caricamento degli artisti
let artistsLoaded = false;

// Variabili globali
let currentArtist = null;
let attemptsLeft = 10;
let gameEnded = false;
let todayDate = new Date().toDateString();
let currentGameMode = 'daily'; // 'daily' o 'random'
let dailyGamePlayed = false; // Nuova variabile per tracciare se la modalità giornaliera è stata giocata

// Elementi DOM - dichiarati all'inizio ma inizializzati dopo il caricamento del DOM
let artistSearchInput;
let submitGuessButton;
let autocompleteResults;
let attemptsList;
let attemptsLeftSpan;
let timerSpan;
let gameResult;
let successMessage;
let failureMessage;
let correctArtistSpan;
let revealArtistSpan;
let shareResultButton;
let showHowToPlayButton;
let howToPlayModal;
let closeModalButton;
let playAgainButton;
let playAgainFailButton;

// Elementi DOM aggiuntivi per il nuovo layout
let gameMenu;
let gameContainer;
let dailyChallengeBtn;
let randomChallengeBtn;
let backToMenuBtn;
let gameModeIndicator;
let tryRandomModeBtn;
let tryRandomModeFailBtn;

// Inizializzazione del gioco
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM caricato, inizializzazione elementi...");
    
    // Inizializza gli elementi DOM
    initDOMElements();
    
    // Verifica che il database degli artisti sia caricato
    if (typeof artists === 'undefined' || !artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile!");
        alert("Errore nel caricamento del database degli artisti. Ricarica la pagina.");
        return;
    }
    
    // Imposta il flag di caricamento
    artistsLoaded = true;
    console.log("Database artisti caricato correttamente. Artisti trovati:", artists.length);
    
    initGame();
    setupEventListeners();
});

// Funzione per inizializzare gli elementi DOM
function initDOMElements() {
    artistSearchInput = document.getElementById('artist-search');
    submitGuessButton = document.getElementById('submit-guess');
    autocompleteResults = document.getElementById('autocomplete-results');
    attemptsList = document.getElementById('attempts-list');
    attemptsLeftSpan = document.querySelector('#attempts-left span');
    timerSpan = document.querySelector('#timer span');
    gameResult = document.getElementById('game-result');
    successMessage = document.getElementById('success-message');
    failureMessage = document.getElementById('failure-message');
    correctArtistSpan = document.getElementById('correct-artist');
    revealArtistSpan = document.getElementById('reveal-artist');
    shareResultButton = document.getElementById('share-result');
    showHowToPlayButton = document.getElementById('show-how-to-play');
    howToPlayModal = document.getElementById('how-to-play');
    closeModalButton = document.querySelector('.close-modal');
    playAgainButton = document.getElementById('play-again');
    playAgainFailButton = document.getElementById('play-again-fail');

    // Elementi DOM aggiuntivi per il nuovo layout
    gameMenu = document.getElementById('game-menu');
    gameContainer = document.getElementById('game-container');
    dailyChallengeBtn = document.querySelector('#daily-challenge .menu-button');
    randomChallengeBtn = document.querySelector('#random-challenge .menu-button');
    backToMenuBtn = document.getElementById('back-to-menu');
    gameModeIndicator = document.querySelector('#game-mode-indicator span');
    tryRandomModeBtn = document.getElementById('try-random-mode');
    tryRandomModeFailBtn = document.getElementById('try-random-mode-fail');
    
    console.log("Elementi DOM inizializzati:", {
        artistSearchInput: !!artistSearchInput,
        submitGuessButton: !!submitGuessButton,
        gameMenu: !!gameMenu,
        dailyChallengeBtn: !!dailyChallengeBtn,
        randomChallengeBtn: !!randomChallengeBtn
    });
}

// Funzione per inizializzare il gioco
function initGame() {
    // Verifica che gli elementi DOM siano stati inizializzati
    if (!artistsLoaded || !gameMenu || !dailyChallengeBtn || !randomChallengeBtn) {
        console.error("Elementi DOM o database artisti non disponibili!");
        return;
    }
    
    // Configura il menù iniziale
    setupMenuEventListeners();
    
    // Controlla se c'è una partita in corso
    const savedGameState = localStorage.getItem('spotleGameState');
    const savedDate = localStorage.getItem('spotleDate');
    
    if (savedGameState && savedDate === todayDate) {
        // Carica la partita in corso
        const gameState = JSON.parse(savedGameState);
        currentArtist = gameState.currentArtist;
        attemptsLeft = gameState.attemptsLeft;
        gameEnded = gameState.gameEnded;
        currentGameMode = gameState.gameMode || 'daily';
        
        // Se è la modalità giornaliera e il gioco è finito, imposta il flag
        if (currentGameMode === 'daily' && gameEnded) {
            dailyGamePlayed = true;
        }
        
        // Ripristina i tentativi precedenti
        if (gameState.attempts) {
            gameState.attempts.forEach(attempt => {
                displayAttempt(attempt.artist, attempt.result);
            });
        }
        
        // Se il gioco è finito, mostra il risultato
        if (gameEnded) {
            showGameResult(gameState.won);
        }
        
        // Se c'era una partita in corso, mostra direttamente il gioco
        if (currentGameMode) {
            showGameInterface(currentGameMode);
        }
    }
    
    // Aggiorna il contatore dei tentativi
    updateAttemptsLeft();
    
    // Avvia il timer per il prossimo artista
    updateNextArtistTimer();
    setInterval(updateNextArtistTimer, 1000);
}

// Funzione per configurare gli event listener del menù
function setupMenuEventListeners() {
    if (!artistsLoaded || !dailyChallengeBtn || !randomChallengeBtn) {
        console.error("Elementi DOM o database artisti non disponibili per setupMenuEventListeners!");
        return;
    }
    
    console.log("Configurazione event listener del menu...");
    
    dailyChallengeBtn.addEventListener('click', () => {
        console.log("Click su Artista del Giorno");
        startGame('daily');
    });
    
    randomChallengeBtn.addEventListener('click', () => {
        console.log("Click su Modalità Casuale");
        startGame('random');
    });
    
    backToMenuBtn.addEventListener('click', () => {
        gameContainer.classList.add('hidden');
        gameMenu.classList.remove('hidden');
    });
    
    tryRandomModeBtn.addEventListener('click', () => {
        startGame('random');
    });
    
    tryRandomModeFailBtn.addEventListener('click', () => {
        startGame('random');
    });
}

// Funzione per avviare il gioco nella modalità specificata
function startGame(mode) {
    console.log("Avvio gioco in modalità:", mode);
    
    if (!artistsLoaded) {
        console.error("Database degli artisti non disponibile per startGame!");
        alert("Errore nel caricamento del database degli artisti. Ricarica la pagina.");
        return;
    }
    
    currentGameMode = mode;
    
    // Verifica se la modalità giornaliera è già stata giocata oggi
    const savedGameState = localStorage.getItem('spotleGameState');
    const savedDate = localStorage.getItem('spotleDate');
    
    if (mode === 'daily' && savedGameState && savedDate === todayDate) {
        const gameState = JSON.parse(savedGameState);
        if (gameState.gameMode === 'daily' && gameState.gameEnded) {
            // Se la modalità giornaliera è già stata giocata oggi e il gioco è finito,
            // mostra direttamente il risultato invece di iniziare un nuovo gioco
            currentArtist = gameState.currentArtist;
            attemptsLeft = gameState.attemptsLeft;
            gameEnded = true;
            dailyGamePlayed = true;
            
            // Mostra l'interfaccia di gioco
            showGameInterface(mode);
            
            // Ripristina i tentativi precedenti
            if (gameState.attempts) {
                attemptsList.innerHTML = ''; // Pulisci prima i tentativi esistenti
                gameState.attempts.forEach(attempt => {
                    displayAttempt(attempt.artist, attempt.result);
                });
            }
            
            // Mostra il risultato
            showGameResult(gameState.won);
            return;
        }
    }
    
    // Resetta lo stato del gioco
    resetGame();
    
    console.log("Artista selezionato:", currentArtist ? currentArtist.name : "nessuno");
    
    // Aggiorna l'indicatore della modalità
    gameModeIndicator.textContent = mode === 'daily' ? 'Artista del Giorno' : 'Modalità Casuale';
    
    // Mostra l'interfaccia di gioco
    showGameInterface(mode);
}

// Funzione per mostrare l'interfaccia di gioco
function showGameInterface(mode) {
    if (!gameMenu || !gameContainer) {
        console.error("Elementi DOM non disponibili per showGameInterface!");
        return;
    }
    
    gameMenu.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    gameResult.classList.add('hidden');
    successMessage.classList.add('hidden');
    failureMessage.classList.add('hidden');
}

// Funzione per configurare gli event listener
function setupEventListeners() {
    if (!artistsLoaded || !artistSearchInput || !submitGuessButton) {
        console.error("Elementi DOM o database artisti non disponibili per setupEventListeners!");
        return;
    }
    
    console.log("Configurazione event listener del gioco...");
    
    // Event listener per la ricerca dell'artista
    artistSearchInput.addEventListener('input', handleArtistSearch);
    
    // Event listener per il submit del tentativo
    submitGuessButton.addEventListener('click', handleGuessSubmit);
    
    // Event listener per il tasto Enter
    artistSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !gameEnded) {
            handleGuessSubmit();
        }
    });
    
    // Event listener per la condivisione del risultato
    shareResultButton.addEventListener('click', shareResult);
    
    // Event listener per il modal "Come si gioca"
    showHowToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('hidden');
    });
    
    closeModalButton.addEventListener('click', () => {
        howToPlayModal.classList.add('hidden');
    });
    
    // Chiudi il modal cliccando fuori
    window.addEventListener('click', (e) => {
        if (e.target === howToPlayModal) {
            howToPlayModal.classList.add('hidden');
        }
    });
    
    // Chiudi l'autocomplete quando si clicca fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // Event listener per il pulsante "Gioca di nuovo"
    playAgainButton.addEventListener('click', startNewGame);
    playAgainFailButton.addEventListener('click', startNewGame);
}

// Funzione per resettare il gioco
function resetGame() {
    // Verifica che artists sia definito prima di usarlo
    if (!artistsLoaded || !artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile per resetGame!");
        return;
    }
    
    if (currentGameMode === 'daily') {
        // Seleziona l'artista del giorno
        currentArtist = getArtistOfTheDay();
    } else {
        // Seleziona un artista casuale
        const randomIndex = Math.floor(Math.random() * artists.length);
        currentArtist = artists[randomIndex];
    }
    
    attemptsLeft = 10;
    gameEnded = false;
    
    // Salva lo stato iniziale
    saveGameState([], false);
    
    // Aggiorna la data
    localStorage.setItem('spotleDate', todayDate);
    
    // Pulisci l'interfaccia
    if (attemptsList) attemptsList.innerHTML = '';
    if (gameResult) gameResult.classList.add('hidden');
    if (successMessage) successMessage.classList.add('hidden');
    if (failureMessage) failureMessage.classList.add('hidden');
    
    // Aggiorna il contatore dei tentativi
    updateAttemptsLeft();
}

// Funzione per ottenere l'artista del giorno
function getArtistOfTheDay() {
    // Verifica che artists sia definito
    if (!artistsLoaded || !artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile per getArtistOfTheDay!");
        return null;
    }
    
    // Usa la data come seed per selezionare un artista
    const today = new Date();
    const dateString = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    const seed = parseInt(dateString);
    
    // Genera un indice pseudo-casuale ma deterministico
    const index = seed % artists.length;
    return artists[index];
}

// Funzione per iniziare una nuova partita
function startNewGame() {
    // Verifica che artists sia definito
    if (!artistsLoaded || !artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile per startNewGame!");
        return;
    }
    
    // Seleziona un nuovo artista casuale (non basato sulla data)
    const randomIndex = Math.floor(Math.random() * artists.length);
    currentArtist = artists[randomIndex];
    
    // Resetta lo stato del gioco
    attemptsLeft = 10;
    gameEnded = false;
    
    // Pulisci l'interfaccia
    if (attemptsList) attemptsList.innerHTML = '';
    if (gameResult) gameResult.classList.add('hidden');
    if (successMessage) successMessage.classList.add('hidden');
    if (failureMessage) failureMessage.classList.add('hidden');
    
    // Aggiorna il contatore dei tentativi
    updateAttemptsLeft();
    
    // Salva il nuovo stato
    saveGameState([], false);
}

// Funzione per gestire la ricerca dell'artista (migliorata)
function handleArtistSearch() {
    if (!artistsLoaded || !artistSearchInput || !autocompleteResults) {
        console.error("Elementi DOM o database artisti non disponibili per handleArtistSearch!");
        return;
    }
    
    const searchTerm = artistSearchInput.value.trim().toLowerCase();
    
    if (searchTerm.length < 2) {
        autocompleteResults.style.display = 'none';
        return;
    }
    
    // Verifica che artists sia definito
    if (!artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile!");
        return;
    }
    
    // Algoritmo di ricerca migliorato
    const filteredArtists = artists.filter(artist => {
        // Ricerca per nome (priorità alta)
        if (artist.name.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Ricerca per genere (priorità media)
        if (artist.genre && artist.genre.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Ricerca per nazionalità (priorità bassa)
        if (artist.nationality) {
            const nationality = getCountryName(artist.nationality).toLowerCase();
            if (nationality.includes(searchTerm)) {
                return true;
            }
        }
        
        return false;
    })
    .sort((a, b) => {
        // Ordina per rilevanza
        const aNameMatch = a.name.toLowerCase().includes(searchTerm);
        const bNameMatch = b.name.toLowerCase().includes(searchTerm);
        
        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;
        
        // Se entrambi corrispondono al nome o nessuno corrisponde, ordina per popolarità
        return a.popularity - b.popularity;
    })
    .slice(0, 5); // Limita a 5 risultati
    
    // Mostra i risultati dell'autocomplete
    displayAutocompleteResults(filteredArtists);
}

// Funzione per ottenere il nome del paese dal codice
function getCountryName(code) {
    const countries = {
        'US': 'United States',
        'UK': 'United Kingdom',
        'CA': 'Canada',
        'AU': 'Australia',
        'IT': 'Italy',
        'FR': 'France',
        'DE': 'Germany',
        'ES': 'Spain',
        'JP': 'Japan',
        'KR': 'South Korea',
        'BR': 'Brazil',
        'SE': 'Sweden',
        'NO': 'Norway',
        'NL': 'Netherlands',
        'BE': 'Belgium',
        'IE': 'Ireland',
        'NZ': 'New Zealand',
        'MX': 'Mexico',
        'CO': 'Colombia',
        'AR': 'Argentina',
        'CL': 'Chile',
        'PR': 'Puerto Rico',
        'CU': 'Cuba',
        'JM': 'Jamaica',
        'IS': 'Iceland',
        'FI': 'Finland',
        'DK': 'Denmark',
        'PT': 'Portugal',
        'GR': 'Greece',
        'RU': 'Russia',
        'CN': 'China',
        'IN': 'India',
        'ZA': 'South Africa',
        'BB': 'Barbados'
    };
    
    return countries[code] || code;
}

// Funzione per mostrare i risultati dell'autocomplete (migliorata)
function displayAutocompleteResults(filteredArtists) {
    if (!autocompleteResults) {
        console.error("Elemento autocompleteResults non disponibile!");
        return;
    }
    
    autocompleteResults.innerHTML = '';
    
    if (filteredArtists.length === 0) {
        autocompleteResults.style.display = 'none';
        return;
    }
    
    filteredArtists.forEach(artist => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        
        // Usa l'immagine dell'artista se disponibile, altrimenti usa un placeholder
        let imgContent;
        if (artist.imageUrl) {
            imgContent = `<img src="${artist.imageUrl}" alt="${artist.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150?text=${artist.name.charAt(0)}';">`;
        } else {
            imgContent = `<div style="width: 40px; height: 40px; border-radius: 50%; background-color: #555; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 16px; font-weight: bold;">${artist.name.charAt(0)}</div>`;
        }
        
        // Crea un div per le informazioni dell'artista
        const info = document.createElement('div');
        info.classList.add('autocomplete-item-info');
        
        // Nome dell'artista
        const name = document.createElement('div');
        name.classList.add('autocomplete-item-name');
        name.textContent = artist.name;
        
        // Dettagli dell'artista
        const details = document.createElement('div');
        details.classList.add('autocomplete-item-details');
        details.textContent = `${artist.genre} · ${getFlagEmoji(artist.nationality)}`;
        
        // Assembla gli elementi
        info.appendChild(name);
        info.appendChild(details);
        item.innerHTML = imgContent;
        item.appendChild(info);
        
        item.addEventListener('click', () => {
            artistSearchInput.value = artist.name;
            autocompleteResults.style.display = 'none';
        });
        
        autocompleteResults.appendChild(item);
    });
    
    autocompleteResults.style.display = 'block';
}

// Funzione per gestire il submit del tentativo
function handleGuessSubmit() {
    if (!artistsLoaded || !artistSearchInput) {
        console.error("Elementi DOM o database artisti non disponibili per handleGuessSubmit!");
        return;
    }
    
    if (gameEnded) return;
    
    const guessedArtistName = artistSearchInput.value.trim();
    
    if (!guessedArtistName) {
        alert('Inserisci il nome di un artista!');
        return;
    }
    
    // Verifica che artists sia definito
    if (!artists || artists.length === 0) {
        console.error("Database degli artisti non disponibile!");
        return;
    }
    
    // Trova l'artista nel database
    const guessedArtist = artists.find(artist => 
        artist.name.toLowerCase() === guessedArtistName.toLowerCase()
    );
    
    if (!guessedArtist) {
        alert('Artista non trovato nel database!');
        return;
    }
    
    // Controlla se l'artista è già stato indovinato
    const previousAttempts = document.querySelectorAll('.attempt-card');
    for (let i = 0; i < previousAttempts.length; i++) {
        if (previousAttempts[i].querySelector('.artist-name').textContent === guessedArtist.name) {
            alert('Hai già provato questo artista!');
            return;
        }
    }
    
    // Confronta l'artista indovinato con quello corretto
    const result = compareArtists(guessedArtist, currentArtist);
    
    // Mostra il tentativo
    displayAttempt(guessedArtist, result);
    
    // Aggiorna lo stato del gioco
    attemptsLeft--;
    updateAttemptsLeft();
    
    // Salva lo stato del gioco
    const attempts = Array.from(document.querySelectorAll('.attempt-card')).map(card => {
        const artistName = card.querySelector('.artist-name').textContent;
        const artist = artists.find(a => a.name === artistName);
        const attributeBoxes = card.querySelectorAll('.attribute-box');
        
        return {
            artist: artist,
            result: {
                name: card.querySelector('.artist-image').classList.contains('correct'),
                debut: attributeBoxes[0].className.includes('correct') ? 'correct' : 
                       attributeBoxes[0].className.includes('partial') ? 'partial' : 'incorrect',
                members: attributeBoxes[1].className.includes('correct') ? 'correct' : 
                         attributeBoxes[1].className.includes('partial') ? 'partial' : 'incorrect',
                popularity: attributeBoxes[2].className.includes('correct') ? 'correct' : 
                            attributeBoxes[2].className.includes('partial') ? 'partial' : 'incorrect',
                genre: attributeBoxes[3].className.includes('correct') ? 'correct' : 
                       attributeBoxes[3].className.includes('partial') ? 'partial' : 'incorrect',
                nationality: attributeBoxes[4].className.includes('correct') ? 'correct' : 
                             attributeBoxes[4].className.includes('partial') ? 'partial' : 'incorrect',
                gender: attributeBoxes[5].className.includes('correct') ? 'correct' : 'incorrect'
            }
        };
    });
    
    // Controlla se il gioco è finito
    const isCorrect = guessedArtist.name === currentArtist.name;
    
    if (isCorrect || attemptsLeft === 0) {
        gameEnded = true;
        showGameResult(isCorrect);
    }
    
    saveGameState(attempts, isCorrect);
    
    // Resetta l'input
    artistSearchInput.value = '';
}

// Funzione per confrontare gli artisti
function compareArtists(guessed, correct) {
    if (!artistsLoaded) {
        console.error("Database degli artisti non disponibile per compareArtists!");
        return {};
    }
    
    const result = {
        name: guessed.name === correct.name,
        debut: compareDebut(guessed.debut, correct.debut),
        members: compareMembers(guessed.members, correct.members),
        popularity: comparePopularity(guessed.popularity, correct.popularity),
        genre: compareGenre(guessed.genre, correct.genre),
        nationality: guessed.nationality === correct.nationality ? 'correct' : 'incorrect',
        gender: guessed.gender === correct.gender ? 'correct' : 'incorrect'
    };
    
    return result;
}

// Funzione per confrontare l'anno di debutto
function compareDebut(guessedDebut, correctDebut) {
    if (guessedDebut === correctDebut) return 'correct';
    
    const diff = Math.abs(guessedDebut - correctDebut);
    if (diff <= 5) return 'partial';
    
    return 'incorrect';
}

// Funzione per confrontare il numero di membri
function compareMembers(guessedMembers, correctMembers) {
    if (guessedMembers === correctMembers) return 'correct';
    
    const diff = Math.abs(guessedMembers - correctMembers);
    if (diff === 1) return 'partial';
    
    return 'incorrect';
}

// Funzione per confrontare la popolarità
function comparePopularity(guessedPopularity, correctPopularity) {
    if (guessedPopularity === correctPopularity) return 'correct';
    
    const diff = Math.abs(guessedPopularity - correctPopularity);
    if (diff <= 10) return 'partial';
    
    return 'incorrect';
}

// Funzione per confrontare il genere
function compareGenre(guessedGenre, correctGenre) {
    if (guessedGenre === correctGenre) return 'correct';
    
    // Generi simili (esempio)
    const similarGenres = {
        'Rock': ['Alternative Rock', 'Hard Rock', 'Indie Rock'],
        'Pop': ['Pop Rock', 'Synth Pop', 'Dance Pop'],
        'Hip Hop': ['Rap', 'Trap', 'R&B'],
        'Rap': ['Hip Hop', 'Trap', 'R&B'],
        'Electronic': ['EDM', 'House', 'Techno'],
        'R&B': ['Soul', 'Hip Hop', 'Rap']
    };
    
    // Controlla se i generi sono simili
    for (const mainGenre in similarGenres) {
        if (guessedGenre === mainGenre && similarGenres[mainGenre].includes(correctGenre) ||
            correctGenre === mainGenre && similarGenres[mainGenre].includes(guessedGenre)) {
            return 'partial';
        }
    }
    
    return 'incorrect';
}

// Funzione per mostrare il tentativo (aggiornata per il nuovo layout)
function displayAttempt(artist, result) {
    if (!artistsLoaded || !attemptsList) {
        console.error("Elementi DOM o database artisti non disponibili per displayAttempt!");
        return;
    }
    
    const attemptCard = document.createElement('div');
    attemptCard.classList.add('attempt-card');
    
    // Immagine dell'artista (placeholder o reale)
    const imageUrl = artist.imageUrl || `https://via.placeholder.com/150?text=${artist.name.charAt(0)}`;
    
    // Crea il contenuto HTML della card
    attemptCard.innerHTML = `
        <div class="artist-image ${result.name ? 'correct' : 'incorrect'}">
            <img src="${imageUrl}" alt="${artist.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150?text=${artist.name.charAt(0)}';">
        </div>
        <div class="artist-name">${artist.name}</div>
        <div class="artist-attributes">
            <div class="attribute-box ${result.debut}">
                <div class="attribute-label">Debut</div>
                <div class="attribute-value">${artist.debut}</div>
            </div>
            <div class="attribute-box ${result.members}">
                <div class="attribute-label">Members</div>
                <div class="attribute-value">${artist.members === 1 ? 'Solo' : artist.members}</div>
            </div>
            <div class="attribute-box ${result.popularity}">
                <div class="attribute-label">Popularity</div>
                <div class="attribute-value">#${artist.popularity}</div>
            </div>
            <div class="attribute-box ${result.genre}">
                <div class="attribute-label">Genre</div>
                <div class="attribute-value">${artist.genre}</div>
            </div>
            <div class="attribute-box ${result.nationality}">
                <div class="attribute-label">Country</div>
                <div class="attribute-value">${getFlagEmoji(artist.nationality)}</div>
            </div>
            <div class="attribute-box ${result.gender}">
                <div class="attribute-label">Gender</div>
                <div class="attribute-value">${artist.gender}</div>
            </div>
        </div>
    `;
    
    // Aggiungi la card alla lista dei tentativi
    attemptsList.appendChild(attemptCard);
}

// Funzione per aggiornare il contatore dei tentativi
function updateAttemptsLeft() {
    if (!attemptsLeftSpan) {
        console.error("Elemento attemptsLeftSpan non disponibile!");
        return;
    }
    
    attemptsLeftSpan.textContent = attemptsLeft;
}

// Funzione per mostrare il risultato del gioco
function showGameResult(won) {
    if (!gameResult || !successMessage || !failureMessage || !correctArtistSpan || !revealArtistSpan) {
        console.error("Elementi DOM non disponibili per showGameResult!");
        return;
    }
    
    gameResult.classList.remove('hidden');
    
    if (won) {
        successMessage.classList.remove('hidden');
        correctArtistSpan.textContent = currentArtist.name;
    } else {
        failureMessage.classList.remove('hidden');
        revealArtistSpan.textContent = currentArtist.name;
    }
}

// Funzione per salvare lo stato del gioco (aggiornata)
function saveGameState(attempts, won) {
    if (!artistsLoaded) {
        console.error("Database degli artisti non disponibile per saveGameState!");
        return;
    }
    
    const gameState = {
        currentArtist: currentArtist,
        attemptsLeft: attemptsLeft,
        gameEnded: gameEnded,
        won: won,
        attempts: attempts,
        gameMode: currentGameMode
    };
    
    localStorage.setItem('spotleGameState', JSON.stringify(gameState));
    
    // Se è la modalità giornaliera e il gioco è finito, imposta il flag
    if (currentGameMode === 'daily' && gameEnded) {
        dailyGamePlayed = true;
    }
}

// Funzione per aggiornare il timer per il prossimo artista
function updateNextArtistTimer() {
    if (!timerSpan) {
        console.error("Elemento timerSpan non disponibile!");
        return;
    }
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeLeft = tomorrow - now;
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    timerSpan.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Funzione per condividere il risultato
function shareResult() {
    if (!artistsLoaded || !successMessage) {
        console.error("Elementi DOM o database artisti non disponibili per shareResult!");
        return;
    }
    
    const attempts = document.querySelectorAll('.attempt-card').length;
    const won = successMessage.classList.contains('hidden') ? false : true;
    
    let resultText = `Spotle.io - ${todayDate}\n`;
    resultText += won ? `Ho indovinato in ${attempts}/10 tentativi!\n` : `Non ho indovinato oggi!\n`;
    
    // Aggiungi una griglia di emoji per rappresentare i tentativi
    const attemptCards = document.querySelectorAll('.attempt-card');
    attemptCards.forEach(card => {
        const attributeBoxes = card.querySelectorAll('.attribute-box');
        let rowEmojis = '';
        
        attributeBoxes.forEach(box => {
            if (box.classList.contains('correct')) {
                rowEmojis += '🟩';
            } else if (box.classList.contains('partial')) {
                rowEmojis += '🟨';
            } else {
                rowEmojis += '⬜';
            }
        });
        
        resultText += rowEmojis + '\n';
    });
    
    resultText += '\nGioca su Spotle.io!';
    
    // Copia negli appunti
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert('Risultato copiato negli appunti!');
        })
        .catch(err => {
            console.error('Errore durante la copia: ', err);
            alert('Non è stato possibile copiare il risultato.');
        });
}

// Funzione per ottenere l'emoji della bandiera dalla nazionalità
function getFlagEmoji(countryCode) {
    const flagEmojis = {
        'US': '🇺🇸',
        'UK': '🇬🇧',
        'CA': '🇨🇦',
        'AU': '🇦🇺',
        'IT': '🇮🇹',
        'FR': '🇫🇷',
        'DE': '🇩🇪',
        'ES': '🇪🇸',
        'JP': '🇯🇵',
        'KR': '🇰🇷',
        'BR': '🇧🇷',
        'SE': '🇸🇪',
        'NO': '🇳🇴',
        'NL': '🇳🇱',
        'BE': '🇧🇪',
        'IE': '🇮🇪',
        'NZ': '🇳🇿',
        'MX': '🇲🇽',
        'CO': '🇨🇴',
        'AR': '🇦🇷',
        'CL': '🇨🇱',
        'PR': '🇵🇷',
        'CU': '🇨🇺',
        'JM': '🇯🇲',
        'IS': '🇮🇸',
        'FI': '🇫🇮',
        'DK': '🇩🇰',
        'PT': '🇵🇹',
        'GR': '🇬🇷',
        'RU': '🇷🇺',
        'CN': '🇨🇳',
        'IN': '🇮🇳',
        'ZA': '🇿🇦',
        'BB': '🇧🇧'
    };
    
    return flagEmojis[countryCode] || countryCode;
}