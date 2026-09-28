// Qui si modificano i contenuti del sito. Ciò che è tra parentesi quadre va ancora compilato.

export const site = {
  name: 'Volley Prato Academy',
  address: ['Viale Vittorio Veneto, 7', '59100 Prato'],
  phone: '+39 392 7678783',
  phoneHref: 'tel:+393927678783',
  whatsapp: 'https://wa.me/393927678783',
  email: 'info@volleypratoacademy.com',
  piva: '05152410485',
  instagram: 'https://www.instagram.com/volleypratoacademy',
  facebook: 'https://www.facebook.com/share/1DeuVDDeQR/',
  instagramLabel: 'Instagram',
  venues: ['[Sede 1: indirizzo]', '[Sede 2: indirizzo]'],
}

export const nav = [
  { label: 'La società', to: '/societa' },
  { label: 'Squadre', to: '/squadre' },
  { label: 'Atlete', to: '/atlete' },
  { label: 'Corsi', to: '/corsi' },
  { label: 'Sponsor', to: '/sponsor' },
  { label: 'Contatti', to: '/contatti' },
]

export const facts = [
  { title: 'Minivolley', text: 'Bambine da 6 a 10 anni' },
  { title: 'Nate 2012–2016', text: 'Cerchiamo nuove atlete per la stagione 2026/27' },
  { title: 'Prova gratuita', text: 'Senza impegno, negli impianti dei corsi' },
  { title: 'Campionato FIPAV', text: 'Under 12 dalla stagione 2023/24' },
]

// Ordinate dalla categoria più grande alla più piccola: il minivolley resta per ultimo.
export const teams = [
  { name: '[Nuova squadra]', short: '[Categoria]', long: '[Categoria e descrizione]' },
  { name: 'Under 12', short: 'Campionato territoriale FIPAV', long: 'Campionato territoriale FIPAV, dalla stagione 2023/24.' },
  { name: 'Minivolley', short: 'Bambine da 6 a 10 anni', long: 'Bambine da 6 a 10 anni. Avviamento alla pallavolo con istruttori qualificati e una prova gratuita senza impegno.' },
]

export const values = [
  { title: 'Rispetto', text: 'Per le compagne, le avversarie e chi ci guida in campo.' },
  { title: 'Impegno', text: 'Allenamento dopo allenamento, con costanza.' },
  { title: 'Collaborazione', text: 'Nella pallavolo si vince solo insieme.' },
]

export const steps = [
  { n: '1', title: 'Richiedi la prova', text: 'Compila il modulo qui sotto o scrivici su WhatsApp.' },
  { n: '2', title: 'Vieni a provare', text: 'La prova è gratuita e senza impegno, negli impianti dove si tengono i corsi.' },
  { n: '3', title: 'Iscriviti', text: 'Se le è piaciuto, ti diamo tutte le informazioni per iscriverla.' },
]

export const faq = [
  { q: 'La prova è davvero gratuita?', a: 'Sì. Le bambine possono fare una prova gratuita, senza impegno, negli impianti dove si tengono i corsi di minivolley.' },
  { q: 'Da che età si può iniziare?', a: 'Il minivolley è per bambine da 6 a 10 anni.' },
  { q: 'Chi tiene gli allenamenti?', a: 'Istruttori qualificati.' },
  { q: 'Cosa serve per la prima volta?', a: '[Da inserire: abbigliamento, certificato, ecc.]' },
  { q: 'Come posso contattarvi?', a: 'Con il modulo, via email a info@volleypratoacademy.com oppure su WhatsApp al +39 392 7678783.' },
]
