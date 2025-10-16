<script>
        function handleSubmit(event) {
            // Impedisce l'invio reale del form (che causerebbe l'errore 404)
            event.preventDefault();
            
            // Ottiene i valori del form
            const nome = document.getElementById('nome').value;
            const cognome = document.getElementById('cognome').value;
            
            // Mostra il messaggio di conferma
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            
            // Resetta il form (svuota i campi)
            document.getElementById('contactForm').reset();
            
            // Nasconde il messaggio dopo 5 secondi
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Scroll al messaggio di conferma
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Ritorna false per assicurarsi che il form non venga inviato
            return false;
        }
    </script>
