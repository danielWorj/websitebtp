 const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const devisForm = document.getElementById('devis-form');
        const formMessage = document.getElementById('form-message');
        const formError = document.getElementById('form-error');

        // Toggle du menu mobile
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fermeture du menu mobile après clic sur un lien
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Gestion de la soumission du formulaire (mock)
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.classList.add('hidden');
            formError.classList.add('hidden');

            // Validation simple de l'acceptation des mentions légales
            if (!document.getElementById('accepter_rgpd').checked) {
                formError.textContent = 'Veuillez accepter les mentions légales pour continuer.';
                formError.classList.remove('hidden');
                return;
            }

            // Simuler l'envoi de données (remplacez par votre logique backend réelle)
            setTimeout(() => {
                // Remplacer par (if (response.ok)) en cas d'appel API
                const success = Math.random() > 0.1; // 90% de succès mocké

                if (success) {
                    formMessage.classList.remove('hidden');
                    devisForm.reset();
                } else {
                    formError.textContent = "Une erreur serveur est survenue. Veuillez réessayer plus tard.";
                    formError.classList.remove('hidden');
                }
            }, 1000);
        });