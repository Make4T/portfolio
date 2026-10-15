// PORTFOLION PERUSTIEDOT
// Muuta nimi, yhteystiedot ja linkit ensisijaisesti tässä tiedostossa.
// Jätä kentän arvoksi "" jos linkkiä ei vielä ole. Sivusto näyttää silloin
// painikkeen "coming soon" -tilassa eikä vie kävijää rikkinäiselle sivulle.
export const site = {
  name: "[Markus Turunen]", // Sivustolla näkyvä nimi.
    initials: "MT", // Logon kaksi kirjainta, esimerkiksi "MT".
  github: "https://github.com/Make4T", // Julkinen GitHub-profiili.
  linkedin: "https://www.linkedin.com/in/markus-turunen-83b8b3260/", // Julkinen LinkedIn-profiili.
  email: "", // Esim. "etunimi.sukunimi@email.com"
  cv: "./documents/Markus_Turunen_Resume_2026.pdf", // Ladattava CV (tiedosto public/documents-kansiossa).
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
