/* ⬇️ CONFIG ⬇️ */
const CONFIG = { sellUrl: "", careerUrl: "", bookingUrl: "" };

/* --- DATA & TRANSLATIONS --- */
let currentLang = 'sk';
const translations = {
    sk: {
        nav_buy: "Kúpiť", nav_sell: "Predať", nav_agents: "Makléri", nav_career: "Kariéra",
        hero_subtitle: "Premium Real Estate", hero_title_1: "Nájdite svoj", hero_title_2: "nový", hero_title_3: "Domov",
        search_loc: "Lokalita", search_type: "Typ", search_price_from: "Cena od", search_price_to: "Cena do", 
        opt_all_types: "Všetky typy", opt_min: "0 €", opt_max: "Max",
        btn_search: "Hľadať", portfolio: "Portfólio", exclusive_offer: "Exkluzívna Ponuka", btn_load_more: "Načítať ďalšie",
        sell_subtitle: "Predajte s nami", sell_title: "Máte nehnuteľnosť na predaj?", sell_desc: "Zabezpečíme vám najvyššiu cenu.",
        feat_valuation: "Bezplatné ocenenie", feat_marketing: "Profesionálne foto",
        btn_send_offer: "Odoslať ponuku", agents_subtitle: "Náš Tím", agents_title: "Top Realitní Makléri",
        digital_staging: "Digitálny Homestaging", before_after: "Pred/Po Rekonštrukcii", price_increase: "Nárast ceny",
        career_subtitle: "Kariéra", career_title: "Pridajte sa k elitám", btn_apply: "Aplikovať",
        contact_header: "Kontakt", contact: "Kontakt", prop_desc_title: "Popis nehnuteľnosti", prop_desc_text: "Exkluzívna ponuka bývania v najžiadanejšej lokalite.",
        btn_confirm: "Potvrdiť termín", modal_career_title: "Odoslať žiadosť", btn_send_app: "Odoslať žiadosť",
        ad_title: "Investičná príležitosť", ad_text: "Nové apartmány v Dubaji s výnosom až 12% ročne. Limitovaná ponuka.", ad_btn: "Zistiť viac",
        ph_name: "Meno a Priezvisko", ph_phone: "Telefón", ph_location: "Lokalita (napr. Ružinov)", ph_area: "Plocha m²", ph_price: "Cena (predstava)",
        ph_cv: "Link na LinkedIn / CV", ph_why: "Prečo práve vy?",
        opt_flat: "Byt / Apartmán", opt_house: "Dom / Vila", opt_land: "Pozemok"
    },
    en: {
        nav_buy: "Buy", nav_sell: "Sell", nav_agents: "Agents", nav_career: "Careers",
        hero_subtitle: "Premium Real Estate", hero_title_1: "Find your", hero_title_2: "new", hero_title_3: "Home",
        search_loc: "Location", search_type: "Type", search_price_from: "Price From", search_price_to: "Price To",
        opt_all_types: "All Types", opt_min: "0 €", opt_max: "Max",
        btn_search: "Search", portfolio: "Portfolio", exclusive_offer: "Exclusive Offers", btn_load_more: "Load More",
        sell_subtitle: "Sell with us", sell_title: "Have a property to sell?", sell_desc: "We ensure the highest market price.",
        feat_valuation: "Free Valuation", feat_marketing: "Pro Photo & Video",
        btn_send_offer: "Send Offer", agents_subtitle: "Our Team", agents_title: "Top Real Estate Agents",
        digital_staging: "Digital Homestaging", before_after: "Before/After Renovation", price_increase: "Value Increase",
        career_subtitle: "Careers", career_title: "Join the Elite", btn_apply: "Apply",
        contact_header: "Contact", contact: "Contact", prop_desc_title: "Property Description", prop_desc_text: "Exclusive living offer in the most desirable location.",
        btn_confirm: "Confirm Booking", modal_career_title: "Submit Application", btn_send_app: "Submit Application",
        ad_title: "Investment Opportunity", ad_text: "New apartments in Dubai with up to 12% yield. Limited offer.", ad_btn: "Learn More",
        ph_name: "Full Name", ph_phone: "Phone Number", ph_location: "Location (e.g. Downtown)", ph_area: "Area m²", ph_price: "Price (expectation)",
        ph_cv: "Link to LinkedIn / CV", ph_why: "Why you?",
        opt_flat: "Apartment", opt_house: "House", opt_land: "Land"
    }
};

const properties = [
    { id: 1, title: "Sky Park Penthouse", price: "850.000 €", loc: "stare-mesto", type: "byt", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800", tag: "Top", rooms: 4, area: 145 },
    { id: 2, title: "Vila Onyx Koliba", price: "1.250.000 €", loc: "koliba", type: "dom", img: "https://images.unsplash.com/photo-1600596542815-2a429fb236ba?q=80&w=800", tag: "Premium", rooms: 6, area: 320 },
    { id: 3, title: "Loft Mlynské Nivy", price: "420.000 €", loc: "ruzinov", type: "byt", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800", tag: "Invest", rooms: 2, area: 88 },
    { id: 4, title: "Rodinný dom Devín", price: "550.000 €", loc: "devin", type: "dom", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", tag: "Family", rooms: 4, area: 180 },
    { id: 5, title: "Eurovea Tower", price: "720.000 €", loc: "stare-mesto", type: "byt", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800", tag: "View", rooms: 3, area: 95 },
    { id: 6, title: "Zwirn Apartmán", price: "390.000 €", loc: "ruzinov", type: "byt", img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=800", tag: "New", rooms: 3, area: 75 }
];

/* --- LOGIC --- */
function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(t[key]) el.innerText = t[key];
    });
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if(t[key]) el.placeholder = t[key];
    });
    render(3);
}

const list = document.getElementById('propertyList');
function render(limit = 3, filterFn = null) {
    if (!list) return;
    list.innerHTML = "";
    let data = properties;
    if (filterFn) data = data.filter(filterFn);
    data.slice(0, limit).forEach(p => {
        list.innerHTML += `
            <div class="card" onclick="openDetail(${p.id})">
                <div class="card-img-wrap"><span class="card-badge">${p.tag}</span><img src="${p.img}" class="card-img"></div>
                <div class="card-body"><span class="card-price">${p.price}</span><h3>${p.title}</h3>
                <div class="card-specs"><span><i class="fas fa-expand"></i> ${p.rooms} izieb • ${p.area} m²</span></div></div>
            </div>`;
    });
}
render(3);

function loadMore() { render(6); document.getElementById('loadMoreBtn').style.display = 'none'; }

function filterProperties() {
    const loc = document.getElementById('searchLoc').value;
    const type = document.getElementById('searchType').value;
    const priceFrom = parseInt(document.getElementById('searchPriceFrom').value);
    const priceTo = parseInt(document.getElementById('searchPriceTo').value);
    render(6, p => {
        const numPrice = parseInt(p.price.replace(/\./g, '').replace(' €', ''));
        const matchLoc = (loc === 'all' || p.loc === loc);
        const matchType = (type === 'all' || p.type === type);
        const matchPrice = (numPrice >= priceFrom && numPrice <= priceTo);
        return matchLoc && matchType && matchPrice;
    });
    document.getElementById('loadMoreBtn').style.display = 'none';
}

/* --- CALENDAR LOGIC --- */
function initCalendar() {
    const container = document.getElementById('calendarDates');
    if (!container) return;
    container.innerHTML = "";
    
    // Vygeneruje dnešok a 4 ďalšie dni
    const days = ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'];
    const today = new Date();
    
    for(let i=0; i<5; i++) {
        let d = new Date(today);
        d.setDate(today.getDate() + i + 1); // začíname zajtrajškom
        
        let dateStr = d.toISOString().split('T')[0];
        let dayName = days[d.getDay()];
        let dayNum = d.getDate();
        
        container.innerHTML += `
            <div class="date-card" onclick="selectDate(this, '${dateStr}')">
                <span class="date-day">${dayName}</span>
                <span class="date-num">${dayNum}</span>
            </div>
        `;
    }
}

function selectDate(el, dateStr) {
    document.querySelectorAll('.date-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('inputDate').value = dateStr;
}

function selectTime(el) {
    document.querySelectorAll('.time-pill').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('inputTime').value = el.innerText;
}

/* --- FORMS & MODALS --- */
function openDetail(id) {
    const p = properties.find(x => x.id === id);
    document.getElementById('modalTitle').innerText = p.title;
    document.getElementById('inputPropTitle').value = p.title;
    document.getElementById('modalPrice').innerText = p.price;
    document.getElementById('modalTag').innerText = p.tag;
    document.getElementById('modalMainImg').src = p.img;
    document.getElementById('modalDesc').innerText = translations[currentLang].prop_desc_text;
    
    initCalendar(); // Načítame kalendár
    
    document.getElementById('detailModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeDetailModal() { document.getElementById('detailModal').classList.remove('open'); document.body.style.overflow = 'auto'; }

function openCareerModal(pos) { document.getElementById('careerPositionTitle').innerText = pos; document.getElementById('inputPosition').value = pos; document.getElementById('careerModal').classList.add('open'); }
function closeCareerModal() { document.getElementById('careerModal').classList.remove('open'); }

/* --- SUBMIT DATA --- */
async function submitData(event, type) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let targetUrl = type === 'sell' ? CONFIG.sellUrl : (type === 'career' ? CONFIG.careerUrl : CONFIG.bookingUrl);
    
    if (!targetUrl) {
        showToast("Úspešne odoslané"); 
        if(type === 'career') closeCareerModal();
        if(type === 'booking') closeDetailModal();
        form.reset();
        return;
    }
    try {
        const response = await fetch(targetUrl, { method: 'POST', body: formData, headers: {'Accept': 'application/json'} });
        if (response.ok) {
            showToast("Úspešne odoslané");
            form.reset();
            if(type === 'career') closeCareerModal();
            if(type === 'booking') closeDetailModal();
        } else { showToast("Chyba odosielania"); }
    } catch { showToast("Chyba siete"); }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastTitle').innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

/* --- SLIDER --- */
function initSlider() {
    const slider = document.querySelector(".comparison-container");
    const overlay = document.querySelector(".img-comp-overlay");
    const handle = document.querySelector(".slider-bar");
    let active = false;

    if (!slider || !overlay || !handle) return;
    overlay.style.width = "50%";
    handle.style.left = "50%";

    function start(e) { e.preventDefault(); active = true; }
    function end() { active = false; }
    function move(e) {
        if (!active) return;
        let x;
        if (e.type.includes('touch')) x = e.touches[0].clientX;
        else x = e.clientX;
        
        let rect = slider.getBoundingClientRect();
        let pos = x - rect.left;
        if (pos < 0) pos = 0;
        if (pos > rect.width) pos = rect.width;
        
        overlay.style.width = pos + "px";
        handle.style.left = pos + "px";
    }

    slider.addEventListener("mousedown", start);
    window.addEventListener("mouseup", end);
    window.addEventListener("mousemove", move);
    slider.addEventListener("touchstart", start);
    window.addEventListener("touchend", end);
    window.addEventListener("touchmove", move);
}
window.addEventListener('load', initSlider);

// Promo
setTimeout(() => { 
    const promo = document.getElementById('promoPopup');
    if(promo) promo.classList.add('show'); 
}, 5000);
function closePromo() { 
    const promo = document.getElementById('promoPopup');
    if(promo) promo.classList.remove('show'); 
}

/* --- PROTECTION --- */
document.addEventListener('contextmenu', event => event.preventDefault()); 
document.addEventListener('keydown', function(event) {
    if(event.key === 'F12') { event.preventDefault(); }
    if(event.ctrlKey && event.key === 'u') { event.preventDefault(); }
    if(event.ctrlKey && event.shiftKey && event.key === 'I') { event.preventDefault(); }
    if(event.ctrlKey && event.key === 's') { event.preventDefault(); }
});