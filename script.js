// Global State
let cart = [];
let wishlist = [];
let showAllProducts = false;

// Products Data
const products = [
  {
    id: 1,
    name: 'Macarons Especiais',
    description: 'Deliciosos macarons franceses em sabores únicos como lavanda, rosa e frutas vermelhas.',
    price: 'R$ 45,00',
    priceValue: 45.00,
    image: 'https://images.unsplash.com/photo-1582189649350-408b60a104b1?w=400&h=300&fit=crop',
    rating: 4.9,
    popular: true
  },
  {
    id: 2,
    name: 'Bolo de Aniversário',
    description: 'Bolos personalizados para ocasiões especiais, decorados com muito carinho e criatividade.',
    price: 'R$ 89,00',
    priceValue: 89.00,
    image: 'https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?w=400&h=300&fit=crop',
    rating: 5.0,
    popular: false
  },
  {
    id: 3,
    name: 'Cupcakes Artesanais',
    description: 'Cupcakes fofos e saborosos com coberturas cremosas e decorações encantadoras.',
    price: 'R$ 12,00',
    priceValue: 12.00,
    image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?w=400&h=300&fit=crop',
    rating: 4.8,
    popular: true
  },
  {
    id: 4,
    name: 'Docinhos Finos',
    description: 'Seleção de docinhos brasileiros gourmet: brigadeiros, beijinhos e cajuzinhos especiais.',
    price: 'R$ 35,00',
    priceValue: 35.00,
    image: 'https://images.unsplash.com/photo-1572978577832-287ca6539e9b?w=400&h=300&fit=crop',
    rating: 4.7,
    popular: false
  },
  {
    id: 5,
    name: 'Bolo de Chocolate',
    description: 'Irresistível bolo de chocolate com cobertura cremosa e raspas de chocolate amargo.',
    price: 'R$ 65,00',
    priceValue: 65.00,
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?w=400&h=300&fit=crop',
    rating: 4.9,
    popular: true
  },
  {
    id: 6,
    name: 'Torta de Morango',
    description: 'Deliciosa torta com base crocante, creme suave e morangos frescos selecionados.',
    price: 'R$ 58,00',
    priceValue: 58.00,
    image: 'https://images.unsplash.com/photo-1732638221415-75ab6519c590?w=400&h=300&fit=crop',
    rating: 4.8,
    popular: false
  },
  {
    id: 7,
    name: 'Trufas Premium',
    description: 'Trufas artesanais de chocolate belga com recheios variados e cobertura especial.',
    price: 'R$ 38,00',
    priceValue: 38.00,
    image: 'https://images.unsplash.com/photo-1729875749042-695a49842f6e?w=400&h=300&fit=crop',
    rating: 4.9,
    popular: true
  },
  {
    id: 8,
    name: 'Bolo de Limão',
    description: 'Refrescante bolo de limão siciliano com cobertura de cream cheese e raspas cítricas.',
    price: 'R$ 55,00',
    priceValue: 55.00,
    image: 'https://images.unsplash.com/photo-1678552882524-e94b282332e0?w=400&h=300&fit=crop',
    rating: 4.7,
    popular: false
  },
  {
    id: 9,
    name: 'Donuts Especiais',
    description: 'Donuts artesanais com massas fofas e coberturas coloridas em sabores exclusivos.',
    price: 'R$ 18,00',
    priceValue: 18.00,
    image: 'https://images.unsplash.com/photo-1604672857367-a0d662dfd7f2?w=400&h=300&fit=crop',
    rating: 4.6,
    popular: false
  },
  {
    id: 10,
    name: 'Cupcakes de Baunilha',
    description: 'Clássicos cupcakes de baunilha com buttercream sedoso e decorações delicadas.',
    price: 'R$ 15,00',
    priceValue: 15.00,
    image: 'https://images.unsplash.com/photo-1587536849024-daaa4a417b16?w=400&h=300&fit=crop',
    rating: 4.8,
    popular: false
  },
  {
    id: 11,
    name: 'Brownies Gourmet',
    description: 'Brownies densos e úmidos com chocolate meio amargo e nozes crocantes.',
    price: 'R$ 25,00',
    priceValue: 25.00,
    image: 'https://images.unsplash.com/photo-1739667648859-5434b0d677ad?w=400&h=300&fit=crop',
    rating: 4.7,
    popular: false
  },
  {
    id: 12,
    name: 'Cookies Premium',
    description: 'Cookies crocantes com gotas de chocolate belga e toque de flor de sal.',
    price: 'R$ 22,00',
    priceValue: 22.00,
    image: 'https://images.unsplash.com/photo-1606406305144-0e2d8f91e61a?w=400&h=300&fit=crop',
    rating: 4.6,
    popular: false
  }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const wishlistSidebar = document.getElementById('wishlist-sidebar');
const backdrop = document.getElementById('backdrop');
const productsGrid = document.getElementById('products-grid');
const toggleProductsBtn = document.getElementById('toggle-products');
const contactForm = document.getElementById('contact-form');
const produtoInput = document.getElementById('produto-input');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Load products
  renderProducts();
  
  // Update counters
  updateCounters();
  
  // Setup form submission
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Setup smooth scrolling for navigation links
  setupSmoothScrolling();
});

// Mobile Menu Functions
function toggleMobileMenu() {
  mobileMenu.classList.toggle('show');
  const isOpen = mobileMenu.classList.contains('show');
  
  if (isOpen) {
    menuIcon.setAttribute('data-lucide', 'x');
  } else {
    menuIcon.setAttribute('data-lucide', 'menu');
  }
  
  lucide.createIcons();
}

function closeMobileMenu() {
  mobileMenu.classList.remove('show');
  menuIcon.setAttribute('data-lucide', 'menu');
  lucide.createIcons();
}

// Sidebar Functions
function toggleCart() {
  cartSidebar.classList.toggle('show');
  backdrop.classList.toggle('show');
  renderCart();
}

function closeCart() {
  cartSidebar.classList.remove('show');
  backdrop.classList.remove('show');
}

function toggleWishlist() {
  wishlistSidebar.classList.toggle('show');
  backdrop.classList.toggle('show');
  renderWishlist();
}

function closeWishlist() {
  wishlistSidebar.classList.remove('show');
  backdrop.classList.remove('show');
}

function closeAllSidebars() {
  closeCart();
  closeWishlist();
  closeMobileMenu();
}

// Products Functions
function renderProducts() {
  const displayedProducts = showAllProducts ? products : products.slice(0, 4);
  
  productsGrid.innerHTML = displayedProducts.map((product, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.1}s">
      <div class="product-image">
        ${product.popular ? `<div class="product-badge">Popular</div>` : ''}
        <button class="product-wishlist ${isInWishlist(product.id) ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})">
          <i data-lucide="heart" ${isInWishlist(product.id) ? 'fill="currentColor"' : ''}></i>
        </button>
        <img src="${product.image}" alt="${product.name}" class="product-img">
      </div>
      <div class="product-content">
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">${product.rating}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <div class="product-price">${product.price}</div>
          <div class="product-actions">
            <button class="btn btn-primary" onclick="addToCart(${product.id})" style="flex: 1;">
              <i data-lucide="shopping-cart"></i>
              Adicionar
            </button>
            <button class="btn btn-outline" onclick="showToast('${product.name}', 'Funcionalidade em breve!')">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Update toggle button text
  toggleProductsBtn.textContent = showAllProducts ? 'Ver Menos Produtos' : 'Ver Todos os Produtos';
  
  // Reinitialize icons
  lucide.createIcons();
}

function toggleProducts() {
  showAllProducts = !showAllProducts;
  renderProducts();
  
  if (!showAllProducts) {
    setTimeout(() => {
      document.getElementById('produtos').scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }, 150);
  }
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i data-lucide="star" class="star" fill="currentColor"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i data-lucide="star" class="star" fill="currentColor" style="opacity: 0.5;"></i>';
  }
  
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars += '<i data-lucide="star" class="star" style="opacity: 0.3;"></i>';
  }
  
  return stars;
}

// Cart Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      quantity: 1
    });
  }
  
  updateCounters();
  showToast(`${product.name} adicionado ao carrinho! 🛒`, `${product.price} - Aproveite nossos deliciosos doces`);
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex > -1) {
    const product = cart[productIndex];
    cart.splice(productIndex, 1);
    updateCounters();
    renderCart();
    showToast(`${product.name} removido do carrinho`, 'Item removido do seu carrinho');
  }
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCounters();
    renderCart();
  }
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <i data-lucide="shopping-bag" class="empty-icon"></i>
        <h3>Carrinho vazio</h3>
        <p>Adicione alguns doces deliciosos ao seu carrinho</p>
        <button class="btn btn-primary" onclick="closeCart(); scrollToSection('produtos')">
          Continuar Comprando
        </button>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <div class="item-content">
          <div class="item-title">${item.name}</div>
          <div class="item-price">${item.price}</div>
          <div class="item-actions">
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                <i data-lucide="minus"></i>
              </button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                <i data-lucide="plus"></i>
              </button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    cartFooter.style.display = 'block';
    updateCartSummary();
  }
  
  lucide.createIcons();
}

function updateCartSummary() {
  const subtotal = cart.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
  document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
  document.getElementById('cart-total').textContent = formatPrice(subtotal);
}

// Wishlist Functions
function toggleWishlistItem(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingIndex = wishlist.findIndex(item => item.id === productId);
  
  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
    showToast(`${product.name} removido dos favoritos`, 'Item removido da sua lista de desejos');
  } else {
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image
    });
    showToast(`${product.name} adicionado aos favoritos! ❤️`, 'Acesse sua lista de desejos para ver todos os favoritos');
  }
  
  updateCounters();
  renderProducts(); // Re-render to update wishlist buttons
  updateWishlistFormCount();
}

function isInWishlist(productId) {
  return wishlist.some(item => item.id === productId);
}

function renderWishlist() {
  const wishlistItems = document.getElementById('wishlist-items');
  const wishlistFooter = document.getElementById('wishlist-footer');
  
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-state">
        <i data-lucide="heart" class="empty-icon"></i>
        <h3>Lista vazia</h3>
        <p>Adicione produtos aos favoritos clicando no ❤️</p>
        <button class="btn btn-primary" onclick="closeWishlist(); scrollToSection('produtos')">
          Explorar Produtos
        </button>
      </div>
    `;
    wishlistFooter.style.display = 'none';
  } else {
    wishlistItems.innerHTML = wishlist.map(item => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <div class="item-content">
          <div class="item-title">${item.name}</div>
          <div class="item-price">${item.price}</div>
          <div class="item-actions">
            <button class="btn btn-primary" onclick="addToCart(${item.id})" style="flex: 1;">
              <i data-lucide="shopping-cart"></i>
              Adicionar
            </button>
            <button class="remove-btn" onclick="toggleWishlistItem(${item.id})">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    wishlistFooter.style.display = 'block';
  }
  
  lucide.createIcons();
}

function addAllToCart() {
  wishlist.forEach(item => {
    addToCart(item.id);
  });
  showToast(`${wishlist.length} itens adicionados ao carrinho! 🛒`, 'Todos os favoritos foram movidos para o carrinho');
}

// Counter Functions
function updateCounters() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  
  // Update header badges
  updateBadge('cart-count', cartCount);
  updateBadge('wishlist-count', wishlistCount);
  
  // Update sidebar badges
  updateBadge('cart-sidebar-count', cartCount);
  updateBadge('wishlist-sidebar-count', wishlistCount);
  
  updateWishlistFormCount();
}

function updateBadge(elementId, count) {
  const badge = document.getElementById(elementId);
  if (badge) {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('show');
    } else {
      badge.classList.remove('show');
    }
  }
}

function updateWishlistFormCount() {
  const formCount = document.getElementById('wishlist-form-count');
  if (formCount) {
    formCount.textContent = wishlist.length > 0 ? `(${wishlist.length})` : '';
  }
}

// Form Functions
function fillFromWishlist() {
  if (wishlist.length === 0) {
    alert('❤️ Sua lista de favoritos está vazia!\n\nAdicione alguns produtos aos favoritos clicando no ❤️ e depois volte aqui.');
    return;
  }
  
  const productNames = wishlist.map(item => item.name).join(', ');
  produtoInput.value = productNames;
  showToast('Produtos preenchidos!', 'Lista de favoritos adicionada ao formulário');
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const nome = formData.get('nome') || 'Não informado';
  const telefone = formData.get('telefone') || 'Não informado';
  const email = formData.get('email') || 'Não informado';
  const produto = formData.get('produto') || 'Não informado';
  const mensagem = formData.get('mensagem') || 'Não informado';
  
  const whatsappMessage = `🍰 *Olá, Euforia!*

Gostaria de fazer um orçamento:

👤 *Nome:* ${nome}
📱 *Telefone:* ${telefone}
📧 *E-mail:* ${email}
🎂 *Produto(s) de Interesse:* ${produto}

💬 *Mensagem:*
${mensagem}

Aguardo o contato! ❤️`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/5511951559885?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
}

// Navigation Functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

// External Links
function openIFood() {
  window.open('https://www.ifood.com.br/delivery/sao-paulo-sp/euforia-confeitaria', '_blank');
}

function openInstagram() {
  window.open('https://www.instagram.com/confeitariaeuforia/', '_blank');
}

function openFacebook() {
  window.open('https://www.facebook.com/euforia.confeitaria', '_blank');
}

// Toast Notifications
function showToast(title, description = '') {
  const toastContainer = document.getElementById('toast-container');
  const toastId = 'toast-' + Date.now();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.id = toastId;
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${description ? `<div class="toast-description">${description}</div>` : ''}
    </div>
    <button class="toast-close" onclick="removeToast('${toastId}')">
      <i data-lucide="x"></i>
    </button>
  `;
  
  toastContainer.appendChild(toast);
  lucide.createIcons();
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(toastId);
  }, 5000);
}

function removeToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.style.animation = 'slideInFromRight 0.3s ease reverse';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }
}

// Utility Functions
function formatPrice(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function finalizarPedido() {
  const total = formatPrice(cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0));
  const itemCount = cart.length;
  
  closeCart();
  
  setTimeout(() => {
    alert(`🎉 Pedido confirmado!\n\n${itemCount} itens - Total: ${total}\n\nEm breve você receberá um email com os detalhes do pedido e informações de entrega.\n\nObrigado por escolher a Euforia! ❤️`);
  }, 500);
}