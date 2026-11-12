const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const desktopMenu = window.matchMedia('(min-width: 821px)');
desktopMenu.addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('.division').forEach(division => division.addEventListener('toggle', () => {
  if (division.open) document.querySelectorAll('.division').forEach(other => { if (other !== division) other.open = false; });
}));
const articles = {
  habitat: {
    category: 'INFRASTRUCTURE / CONCEPT PROGRAMME', title: 'Places built to endure.',
    paragraphs: ['A city is more than its buildings. It is a network of dependencies: the power that keeps a clinic open, the water that reaches a home, the routes that bring people and supplies together.', 'The Habitat concept programme asks what happens when resilience becomes the starting point of design. Modular construction, adaptable public spaces, distributed energy, and water-conscious planning are considered together, rather than added separately.', 'The aim is a place that can evolve with its community and keep serving it through disruption. Progress should be visible in the skyline, and dependable in everyday life.']
  },
  biosphere: {
    category: 'BIOSCIENCES / RESEARCH OUTLOOK', title: 'Small signals. Global impact.',
    paragraphs: ['The earliest signs of a biological challenge can be easy to miss. Understanding them requires more than sensitive instruments: it takes context, responsible data practices, and people who can connect different kinds of knowledge.', 'Our Biosphere research outlook explores the meeting point of environmental observation, preventive health, and biological preparedness. Its guiding question is how earlier understanding can support better decisions without compromising the people those decisions are meant to protect.', 'In the Aegis vision, scientific progress is measured by the lives it can strengthen. Better questions today can make a more resilient tomorrow possible.']
  },
  continuity: {
    category: 'GLOBAL RESPONSE / FIELD NOTES', title: 'When everything connects.',
    paragraphs: ['A disruption rarely stays within one system. A power failure can become a communications problem. A blocked transport route can become a medical supply problem. Resilience depends on seeing the connections before they are tested.', 'The Continuity framework brings technical teams, infrastructure planners, and response specialists around the same table. It prioritizes clear responsibilities, redundant systems, accessible information, and practical recovery plans.', 'Readiness is an ongoing discipline. The objective is to help essential services keep working, and to help communities recover with dignity when circumstances change.']
  }
};
const dialog = document.querySelector('#article-dialog');
let articleTrigger;
document.querySelectorAll('[data-article]').forEach(button => button.addEventListener('click', () => {
  const article = articles[button.dataset.article];
  if (!article) return;
  articleTrigger = button;
  dialog.querySelector('.article-category').textContent = article.category;
  dialog.querySelector('#article-title').textContent = article.title;
  const content = dialog.querySelector('.article-content');
  content.replaceChildren(...article.paragraphs.map(text => { const p = document.createElement('p'); p.textContent = text; return p; }));
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); articleTrigger?.focus(); });
document.querySelector('#year').textContent = new Date().getFullYear();
