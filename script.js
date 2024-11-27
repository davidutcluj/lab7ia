function schimbaViata() {
    // Modificare titlu profil
    document.getElementById('titlu-profil').innerText = "Software Developer - David Anton";

    // Modificare email
    document.getElementById('email').innerHTML = 'Email: <a href="mailto:david.anton.dev@gmail.com" class="w3-text-white">david.anton.dev@gmail.com</a>';

    // Modificare poză de profil
    const img = document.getElementById('profil-img');
    img.src = "profile-new.jpg"; // Imagine alternativă
    img.classList.add('w3-opacity', 'w3-border-yellow'); // Adăugare stiluri noi

    // Modificare text așteptări
    document.getElementById('asteptari').innerText = "„Tehnologia este cheia viitorului meu succes.”";

    // Modificare conținut tabel discipline
    const discipline = document.getElementById('discipline');
    discipline.innerHTML = `
        <tr class="w3-teal">
            <th>Disciplina</th>
            <th>Anul</th>
            <th>Link</th>
        </tr>
        <tr>
            <td>Machine Learning</td>
            <td>Anul 4</td>
            <td><a href="#" class="w3-button w3-yellow w3-round">Fișa disciplinei</a></td>
        </tr>
        <tr>
            <td>Programare Avansată</td>
            <td>Anul 4</td>
            <td><a href="#" class="w3-button w3-yellow w3-round">Fișa disciplinei</a></td>
        </tr>
    `;

    // Modificare hobby-uri
    const hobbyuri = document.getElementById('hobbyuri');
    hobbyuri.innerHTML = `
        <li>Dezvoltare aplicații mobile</li>
        <li>Inteligență Artificială</li>
        <li>Călătorii în străinătate</li>
    `;

    // Modificare stil body
    document.body.classList.remove('w3-light-grey');
    document.body.classList.add('w3-pale-yellow');
}

// Funcție pentru calcularea vârstei
function calculeazaVarsta() {
    const anNastere = 1995; // Anul nașterii
    const dataCurenta = new Date();
    const anulCurent = dataCurenta.getFullYear();
    const varsta = anulCurent - anNastere;
    document.getElementById('varsta').innerText = `Vârsta: ${varsta} ani`;
}

// Funcție pentru a restabili anul nașterii
function restabilesteAnul() {
    document.getElementById('varsta').innerText = ''; // Șterge vârsta calculată
}

// Funcție pentru validarea email-ului
function verificaEmail() {
    const emailInput = document.getElementById('email-input').value;
    const mesajValidare = document.getElementById('validare-email');

    if (emailInput.indexOf('@') === -1) {
        mesajValidare.innerText = "Adresa de e-mail este invalidă!";
    } else {
        mesajValidare.innerText = ''; // E-mail valid
    }
}
