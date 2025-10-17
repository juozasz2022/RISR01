document.addEventListener('DOMContentLoaded', () => {
    const interactiveButton = document.getElementById('interactive-button');
    const interactionResult = document.getElementById('interaction-result');

    interactiveButton.addEventListener('click', () => {
        interactionResult.textContent = 'Button clicked! You have triggered an interactive event.';
    });
});