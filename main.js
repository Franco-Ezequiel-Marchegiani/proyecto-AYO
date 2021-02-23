const flavoursContainer = document.getElementById('scrollHorizontal');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

    window.addEventListener('load', () => {
      self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }
      }, 15);
    });
