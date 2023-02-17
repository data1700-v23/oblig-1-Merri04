let liste = [];

/**
 * kjøp billet funksjon som brukes av knappen kjøp billett
 * Funksjonen lager et objekt og setter input verdiene fra tekst feltet som objektets verdier
 */
function kjopBillett() {



    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("tlf").value;
    let epost = document.getElementById("epost").value;


    const person = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };

    console.log(person);

    let errorCount = 0;
    // If statment for å sjekke om det er passert noe i tektfeltet, hvis ikke skriv feil melding
    if (document.getElementById('film').value == "Velg film her") {
        document.getElementById('filmfeilmelding').innerText = "MÅ VELGE EN FILM!"
        errorCount++;
    } else {
        document.getElementById('film').value = "";
    }
    if (document.getElementById('antall').value == "") {
        document.getElementById('antallfeilmelding').innerText = "MÅ IKKE VÆRE TOM!"
        errorCount++;
    } else {
        document.getElementById('antall').value = "";
    }
    if (document.getElementById('fornavn').value == "") {
        document.getElementById('navnfeilmelding').innerText = "MÅ IKKE VÆRE TOM!"
errorCount++;
    } else {
        document.getElementById('fornavn').value = "";

    }
    if (document.getElementById('etternavn').value == "") {
        document.getElementById('etternavnfeilmelding').innerText = "MÅ IKKE VÆRE TOM!"
        errorCount++;
    } else {
        document.getElementById('etternavn').value = "";
    }
    if (document.getElementById('tlf').value == "") {
        document.getElementById('tlffeilmelding').innerText = "MÅ IKKE VÆRE TOM!"
        errorCount++;
    } else {
        document.getElementById('tlf').value = "";

    }
    if (document.getElementById('epost').value == "") {
        document.getElementById('epostfeilmelding').innerText = "MÅ IKKE VÆRE TOM!"
        errorCount++;
    } else {
        document.getElementById('epost').value = "";
    }


// If statment som sjekker om det er noen tom elementer og om det er valgt et film. Hvis true blir objektet lagt til arrayet

        if (errorCount === 0) {
            liste.push(person)
            console.log(liste);
        }


            let ut = "<table id='table'><tr>" + "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
                "</tr>";

            for (let i of liste) {
                ut += "<tr>";
                ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>"
                    + i.fornavn + "</td><td>" + i.etternavn + "</td><td>"
                    + i.telefonnr + "</td><td>" + i.epost + "</td>";
                ut += "</tr>";
            }
            ut += "</table>";
            document.getElementById('liste').innerHTML = ut;
            document.getElementById('table').style.borderSpacing = "15px";

            emptyFeild();




    }

    /**
     * Funksjon som tømmer tekst feltene og feil meldingen
     */
    function emptyFeild() {
        document.getElementById('film').value = 'Velg film her';
        document.getElementById('fornavn').value = '';
        document.getElementById('antall').value = '';
        document.getElementById('etternavn').value = '';
        document.getElementById('tlf').value = '';
        document.getElementById('epost').value = '';

        document.getElementById('filmfeilmelding').innerText = '';
        document.getElementById('antallfeilmelding').innerText = '';
        document.getElementById('navnfeilmelding').innerText = '';
        document.getElementById('etternavnfeilmelding').innerText = '';
        document.getElementById('tlffeilmelding').innerText = '';
        document.getElementById('epostfeilmelding').innerText = '';

        console.log(liste);
    }



/**
 * funksjon som brukes av slett knappen
 */
function slettAlt(){
    liste.length = 0;
    document.getElementById('listRegistered').innerHTML = '';

}