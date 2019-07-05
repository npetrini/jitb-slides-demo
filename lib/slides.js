toastr.options.closeOnHover = true;
toastr.options.closeButton = true;

document.addEventListener('DOMContentLoaded', function(e) {
  document.getElementById('loader').style.opacity = '0;';
  window.setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
  }, 1000);
  handleExternalVideos();
});

function handleExternalVideos() {
  const $externalVideos = $('.slide-content--video iframe[src^="http"], .slide-content--video video[src^="http"]');
  if ($externalVideos.length > 0) {
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);
    checkOnlineStatus();
  }
}

function checkOnlineStatus() {
  if (navigator.onLine) return toastr.clear();
  toastr.warning('Vous n\'avez pas de connexion internet. Les ressources externes ne pourront pas être chargées.', '', {
    timeOut: 0
  });
}
