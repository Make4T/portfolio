# portfolio
MakesPortfolio

## Muokkausopas

Sivuston tekstit on erotettu mahdollisimman pitkälle käyttöliittymästä. Näitä
tiedostoja voi muokata tavallisella tekstieditorilla, esimerkiksi VS Codella.

| Mitä haluat muuttaa? | Tiedosto | Muokattava kohta |
| --- | --- | --- |
| Nimi, logo, GitHub, LinkedIn, sähköposti, CV ja opinnäytetyölinkki | `src/data/site.ts` | `site` |
| Ylävalikon otsikot | `src/data/site.ts` | `navigation` |
| Projektit, kuvaukset, teknologiat, case studyt ja linkit | `src/data/projects.ts` | `projects` |
| Projektikuvat | `public/images/projects/` | Lisää kuva ja vaihda projektin `image`-polku |
| Osaamisalueet | `src/data/skills.ts` | `skillCategories` |
| Työkokemus ja roolit | `src/data/experience.ts` | `experience` |
| Hero-otsikko, esittely ja teknologiakorit | `src/components/Hero.tsx` | `tech` ja JSX-tekstit |
| About Me -tekstit ja erikoistumiskortit | `src/components/About.tsx` | `specialties` ja JSX-tekstit |
| Engineering Philosophy -kortit | `src/components/Philosophy.tsx` | `principles` |
| Opinnäytetyön tekstit | `src/components/Thesis.tsx` | JSX-tekstit |
| Koulutus | `src/components/Education.tsx` | JSX-tekstit |
| Yhteysosion otsikko | `src/components/Contact.tsx` | JSX-tekstit |
| Värit, fontit, välit ja responsiivisuus | `src/styles/global.css` | `:root` ja media queryt |
| Google-hakutulos- ja jakamistekstit | `index.html` | `title`, `description` ja `og:`-metatiedot |
| GitHub Pages -julkaisu | `.github/workflows/deploy.yml` | Muuta vain tarvittaessa |

### Uuden projektin lisääminen

Kopioi `src/data/projects.ts`-tiedostosta jokin olemassa oleva `{ ... }`-lohko,
liitä se `projects`-listaan ja muuta sen tekstit. Lisää kuvatiedosto kansioon
`public/images/projects/`. Jos projektilla on julkinen repository tai demo,
poista `github`- tai `demo`-rivin alusta `//` ja lisää osoite.

### Muutosten testaaminen ja julkaiseminen

Projektikansiossa:

```powershell
npm run dev
```

Sivusto avautuu terminaalin näyttämään `localhost`-osoitteeseen. Kun muutos on
valmis, julkaise se GitHub Pagesiin:

```powershell
git add .
git commit -m "Update portfolio content"
git push
```
