document.addEventListener('DOMContentLoaded', () => {
    // 1. Array med exempel på nyheter
    // ERSÄTT DENNA ARRAY MED DIN KOD FÖR ATT HÄMTA DAGENS NYHET
    const newsStories = [
        "En katt i Malmö lärde sig öppna kylskåpet och startade en smörgåsrevolution i grannskapet.",
        "Forskare upptäckte att glada igelkottar sover 15% längre under helger.",
        "En brevbärare vann världsrekordet i att leverera paket med hjälp av en enhjuling och en trumpet.",
        "Lokala bageriet utökade sitt sortiment med 'lyckokakor' som förutspår bra väder.",
        "En grupp pensionärer i Umeå startade ett rockband och fick en viral hit med sin låt 'Rullator Boogie'."
    ];

    const newsElement = document.getElementById('news-content');
    const dateElement = document.getElementById('current-date');

    // Funktion för att visa dagens datum
    function displayDate() {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = `Idag är det ${today.toLocaleDateString('sv-SE', options)}.`;
    }

    // Funktion för att slumpa fram en nyhet
    function displayRandomNews() {
        // Generera ett slumpmässigt index baserat på datumet
        // Detta ger samma nyhet hela dagen, men en ny imorgon
        const today = new Date();
        // Använd dagsnumret som en del av seedet för slumpmässigheten
        const daySeed = today.getDate(); 
        
        // En enkel, deterministisk slumptalsgenerator baserat på datumet
        const deterministicRandom = (seed) => {
            let x = Math.sin(seed * 9999) * 10000;
            return x - Math.floor(x);
        };

        const randomValue = deterministicRandom(daySeed);
        const index = Math.floor(randomValue * newsStories.length);

        newsElement.textContent = newsStories[index];
    }

    // Kör funktionerna
    displayDate();
    displayRandomNews();
});
