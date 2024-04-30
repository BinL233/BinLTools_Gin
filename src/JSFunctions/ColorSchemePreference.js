function sendColorSchemePreference() {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    fetch('/api/color-scheme', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ colorScheme: colorScheme })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Color scheme preference was sent to the server:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}