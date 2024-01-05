   function checkAge() {
            var age = document.getElementById('ageInput').value;
            var resultCard = document.getElementById('result-card');
            var resultText = document.getElementById('result-text');
            var resultImage = document.getElementById('result-image');

            if (age >= 18) {
                resultImage.src = './image/adult.png';
                resultText.textContent = 'You are an adult.';
            } else {
                resultImage.src = './image/child.png'; 
                resultText.textContent = 'You are a child.';
            }
            resultCard.style.display = 'block';
        }
