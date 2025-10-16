<script>
        function handleSubmit(event) {
            // Impedisce l'invio del form (causerebbe l'errore 405)
            event.preventDefault();
            
            // Ottiene i valori del form
            const nome = document.getElementById('nome').value;
            const cognome = document.getElementById('cognome').value;
            
            // Mostra il messaggio di conferma
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            
            // Resetta il form 
            document.getElementById('contactForm').reset();
            
            // Nasconde il messaggio dopo 5 secondi
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Scroll al messaggio di conferma
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // assicurarsi che il form non venga inviato
            return false;
        }
    </script>
