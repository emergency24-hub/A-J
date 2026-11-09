/* EDIT BUSINESS DETAILS AND SERVICE CONTENT HERE */
const SITE = {
  company: "A & J Plumbing and Gas Limited",
  phoneDisplay: "07520 657367",
  phoneHref: "+447520657367",
  email: "info@aj-plumbingandheating.uk",
  domain: "aj-plumbingandheating.uk",
  registeredAddress: "17–19 Murray Street, Burnley, England, BB10 1SB",
  companyNumber: "15360144",
  coverage: "Burnley and surrounding postcode areas. Call with your postcode to confirm coverage.",
  areas: ["BB", "BL", "PR", "OL", "WN", "WA"],
  about: "A & J Plumbing and Gas Limited handles everyday plumbing, heating, boiler and drainage work, from small repairs to installations.",
  services: [
    {slug:"plumbing-repairs",title:"Plumbing repairs",image:"assets/sink.jpg",summary:"Leaks, pipework and the everyday plumbing jobs that need sorting.",intro:"From a leaking pipe to a new connection, get help with practical plumbing work around the home.",items:["Find and stop leaks","Repair or replace pipework","Plumb in washing machines","General plumbing tasks"]},
    {slug:"boilers",title:"Boilers",image:"assets/boiler.jpg",summary:"Boiler swaps, repairs and installations.",intro:"Discuss boiler faults, replacement and installation work with A & J.",items:["Boiler repairs","Boiler swaps","New boiler installations","Associated pipework"]},
    {slug:"bathrooms-toilets",title:"Bathrooms & toilets",image:"assets/bathroom.webp",summary:"Toilets, showers, basins and bathroom plumbing.",intro:"Bathroom plumbing work for individual fixtures and wider bathroom projects.",items:["Toilet repairs and replacements","Showers and basins","Bathroom pipework","Fixture installation"]},
    {slug:"taps-sinks",title:"Taps & sinks",image:"assets/tap.jpg",summary:"Replace a tap, fit a garden tap or sort a sink leak.",intro:"Small jobs matter. Ask about tap and sink installation or repairs.",items:["Tap replacement","Garden taps","Sink connections","Leaks beneath sinks"]},
    {slug:"heating-radiators",title:"Heating & radiators",image:"assets/heating.jpg",summary:"Radiator additions and heating pipework.",intro:"Heating work for new radiators, existing connections and related plumbing.",items:["Add a radiator","Radiator connections","Heating pipework","Heating repairs"]},
    {slug:"drainage",title:"Drainage",image:"assets/kitchen.jpg",summary:"Drainage leaks and waste-pipe issues.",intro:"Get in touch about drainage leaks and waste-water plumbing issues.",items:["Drainage leaks","Waste-pipe repairs","Sink drainage","Toilet waste connections"]}
  ],
  faqs: [
    {q:"Can I call about a small plumbing job?",a:"Yes. Tap replacements, leaks and washing-machine connections are among the jobs you can ask about."},
    {q:"Do you handle boiler work?",a:"Yes. Call to discuss a boiler repair, swap or installation."},
    {q:"Do you cover my postcode?",a:"Call with your postcode and the work needed so coverage can be confirmed."}
  ]
};
/* END EDITABLE BLOCK */

const main=document.getElementById("main");
for(const id of ["footer-company","footer-copyright-company"]){document.getElementById(id).textContent=SITE.company}
for(const id of ["header-phone","mobile-phone","footer-phone"]){const link=document.getElementById(id);link.href=`tel:${SITE.phoneHref}`;link.textContent=(id==="footer-phone"?"":"Call ")+SITE.phoneDisplay}
const footerEmail=document.getElementById("footer-email");footerEmail.href=`mailto:${SITE.email}`;footerEmail.textContent=SITE.email;
document.getElementById("footer-address").textContent=SITE.registeredAddress;
document.getElementById("footer-number").textContent=SITE.companyNumber;
document.getElementById("footer-domain").textContent=SITE.domain;
const call=`tel:${SITE.phoneHref}`;
const contactActions=`<div class="actions"><a class="button" href="${call}">Call ${SITE.phoneDisplay}</a><a class="button secondary" href="mailto:${SITE.email}">Email us</a></div>`;
const card=s=>`<a class="service-card" href="#service/${s.slug}"><img src="${s.image}" alt="${s.title} work" loading="lazy"><div class="service-card-body"><h3>${s.title}</h3><p>${s.summary}</p><span>View service</span></div></a>`;
function home(){
  document.title=`${SITE.company} | Plumbing & Heating`;
  main.innerHTML=`<section class="hero" id="home"><div class="hero-inner"><div><p class="eyebrow">A & J · Burnley</p><h1>Plumbing &amp; heating <em>in Burnley.</em></h1><p>From a leaking tap to a boiler swap, A &amp; J handles plumbing, heating and drainage across the area.</p><div class="actions"><a class="button" href="${call}">Call ${SITE.phoneDisplay}</a></div></div><div class="hero-photo"><img src="assets/hero-bathroom.jpg" alt="Installed shower and bath"></div></div></section><section class="section" id="services"><div class="section-heading"><div><p class="eyebrow">What we do</p><h2>Work around your home</h2></div><p>Choose a service to see the kinds of jobs we can help with.</p></div><div class="services-grid">${SITE.services.map(card).join("")}</div></section><section class="dark-band" id="areas"><div class="section"><div><p class="eyebrow" style="color:var(--gold)">Where we work</p><h2>Based in Burnley.<br>Working across the area.</h2><p>${SITE.coverage}</p><div class="area-list">${SITE.areas.map(a=>`<span>${a}</span>`).join("")}<a class="area-more" href="${call}" aria-label="Call to ask whether we cover your area" title="Call to ask about your area">+</a></div></div></div></section><section class="section" id="about"><div class="about-grid"><img src="assets/boiler-work.jpg" alt="Boiler repair work" loading="lazy"><div><p class="eyebrow">About A & J</p><h2>One call for the next job.</h2><p>${SITE.about}</p><p>Tell us what needs doing, where you are and the best way to reach you.</p></div></div></section><section class="section"><div class="accreditations"><div><p class="eyebrow">Accreditations</p><h2>Professional standards</h2></div><img src="assets/gas-safe.png" alt="Gas Safe Register" loading="lazy"><img src="assets/ciphe.webp" alt="Chartered Institute of Plumbing and Heating Engineering" loading="lazy"></div></section><section class="section"><p class="eyebrow">Common questions</p><h2>Before you call</h2>${SITE.faqs.map(f=>`<div class="faq"><h3>${f.q}</h3><p>${f.a}</p></div>`).join("")}</section><section class="section" id="contact"><div class="contact-panel"><div><p class="eyebrow">Get in touch</p><h2>Tell us what needs fixing.</h2><p>Call any time or send an email with a short description of the work and your postcode.</p><p class="contact-direct"><a href="${call}">${SITE.phoneDisplay}</a><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>${contactActions}</div></section>`;
}
function servicePage(s){
  document.title=`${s.title} | ${SITE.company}`;
  main.innerHTML=`<section class="detail-hero"><div class="detail-hero-inner"><div><a class="breadcrumb" href="#services">Services / All services</a><p class="eyebrow" style="color:var(--gold);margin-top:2rem">${SITE.company}</p><h1>${s.title}</h1><p>${s.intro}</p><div class="actions"><a class="button" href="${call}">Call ${SITE.phoneDisplay}</a></div></div><img src="${s.image}" alt="${s.title} work"></div></section><section class="detail-content"><div><p class="eyebrow">How we can help</p><h2>Work we can discuss</h2><ul>${s.items.map(i=>`<li>${i}</li>`).join("")}</ul><p>Have a related job? Call and describe what you need.</p><a class="back-link" href="#services">View all services</a></div><aside class="detail-aside"><h3>Talk through the job</h3><p>Let us know the issue and your postcode so we can discuss the next step.</p><a class="button" href="${call}">Call ${SITE.phoneDisplay}</a><p style="margin-top:1rem"><a href="mailto:${SITE.email}">${SITE.email}</a></p></aside></section>`;
}
function route(){
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash.startsWith("service/")){
    const s=SITE.services.find(x=>x.slug===hash.slice(8));
    if(s){servicePage(s);window.scrollTo(0,0);return}
  }
  home();
  if(hash&&hash!=="home")requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView({block:"start"}));
  else window.scrollTo(0,0);
}
document.querySelector(".menu-toggle").addEventListener("click",e=>{const nav=document.getElementById("nav"),open=nav.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",open)});
document.getElementById("nav").addEventListener("click",()=>{document.getElementById("nav").classList.remove("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded","false")});
document.getElementById("year").textContent=new Date().getFullYear();window.addEventListener("hashchange",route);route();

// Hashchange does not fire when a visitor selects the current link again.
document.addEventListener("click",event=>{
  const link=event.target.closest('a[href^="#"]');
  if(!link)return;
  if(link.getAttribute("href")===location.hash){event.preventDefault();route()}
});
