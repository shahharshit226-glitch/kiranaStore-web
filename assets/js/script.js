  const PHONE = '9779811313232';
  const EMAIL = 'harshitshahaaai906@gmail.com';
  const STORE = 'Mahajan Kirana Store';
  const ADDR = 'Biratnagar-16, Rani Mills Area, Bank Road, Morang, Nepal';
  const MAP_URL = 'https://share.google/ACeWN02bSxFbTQZxO';

  const FREE_DELIVERY_MIN = 1000;
  const DELIVERY_CHARGE = 30;
  const PRICING_NOTE = 'Wholesale prices are approximate bulk rates in Biratnagar; retail prices reflect average kirana selling price.';

  const INVENTORY_GROUPS = [
    {
      id: 'staples',
      label: 'Staples',
      icon: '🌾',
      items: [
        { name: 'Rice (25kg)', brand: 'Dabar Basmati', wholesale_price: 3200, retail_price: 3500 },
        { name: 'Wheat Flour (5kg)', brand: 'Aashirvaad Atta', wholesale_price: 450, retail_price: 500 },
        { name: 'Masoor Dal (1kg)', brand: 'Fortune', wholesale_price: 150, retail_price: 170 },
        { name: 'Chiura (1kg)', brand: 'Local Mill', wholesale_price: 90, retail_price: 110 },
        { name: 'Muri (1kg)', brand: 'Local Brand', wholesale_price: 70, retail_price: 90 },
        { name: 'Besan (1kg)', brand: 'Rajdhani', wholesale_price: 130, retail_price: 150 }
      ]
    },
    {
      id: 'cooking',
      label: 'Cooking Essentials',
      icon: '🫙',
      items: [
        { name: 'Soybean Oil (1L)', brand: 'Fortune', wholesale_price: 270, retail_price: 300 },
        { name: 'Mustard Oil (1L)', brand: 'Dhara', wholesale_price: 300, retail_price: 340 },
        { name: 'Salt (1kg)', brand: 'Aayo Nuno', wholesale_price: 18, retail_price: 22 },
        { name: 'Sugar (1kg)', brand: 'Mahalaxmi', wholesale_price: 95, retail_price: 110 },
        { name: 'Tea (500g)', brand: 'Tokla', wholesale_price: 320, retail_price: 360 },
        { name: 'Ghee (500ml)', brand: 'DDC', wholesale_price: 550, retail_price: 600 }
      ]
    },
    {
      id: 'spices',
      label: 'Spices',
      icon: '🌶️',
      items: [
        { name: 'Turmeric Powder (200g)', brand: 'Everest', wholesale_price: 55, retail_price: 65 },
        { name: 'Cumin Seeds (200g)', brand: 'MDH', wholesale_price: 90, retail_price: 110 },
        { name: 'Coriander Powder (200g)', brand: 'Everest', wholesale_price: 60, retail_price: 75 },
        { name: 'Chili Powder (200g)', brand: 'Catch', wholesale_price: 95, retail_price: 120 },
        { name: 'Garam Masala (100g)', brand: 'Everest', wholesale_price: 65, retail_price: 80 },
        { name: 'Pickle Masala (100g)', brand: 'National', wholesale_price: 50, retail_price: 65 }
      ]
    },
    {
      id: 'packaged',
      label: 'Packaged Foods',
      icon: '📦',
      items: [
        { name: 'Instant Noodles', brand: 'Wai Wai', wholesale_price: 18, retail_price: 20 },
        { name: 'Instant Noodles', brand: 'Rara', wholesale_price: 18, retail_price: 20 },
        { name: 'Instant Noodles', brand: 'Current', wholesale_price: 18, retail_price: 20 },
        { name: 'Biscuits', brand: 'Britannia Good Day', wholesale_price: 25, retail_price: 30 },
        { name: 'Biscuits', brand: 'Parle-G', wholesale_price: 8, retail_price: 10 },
        { name: 'Cornflakes (500g)', brand: 'Kellogg\'s', wholesale_price: 380, retail_price: 420 }
      ]
    },
    {
      id: 'snacks',
      label: 'Snacks',
      icon: '🍪',
      items: [
        { name: 'Potato Chips', brand: 'Lays', wholesale_price: 45, retail_price: 50 },
        { name: 'Snacks', brand: 'Kurkure', wholesale_price: 18, retail_price: 20 },
        { name: 'Local Chips', brand: 'Kwik\'s', wholesale_price: 18, retail_price: 20 },
        { name: 'Namkeen', brand: 'Haldiram\'s', wholesale_price: 90, retail_price: 110 },
        { name: 'Chocolate', brand: 'Dairy Milk', wholesale_price: 95, retail_price: 110 },
        { name: 'Wafer', brand: 'KitKat', wholesale_price: 45, retail_price: 50 }
      ]
    },
    {
      id: 'dairy',
      label: 'Dairy',
      icon: '🥛',
      items: [
        { name: 'Milk (1L)', brand: 'DDC', wholesale_price: 85, retail_price: 100 },
        { name: 'Curd (500g)', brand: 'DDC', wholesale_price: 55, retail_price: 70 },
        { name: 'Butter (100g)', brand: 'Amul', wholesale_price: 60, retail_price: 70 },
        { name: 'Cheese (200g)', brand: 'Amul', wholesale_price: 110, retail_price: 130 },
        { name: 'Paneer (200g)', brand: 'Amul', wholesale_price: 130, retail_price: 150 },
        { name: 'Milk Powder (500g)', brand: 'Nestle Everyday', wholesale_price: 380, retail_price: 420 }
      ]
    },
    {
      id: 'beverages',
      label: 'Beverages',
      icon: '🥤',
      items: [
        { name: 'Soft Drink (1L)', brand: 'Coca-Cola', wholesale_price: 90, retail_price: 110 },
        { name: 'Soft Drink (1L)', brand: 'Fanta', wholesale_price: 90, retail_price: 110 },
        { name: 'Fruit Juice (1L)', brand: 'Rio', wholesale_price: 110, retail_price: 130 },
        { name: 'Fruit Juice (1L)', brand: 'Real', wholesale_price: 130, retail_price: 150 },
        { name: 'Energy Drink', brand: 'Red Bull', wholesale_price: 140, retail_price: 160 },
        { name: 'Water (1L)', brand: 'Kinley', wholesale_price: 18, retail_price: 25 }
      ]
    },
    {
      id: 'household',
      label: 'Household Essentials',
      icon: '🧼',
      items: [
        { name: 'Soap', brand: 'Lux', wholesale_price: 35, retail_price: 40 },
        { name: 'Soap', brand: 'Dettol', wholesale_price: 45, retail_price: 55 },
        { name: 'Detergent', brand: 'Surf Excel (1kg)', wholesale_price: 170, retail_price: 200 },
        { name: 'Detergent', brand: 'Wheel (1kg)', wholesale_price: 110, retail_price: 130 },
        { name: 'Dishwash Liquid', brand: 'Vim', wholesale_price: 95, retail_price: 110 },
        { name: 'Toothpaste', brand: 'Colgate', wholesale_price: 85, retail_price: 100 },
        { name: 'Toothpaste', brand: 'Dabur Red', wholesale_price: 90, retail_price: 110 },
        { name: 'Shampoo', brand: 'Clinic Plus', wholesale_price: 90, retail_price: 110 }
      ]
    }
  ];

  const CATS = [
    { id: 'all', label: 'All Items', icon: '🏪' },
    ...INVENTORY_GROUPS.map(group => ({ id: group.id, label: group.label, icon: group.icon }))
  ];

  function cleanName(name) {
    return name.replace(/\s*\([^)]+\)/, '').trim();
  }

  function extractUnit(name) {
    const match = name.match(/\(([^)]+)\)/);
    return match ? match[1] : 'Per pack';
  }

  function pickIcon(groupId, baseName) {
    if (groupId === 'staples') return '🌾';
    if (groupId === 'cooking') return /oil|ghee/i.test(baseName) ? '🫙' : /tea/i.test(baseName) ? '🍵' : '🍚';
    if (groupId === 'spices') return '🌶️';
    if (groupId === 'packaged') return /noodles/i.test(baseName) ? '🍜' : /cornflakes/i.test(baseName) ? '🥣' : '📦';
    if (groupId === 'snacks') return /chocolate/i.test(baseName) ? '🍫' : /chips|snacks|wafer/i.test(baseName) ? '🍪' : '🥨';
    if (groupId === 'dairy') return /butter|cheese|paneer/i.test(baseName) ? '🧈' : '🥛';
    if (groupId === 'beverages') return /water/i.test(baseName) ? '💧' : /energy/i.test(baseName) ? '⚡' : '🥤';
    return /toothpaste/i.test(baseName) ? '🦷' : /shampoo/i.test(baseName) ? '🧴' : '🧼';
  }

  function buildDescription(item, groupLabel, unit) {
    const baseName = cleanName(item.name);
    return `${item.brand} ${baseName} is one of our ${groupLabel.toLowerCase()} items for everyday kirana shopping. ` +
      `This pack size is ${unit}, with a retail price of NPR ${item.retail_price} and an approximate Biratnagar wholesale rate of NPR ${item.wholesale_price}. ` +
      `It is suitable for family use, repeat monthly purchases, and bulk restocking.`;
  }

  function pickBadge(groupId, retailPrice, wholesalePrice, itemIndex) {
    if (groupId === 'dairy') return 'fresh';
    if (retailPrice - wholesalePrice >= 25) return 'sale';
    if (itemIndex === 0) return 'new';
    return null;
  }

  const PRODUCTS = INVENTORY_GROUPS.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => {
      const baseName = cleanName(item.name);
      const unit = extractUnit(item.name);
      return {
        id: (groupIndex + 1) * 100 + itemIndex,
        name: `${item.brand} ${baseName}`,
        shortName: baseName,
        brand: item.brand,
        cat: group.id,
        catLabel: group.label,
        icon: pickIcon(group.id, baseName),
        price: item.retail_price,
        wholesale: item.wholesale_price,
        old: null,
        unit,
        badge: pickBadge(group.id, item.retail_price, item.wholesale_price, itemIndex),
        feat: itemIndex === 0,
        description: buildDescription(item, group.label, unit),
        searchText: `${item.brand} ${item.name} ${group.label}`.toLowerCase()
      };
    })
  );

  let cart = {};
  let activeCat = 'all';
  let searchQ = '';

  function genOrderId() { return 'MKS-' + Date.now().toString().slice(-7); }
  function formatMoney(value) { return `NPR ${value}`; }

  function buildOrderLines() {
    return Object.entries(cart).map(([id, qty]) => {
      const p = PRODUCTS.find(x => x.id == id);
      return `  • ${p.name} (${p.unit}) × ${qty} = ${formatMoney(p.price * qty)}`;
    }).join('\n');
  }

  function getTotal() {
    return Object.entries(cart).reduce((a, [id, qty]) => a + PRODUCTS.find(x => x.id == id).price * qty, 0);
  }

  function buildWAMsg(orderId) {
    const lines = buildOrderLines();
    const total = getTotal();
    return `🌿 *Order from ${STORE}*\n` +
      `Order ID: *${orderId}*\n\n` +
      `*Items Ordered:*\n${lines}\n\n` +
      `*Total: ${formatMoney(total)}*\n` +
      `${total >= FREE_DELIVERY_MIN ? '✅ Free Delivery!' : `🚚 Delivery: ${formatMoney(DELIVERY_CHARGE)}`}\n\n` +
      `📍 Delivery Address: [Please add your address here]\n` +
      `📞 Your Phone: [Your number]\n` +
      `💳 Payment: Cash on Delivery\n\n` +
      `_Feel free to edit this message before sending!_`;
  }

  function buildEmailBody(orderId) {
    const lines = buildOrderLines();
    const total = getTotal();
    return `Dear ${STORE},\n\nI would like to place the following order:\n\n${lines}\n\n` +
      `Order Total: ${formatMoney(total)}\n` +
      `${total >= FREE_DELIVERY_MIN ? 'Eligible for Free Delivery!' : `Delivery Charge: ${formatMoney(DELIVERY_CHARGE)}`}\n\n` +
      `Order ID: ${orderId}\n\n` +
      `--- Please fill in your details below ---\n` +
      `Delivery Address: \nYour Name: \nPhone Number: \nPreferred Delivery Time: \nPayment Method: Cash on Delivery\n\n` +
      `Thank you!\n\n` +
      `_You can edit this email before sending._`;
  }

  function placeOrder(method) {
    const orderId = genOrderId();
    if (method === 'wa') {
      const msg = buildWAMsg(orderId);
      showModal('💬', 'Order via WhatsApp',
        'Review your order below. Click "Open WhatsApp" to send — you can still edit the message before hitting send.',
        orderId, msg,
        `<button class="modal-btn modal-btn-wa" onclick="doWA('${encodeURIComponent(msg)}')">💬 Open WhatsApp →</button>` +
        `<button class="modal-btn modal-btn-sec" onclick="closeModal()">← Back to Cart</button>`
      );
    } else if (method === 'gm') {
      const body = buildEmailBody(orderId);
      const sub = `Order #${orderId} — ${STORE}`;
      showModal('✉️', 'Order via Gmail',
        'Review your order below. Click "Open Gmail" to send — you can edit the email before sending.',
        orderId, body,
        `<button class="modal-btn modal-btn-gm" onclick="doEmail('${encodeURIComponent(sub)}','${encodeURIComponent(body)}')">✉️ Open Gmail →</button>` +
        `<button class="modal-btn modal-btn-sec" onclick="closeModal()">← Back to Cart</button>`
      );
    } else {
      showModal('📞', 'Order via Phone Call',
        `Call us now and we'll take your order directly over the phone!`,
        orderId, buildWAMsg(orderId),
        `<button class="modal-btn modal-btn-ph" onclick="callStore()">📞 Call +977 9811313232 →</button>` +
        `<button class="modal-btn modal-btn-wa" onclick="doWA('${encodeURIComponent(buildWAMsg(orderId))}')">💬 WhatsApp Instead</button>` +
        `<button class="modal-btn modal-btn-sec" onclick="closeModal()">← Back to Cart</button>`
      );
    }
  }

  function doWA(encodedMsg) { window.open('https://wa.me/' + PHONE + '?text=' + encodedMsg, '_blank'); }
  function doEmail(sub, body) { window.open('mailto:' + EMAIL + '?subject=' + sub + '&body=' + body); }
  function callStore() { window.open('tel:+9779811313232'); }
  function openMap() { window.open(MAP_URL, '_blank'); }
  function goWA(msg) { window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg), '_blank'); }
  function emailStore() { window.open('mailto:' + EMAIL + '?subject=Enquiry — ' + STORE + '&body=Hi, I have an enquiry about your store.'); }
  function emailDirectOrder() { window.open('mailto:' + EMAIL + '?subject=Custom Order — ' + STORE + '&body=Dear Mahajan Kirana,\n\nI would like to place a custom order:\n\nItems needed:\n1. \n2. \n3. \n\nMy Details:\nName: \nAddress: \nPhone: \nDelivery Time: \n\nThank you!'); }

  function openProductDetail(id) {
    const p = PRODUCTS.find(x => x.id == id);
    if (!p) return;
    document.getElementById('dIcon').textContent = p.icon;
    document.getElementById('dTitle').textContent = p.shortName;
    document.getElementById('dBrand').textContent = p.brand;
    document.getElementById('dMeta').textContent = `${p.catLabel} • ${p.unit}`;
    document.getElementById('dDesc').textContent = p.description;
    document.getElementById('dRetail').textContent = formatMoney(p.price);
    document.getElementById('dWholesale').textContent = formatMoney(p.wholesale);
    document.getElementById('dAddBtn').onclick = function () {
      addToCart(id);
      closeProductDetail();
    };
    document.getElementById('dAskBtn').onclick = function () {
      goWA(`Hi Mahajan Kirana, I want to ask about ${p.name} (${p.unit}). Please share availability and wholesale details.`);
    };
    document.getElementById('detailWrap').classList.add('on');
  }

  function closeProductDetail() {
    document.getElementById('detailWrap').classList.remove('on');
  }

  function showModal(icon, title, sub, orderId, preview, btnHTML) {
    document.getElementById('mIcon').textContent = icon;
    document.getElementById('mTitle').textContent = title;
    document.getElementById('mSub').textContent = sub;
    document.getElementById('mOrderId').textContent = 'Order ID: ' + orderId;
    document.getElementById('mPreview').textContent = preview;
    document.getElementById('mBtns').innerHTML = btnHTML;
    document.getElementById('modalWrap').classList.add('on');
  }
  function closeModal() { document.getElementById('modalWrap').classList.remove('on'); }
  document.getElementById('modalWrap').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
  document.getElementById('detailWrap').addEventListener('click', function (e) { if (e.target === this) closeProductDetail(); });

  function addToCart(id, e) {
    e && e.stopPropagation();
    cart[id] = (cart[id] || 0) + 1;
    refreshAll();
    const p = PRODUCTS.find(x => x.id == id);
    toast(p.icon + ' ' + p.name + ' added to cart!');
  }
  function updCart(id, d, e) {
    e && e.stopPropagation();
    cart[id] = Math.max(0, (cart[id] || 0) + d);
    if (!cart[id]) delete cart[id];
    refreshAll();
  }
  function delCart(id) { delete cart[id]; refreshAll(); }

  function refreshAll() {
    const total = Object.values(cart).reduce((a, b) => a + b, 0);
    document.getElementById('cCount').textContent = total;
    renderCartDrawer();
    renderGrid('featGrid', PRODUCTS.filter(p => p.feat));
    const cur = activeCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
    const filtered = searchQ ? cur.filter(p => p.searchText.includes(searchQ)) : cur;
    renderGrid('shopGrid', filtered);
    document.getElementById('shopCount').textContent = filtered.length + ' items';
  }

  function renderGrid(elId, list) {
    const el = document.getElementById(elId);
    if (!el) return;
    if (!list.length) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No products found.</p></div>`; return; }
    el.innerHTML = list.map(p => {
      const inC = cart[p.id] || 0;
      const badgeMap = { sale: 'pbadge-sale', new: 'pbadge-new', hot: 'pbadge-hot', fresh: 'pbadge-fresh' };
      const ctrl = inC > 0
        ? `<div class="qctrl"><button class="qbtn" onclick="updCart(${p.id},-1,event)">−</button><span class="qnum">${inC}</span><button class="qbtn" onclick="updCart(${p.id},1,event)">+</button></div>`
        : `<button class="addbtn" onclick="addToCart(${p.id},event)" title="Add to cart">+</button>`;
      return `<div class="pcard" onclick="openProductDetail(${p.id})" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductDetail(${p.id});}">
      ${p.badge ? `<div class="pbadge ${badgeMap[p.badge]}">${p.badge.toUpperCase()}</div>` : ''}
      <div class="pcard-img">${p.icon}</div>
      <div class="pcard-body">
        <div class="pcard-name">${p.shortName}</div>
        <div class="pcard-brand">${p.brand}</div>
        <div class="pcard-unit">${p.catLabel} • ${p.unit}</div>
        <div class="pcard-wholesale">Bulk: ${formatMoney(p.wholesale)}</div>
        <div class="pcard-bot">
          <div><span class="pcard-price">${formatMoney(p.price)}</span>${p.old ? `<span class="pcard-old">${formatMoney(p.old)}</span>` : ''}</div>
          ${ctrl}
        </div>
      </div>
    </div>`;
    }).join('');
  }

  function renderCartDrawer() {
    const body = document.getElementById('drBody');
    const foot = document.getElementById('drFoot');
    const items = Object.entries(cart);
    if (!items.length) {
      body.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><p style="font-size:.82rem">Your cart is empty.<br>Browse products and add items!</p></div>`;
      foot.style.display = 'none'; return;
    }
    foot.style.display = 'block';
    let total = 0;
    body.innerHTML = items.map(([id, qty]) => {
      const p = PRODUCTS.find(x => x.id == id);
      total += p.price * qty;
      return `<div class="ci">
      <div class="ci-img">${p.icon}</div>
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${formatMoney(p.price)} × ${qty} = ${formatMoney(p.price * qty)}</div>
        <div class="qctrl" style="margin-top:5px">
          <button class="qbtn" onclick="updCart(${id},-1)">−</button>
          <span class="qnum">${qty}</span>
          <button class="qbtn" onclick="updCart(${id},1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="delCart(${id})" title="Remove">🗑</button>
    </div>`;
    }).join('');
    document.getElementById('drTotal').textContent = formatMoney(total);
    const delEl = document.getElementById('drDelivery');
    if (total >= FREE_DELIVERY_MIN) { delEl.textContent = '✅ Free delivery applied!'; delEl.className = 'dr-delivery free'; }
    else { delEl.textContent = 'Add ' + formatMoney(FREE_DELIVERY_MIN - total) + ' more for free delivery'; delEl.className = 'dr-delivery'; }
  }

  function renderCats(elId, includeAll) {
    const el = document.getElementById(elId);
    const list = includeAll ? CATS : CATS;
    el.innerHTML = list.map(c => `<div class="cchip${activeCat === c.id ? ' on' : ''}" onclick="setCat('${c.id}','${elId}')"><span class="cchip-icon">${c.icon}</span>${c.label}</div>`).join('');
  }

  function setCat(id, fromEl) {
    activeCat = id;
    searchQ = '';
    document.getElementById('searchInput').value = '';
    renderCats('homeCats', true);
    renderCats('shopCats', true);
    const filtered = id === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === id);
    renderGrid('shopGrid', filtered);
    document.getElementById('shopCount').textContent = filtered.length + ' items';
    if (fromEl === 'homeCats') go('shop');
  }

  function filterGo(cat) { activeCat = cat; go('shop'); }

  function onSearch() {
    searchQ = document.getElementById('searchInput').value.trim().toLowerCase();
    const base = activeCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
    const filtered = searchQ ? base.filter(p => p.searchText.includes(searchQ)) : base;
    renderGrid('shopGrid', filtered);
    document.getElementById('shopCount').textContent = filtered.length + ' items';
    if (document.getElementById('pg-shop').classList.contains('on')) return;
    go('shop');
  }

  function go(page, btn) {
    document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
    document.getElementById('pg-' + page).classList.add('on');
    document.querySelectorAll('.ntab').forEach(b => b.classList.remove('on'));
    if (btn) btn.classList.add('on');
    else { const t = document.querySelector('.ntab[onclick*="\'' + page + '\'"]'); if (t) t.classList.add('on'); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'shop') {
      renderCats('shopCats', true);
      const filtered = activeCat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
      const filt2 = searchQ ? filtered.filter(p => p.searchText.includes(searchQ)) : filtered;
      renderGrid('shopGrid', filt2);
      document.getElementById('shopCount').textContent = filt2.length + ' items';
    }
  }

  function openCart() {
    document.getElementById('drawer').classList.add('on');
    document.getElementById('overlay').classList.add('on');
    renderCartDrawer();
  }
  function closeCart() {
    document.getElementById('drawer').classList.remove('on');
    document.getElementById('overlay').classList.remove('on');
  }

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('on'), 2400);
  }

  // INIT
  document.getElementById('pricingNote').textContent = `${PRICING_NOTE} Currency: NPR.`;
  renderCats('homeCats', true);
  renderGrid('featGrid', PRODUCTS.filter(p => p.feat));

