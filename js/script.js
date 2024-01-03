   function checkAge() {
            var age = document.getElementById('ageInput').value;
            var resultCard = document.getElementById('result-card');
            var resultText = document.getElementById('result-text');

            if (age >= 18) {
                resultText.textContent = 'You are an adult.';
            } else {
                resultText.textContent = 'You are a child.';
            }
            resultCard.style.display = 'block';
        }
