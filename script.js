const app = Vue.createApp({
  data() {
    return {
      // Change dropdown icons
      dropdownStates: {
        features: false,
        company: false,
      }
    };
  },
  mounted() {
    // Repeat navbar content in off canvas component
    this.copyNavbarContent();
  },
  methods: {
    // Toggle dropdown icons
    toggleDropdown(dropdown) {
      this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
    },
    // Get dropdown icons
    getArrowIcon(dropdown) {
      return this.dropdownStates[dropdown] ? '/images/icon-arrow-up.svg' : '/images/icon-arrow-down.svg';
    },
    // Copy navbar content and paste in off canvas component
    copyNavbarContent() {
      const navbarContent = document.getElementById('navbar-content');
      const offCanvasBody = document.getElementById('offCanvasBody');
      offCanvasBody.innerHTML = '';
      offCanvasBody.innerHTML = navbarContent.innerHTML;
    },
  }
});

app.mount('#app');
