let liste = [];

/**
 * kjøp billet funksjon som brukes av knappen kjøp billett
 * Funksjonen lager et objekt og setter input verdiene fra tekst feltet som objektets verdier
 */
function kjopBillett() {


    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;
    let error = false;


    // If statment for å sjekke om det er passert noe i tektfeltet, hvis ikke skriv feil melding
    if (film === "Velg film her") {
        document.getElementById("filmfeilmelding").innerText = "MÅ VELGE EN FILM!"
        error = true;
    } else {
        document.getElementById("filmfeilmelding").value = "";
    }
    if (antall === "") {
        document.getElementById("antallfeilmelding").innerText = "MÅ IKKE VÆRE TOM!"
        error = true;
    } else {
        document.getElementById("antallfeilmelding").value = "";
    }
    if (fornavn === "") {
        document.getElementById("navnfeilmelding").innerText = "MÅ IKKE VÆRE TOM!"

        error = true;
    } else {
        document.getElementById("navnfeilmelding").value = "";

    }
    if (etternavn === "") {
        document.getElementById("etternavnfeilmelding").innerText = "MÅ IKKE VÆRE TOM!"

        error = true;
    } else {
        document.getElementById("etternavnfeilmelding").value = "";
    }
    if (telefonnr === "") {
        document.getElementById("tlffeilmelding").innerText = "MÅ IKKE VÆRE TOM!"
        error = true;
    } else {
        document.getElementById("tlffeilmelding").value = "";

    }
    if (epost === "") {
        document.getElementById("epostfeilmelding").innerText = "MÅ IKKE VÆRE TOM!"
        error = true;
    } else {
        document.getElementById("etternavnfeilmelding").value = "";
    }
    if (error === false) {
        const person = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        liste.push(person);

        document.getElementById("film").value = "Velg film her";
        document.getElementById("fornavn").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("tlf").value = "";
        document.getElementById("epost").value = "";

        document.getElementById("filmfeilmelding").value = "";
        document.getElementById("antallfeilmelding").value = "";
        document.getElementById("navnfeilmelding").value = "";
        document.getElementById("etternavnfeilmelding").value = "";
        document.getElementById("tlffeilmelding").value = "";
        document.getElementById("epostfeilmelding").value = "";

        visKjop();
    }


// If statment som sjekker om det er noen tom elementer og om det er valgt et film. Hvis true blir objektet lagt til arrayet

    function visKjop() {
        let ut = "<table id='table'><tr>" + "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";

        for (let i of liste) {
            ut += "<tr>";
            ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>"
                + i.fornavn + "</td><td>" + i.etternavn + "</td><td>"
                + i.telefonnr + "</td><td>" + i.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("liste").innerHTML = ut;
        document.getElementById("table").style.borderSpacing = "15px";


    }
}


/**
 * Funksjon som tømmer tekst feltene og feil meldingen
 */


/**
 * funksjon som brukes av slett knappen
 */
function slettAlt() {
    liste.length = 0;
    document.getElementById("liste").innerHTML = '';


}