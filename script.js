function filterArticles() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toUpperCase();
  let grid = document.querySelector('.projects-grid');
  let articles = grid.getElementsByTagName('article');

  for (let i = 0; i < articles.length; i++) {
    let title = articles[i].querySelector('.card-title');
    let txtValue = title.textContent || title.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      articles[i].style.display = "";
    } else {
      articles[i].style.display = "none";
    }
  }
  console.log('Filtering articles with query:', filter);
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('terminalInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim();
            alert('Comando recebido: ' + command);
            if (command) {
            console.log('Comando digitado:', command);
            this.value = '';
            }
        }
        });

        document.querySelector('.terminal').addEventListener('click', () => {
        document.getElementById('terminalInput').focus();
    });
    
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
    

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    const avatar = document.querySelector('.profile-image');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.animation = 'glitch 0.3s ease';
            avatar.style.opacity = '0.6';
        });
        
        avatar.addEventListener('animationend', () => {
            avatar.style.animation = '';
            avatar.style.opacity = '1';
        });
    }
});

setInterval(() => {
    if (Math.random() > 0.45) {
        document.body.style.opacity = '0.78';
        console.log('Blink effect triggered');
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    }
}, 3000);