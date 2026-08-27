const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
if(menuToggle){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);menuToggle.textContent=open?'×':'☰';});}
document.querySelectorAll('#site-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');if(menuToggle)menuToggle.textContent='☰';}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const methodNodes=document.querySelectorAll('.method-node');
const methodDetail=document.querySelector('#method-detail');
const methodContent={
 body:{title:'BODY',text:'Body mapping foregrounds embodied knowledge and asks how people experience, remember, and narrate place through the body.'},
 water:{title:'WATER',text:'Water is approached not only as resource, but as relation, archive, presence, and a site of cultural and political memory.'},
 territory:{title:'TERRITORY',text:'Territory emerges through relationships among community, land, water, mobility, governance, dispossession, and collective futures.'},
 memory:{title:'MEMORY',text:'Spatial memory traces how stories, routes, shorelines, places, and everyday practices hold knowledge across generations.'},
 walking:{title:'WALKING',text:'Walking becomes a situated method: moving through place with attention to landscape, relations, histories, and embodied encounters.'}
};
methodNodes.forEach(node=>node.addEventListener('click',()=>{methodNodes.forEach(n=>n.classList.remove('active'));node.classList.add('active');const item=methodContent[node.dataset.method];methodDetail.innerHTML=`<strong>${item.title}</strong><p>${item.text}</p>`;}));

document.querySelector('#year').textContent=new Date().getFullYear();

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('#site-nav a[href^="#"]')];
const spy=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.removeAttribute('aria-current'));const active=links.find(l=>l.getAttribute('href')===`#${entry.target.id}`);active?.setAttribute('aria-current','page')}})},{rootMargin:'-40% 0px -50% 0px',threshold:0});
sections.forEach(s=>spy.observe(s));
