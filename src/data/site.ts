// PORTFOLION PERUSTIEDOT
// Muuta nimi, yhteystiedot ja linkit ensisijaisesti tässä tiedostossa.
// Jätä kentän arvoksi "" jos linkkiä ei vielä ole. Sivusto näyttää silloin
// painikkeen "coming soon" -tilassa eikä vie kävijää rikkinäiselle sivulle.
export const site = {
  name: "[Markus Turunen]", // Sivustolla näkyvä nimi.
    initials: "MT", // Logon kaksi kirjainta, esimerkiksi "MT".
  github: "", // Esim. "https://github.com/Make4T"
  linkedin: "", // Esim. "https://www.linkedin.com/in/kayttajanimi/"
  email: "", // Esim. "etunimi.sukunimi@email.com"
  cv: "", // CV-tiedoston polku, esim. "./resume/cv.pdf" (tiedosto public/resume/cv.pdf).
  thesis: "https://www.theseus.fi/items/fd40131c-c523-4661-9028-05fa771ec02b", // Julkinen linkki opinnäytetyöhön tai PDF-tiedostoon.
} as const;

// YLÄVALIKKO
// Muuta näkyviä otsikoita tästä. href-arvot vastaavat sivun osioiden id-tunnuksia.
export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
