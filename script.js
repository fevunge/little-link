// Auto-play background music quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    
    // Tentar tocar automaticamente
    const playAudio = () => {
        audio.play().catch(err => {
            console.log('Autoplay bloqueado. Aguardando interação do usuário.');
            // Se o autoplay for bloqueado, toca no primeiro clique
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    };
    
    playAudio();
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Efeito de terminal typing no username (opcional)
    const username = document.querySelector('.username');
    if (username) {
        const text = username.textContent;
        username.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                username.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 500);
    }
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa todos os cards de projeto
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Efeito de glitch no hover do avatar (opcional)
    const avatar = document.querySelector('.profile-image');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.animation = 'glitch 0.3s ease';
        });
        
        avatar.addEventListener('animationend', () => {
            avatar.style.animation = '';
        });
    }
    
    // Console easter egg
    console.log('%c┌─────────────────────────────────────┐', 'color: #27084cff');
    console.log('%c│  Bem-vindo ao meu terminal! 🚀      │', 'color: #031b42ff');
    console.log('%c│  Feito com ❤️  e pouco café         │', 'color: #0e4f08ff');
    console.log('%c└─────────────────────────────────────┘', 'color: #230548ff');
    console.log('%c> Status: Online ✓', 'color: #a6e3a1');
});

setInterval(() => {
    if (Math.random() > 0.55) {
        document.body.style.opacity = '0.98';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    }
}, 3000);