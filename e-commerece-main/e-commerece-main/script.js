function setViewport() {
    var viewportMeta = document.querySelector("meta[name='viewport']");

    // Check the device type
    if (window.innerWidth <= 600) {
      // Mobile devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else if (window.innerWidth <= 1024) {
      // Tablet devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else {
      // Desktop devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    }
  }