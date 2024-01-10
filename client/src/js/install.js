const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(deferredPrompt) {
        deferredPrompt.prompt();
        const userChoice = await deferredPrompt.userChoice;
        if(userChoice.outcome === 'aceppted') {
            console.log('PWA installation prompt accepted by user');
        } else {
            console.log('User has declined the PWA installation prompt');
        }
        deferredPrompt = null;
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Successful installation of PWA');
});
