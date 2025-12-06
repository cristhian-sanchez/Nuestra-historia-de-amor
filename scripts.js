// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MODAL PARA AMPLIAR FOTOS
    // ==========================================
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    // Seleccionar todas las imágenes que se pueden ampliar
    const images = document.querySelectorAll('.photo-item img, .gallery-item img');
    
    // Agregar evento click a cada imagen
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });
    
    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    
    // ==========================================
    // ANIMACIONES AL HACER SCROLL
    // ==========================================
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function checkScroll() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        timelineItems.forEach(function(item, index) {
            if (isInViewport(item)) {
                setTimeout(function() {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
        
        galleryItems.forEach(function(item, index) {
            if (isInViewport(item)) {
                setTimeout(function() {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }
    
    // Configurar estilos iniciales para las animaciones
    document.querySelectorAll('.timeline-item').forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    document.querySelectorAll('.gallery-item').forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', checkScroll);
    
    // Ejecutar al cargar la página
    checkScroll();
    
    
    // ==========================================
    // SCROLL SUAVE AL HACER CLIC
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    
    // ==========================================
    // CONTADOR DE DÍAS JUNTOS (OPCIONAL)
    // ==========================================
    function calcularDiasJuntos() {
        // Fecha de inicio de la relación: 6 de diciembre de 2021
        const fechaInicio = new Date('2022-12-06');
        const fechaActual = new Date();
        
        // Calcular diferencia en milisegundos
        const diferencia = fechaActual - fechaInicio;
        
        // Convertir a días
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        
        return dias;
    }
    
    // Si quieres mostrar los días juntos, descomenta estas líneas:
    /*
    const diasJuntos = calcularDiasJuntos();
    console.log('Días juntos:', diasJuntos);
    
    // Puedes agregar esto al HTML si quieres mostrarlo
    const countdownDiv = document.querySelector('.countdown');
    if (countdownDiv) {
        const diasElement = document.createElement('p');
        diasElement.textContent = `${diasJuntos} días de amor`;
        diasElement.style.fontSize = '1.5rem';
        diasElement.style.marginTop = '20px';
        countdownDiv.appendChild(diasElement);
    }
    */
    
    
    // ==========================================
    // EFECTO PARALLAX EN EL HERO (OPCIONAL)
    // ==========================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
    
    
    // ==========================================
    // CREAR MÁS CORAZONES DINÁMICAMENTE
    // ==========================================
    function crearCorazon() {
        const heartsContainer = document.querySelector('.hearts-container');
        if (!heartsContainer) return;
        
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Eliminar el corazón después de la animación
        setTimeout(function() {
            heart.remove();
        }, 20000);
    }
    
    // Crear corazones cada cierto tiempo
    setInterval(crearCorazon, 3000);
    
    
    // ==========================================
    // DETECCIÓN DE IMÁGENES ROTAS
    // ==========================================
    document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('error', function() {
            // Si la imagen no carga, mostrar un placeholder
            this.style.background = 'linear-gradient(135deg, #ffe0f0 0%, #ffd4e8 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = '❤️ Foto por cargar';
        });
    });
    
    
    // ==========================================
    // MENSAJE DE CONSOLA ESPECIAL
    // ==========================================
    console.log('%c❤️ Feliz Aniversario ❤️', 'font-size: 30px; color: #ff6b9d; font-weight: bold;');
    console.log('%c3 años de amor inolvidable', 'font-size: 16px; color: #c44569;');
    
});


// ==========================================
// FUNCIÓN PARA AGREGAR MÚSICA DE FONDO (OPCIONAL)
// ==========================================
// Si quieres agregar música de fondo, descomenta y ajusta:
/*
function agregarMusica() {
    const audio = new Audio('tu-cancion.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    // Botón para controlar la música
    const musicBtn = document.createElement('button');
    musicBtn.innerHTML = '🎵';
    musicBtn.style.position = 'fixed';
    musicBtn.style.bottom = '20px';
    musicBtn.style.right = '20px';
    musicBtn.style.width = '60px';
    musicBtn.style.height = '60px';
    musicBtn.style.borderRadius = '50%';
    musicBtn.style.border = 'none';
    musicBtn.style.background = '#ff6b9d';
    musicBtn.style.fontSize = '30px';
    musicBtn.style.cursor = 'pointer';
    musicBtn.style.zIndex = '1000';
    musicBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    
    let isPlaying = false;
    
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = '🎵';
        } else {
            audio.play();
            musicBtn.innerHTML = '🔊';
        }
        isPlaying = !isPlaying;
    });
    
    document.body.appendChild(musicBtn);
}

// Llamar la función si quieres activar la música
// agregarMusica();
*/