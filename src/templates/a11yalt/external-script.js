'use client';

// Initialize all functionality when the script loads
export function initializeCalculator() {
  console.log('Initializing calculator...');

  // First, let's attach the calculator trigger event
  const calculatorTrigger = document.getElementById('calculator-trigger');
  const imageCountInput = document.getElementById('imageCount');

  if (!calculatorTrigger || !imageCountInput) {
    console.error('Calculator elements not found:', {
      trigger: !!calculatorTrigger,
      input: !!imageCountInput
    });
    return;
  }

  console.log('Found calculator elements, attaching events...');

  // Enable/disable calculator trigger based on input
  imageCountInput.addEventListener('input', function() {
    const value = this.value.trim();
    calculatorTrigger.disabled = !value;
    calculatorTrigger.setAttribute('aria-disabled', !value);
  });

  // Attach click handler
  calculatorTrigger.addEventListener('click', function() {
    console.log('Calculator trigger clicked!');
    const imageCount = parseInt(imageCountInput.value);
    console.log('Image count:', imageCount);
    populateCalcResults(imageCount);
  });

// Base cost fo 50 images alt text packs - $ 25.00
  const creditPackCost = 0.5;
  const creditPack = {
    productLinkLabel: 'Credit Packs',
    productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjhZTUo5VFFUTjI2RkZTVEpYQlFa?preview_theme_id=174582956306',
    imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
    totalCost: 125.00,
    itemsIncluded: 250,
    costPerImage: creditPackCost,
    flag: "Pay as you go",
    cardCTA: "Build Your Bundle"
  };



  // All Tiers for dinamic selection

  const tiers = [
    {
      min: 0,
      max: 2500,
      totalCost: 625,
      costPerImage: 0.25,
      productLinkLabel: 'Starter Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMVJNWkgzOVlQQjFGWlBRRUpDMUFL?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: true,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 2501,
      max: 5000,
      totalCost: 1200,
      costPerImage: 0.24,
      productLinkLabel: 'Basic Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMVdWMUJKSDNCRDFKSEJNMDNRSk5W?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 5001,
      max: 10000,
      totalCost: 2200,
      costPerImage: 0.22,
      productLinkLabel: 'Standard Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMVkzUzgxTVE1S0VWNEQ1SFpXWUhF?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: true,
      flag: "Most Popular",
      cardCTA: "Get Started"
    },

    {
      min: 10001,
      max: 20000,
      totalCost: 4000,
      costPerImage: 0.20,
      productLinkLabel: 'Advanced Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMVpLVDNINzZLRU5ISEVOQjMyUkQw?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 20001,
      max: 35000,
      totalCost: 4900,
      costPerImage: 0.14,
      productLinkLabel: 'Pro Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjA5WVJBMkg4VzhZRzZOSE1KNVgw?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 35001,
      max: 50000,
      totalCost: 5000,
      costPerImage: 0.10,
      productLinkLabel: 'Premium Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjEyMVc1MFIxODZLWkhIVFhaNFZY?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: true,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 50001,
      max: 65000,
      totalCost: 5200,
      costPerImage: 0.08,
      productLinkLabel: 'Elite Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjFQOFFOS1pBSk1ESFJKQzlDNjJQ?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 65001,
      max: 80000,
      totalCost: 5600,
      costPerImage: 0.07,
      productLinkLabel: 'Mega Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjI5MEM3VjNHTVlHOUQ5NFA1SFBY?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 80001,
      max: 100000,
      totalCost: 6000,
      costPerImage: 0.06,
      productLinkLabel: 'Ultra Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjMwSkRQUE4xVFdFN1k2MkZRWDNI?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 100001,
      max: 250000,
      totalCost: 9500,
      costPerImage: 0.038,
      productLinkLabel: 'Super Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjNQTkdERDZZMTFYNlBDNTNGUEhI?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 250001,
      max: 450000,
      totalCost: 11250,
      costPerImage: 0.025,
      productLinkLabel: 'Ultimate Pack',
      productLinkURL: 'https://shop.**group.com/checkouts/cn/Z2NwLXVzLWNlbnRyYWwxOjAxSkVFMjQ3TTRORzdWWU4zWDBUSk5NSEpR?preview_theme_id=174582956306',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Get Started"
    },

    {
      min: 450001,
      max: Infinity,
      totalCost: 'Custom',
      productLinkURL: 'https://www.**group.com/contact',
      imageURL: 'https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg',
      isBestSeller: false,
      flag: "",
      cardCTA: "Contact Us"
    }

  ];


  // US Number format

  function formatNumbers(numberSelectors) {
    numberSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.innerHTML = element.innerHTML.replace(/\b\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
      });
    });
  }

  const numberSelectors = [
    '.znt-tier-card_top-amount',
    '.znt-tier-card_heading',
    '.znt-tier-card_list_item > span'
  ];

  function scrollToCalcSection() {
    const element = document.getElementById('calc-section_heading');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Element with ID 'calc-section_heading' not found.");
    }
  }







  // Utility function to format a single number

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function initializeContactLinks() {
    // Select all links with href="#section-contact"
    const contactLinks = document.querySelectorAll('a[href="#section-contact"]');

    // Loop through each link and attach the event listener
    contactLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the value from #imageCount
        const imageCountInput = document.getElementById('imageCount');
        const messageField = document.getElementById('ContactForm-body');
        const nameField = document.getElementById('ContactForm-name'); // The name field to focus on

        // Validate if the elements exist
        if (!imageCountInput || !messageField || !nameField) {
          console.error("One or more required elements (#imageCount, #ContactForm-body, #ContactForm-name) do not exist.");
          return;
        }

        let imageCount = imageCountInput.value;

        // Validate imageCount
        if (!imageCount || isNaN(imageCount)) {
          alert('Please enter a valid number of images.');
          return;
        }

        // Format the imageCount with commas
        imageCount = formatNumberWithCommas(imageCount);

        // Construct the message
        const message = `Hello,

I'm interested in using A11y Alt to update the alt text for my product catalog images. 
I have approximately ${imageCount} images on my website and would like to learn more about how A11y Alt could support our needs.
Thank you!`;

        // Set the message into the message field
        messageField.value = message;

        // Set focus to the name field
        nameField.focus();

        // Scroll smoothly to #section-contact
        document.getElementById('section-contact').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }


  function createCard(tier) {
    const activeClass = tier.isActive ? 'is-active' : '';
    const flagClass = tier.flag ? tier.flag.toLowerCase().replace(/\s+/g, '-') : '';
    const selectedLabel = tier.isActive ? '<p class="znt-tier-card_selected-label">Recommended Tier</p>' : '';
    const maxImages = tier.flag === "Pay as you go" ? tier.itemsIncluded : (tier.max === Infinity ? document.getElementById('imageCount').value || 'Custom' : tier.max);

    // Handle creditPack specifically: Direct link without dialog
    if (tier.flag === "Pay as you go") {
      return `
      <li class="znt-tier-card ${activeClass} ${flagClass}" role="listitem">
        ${tier.flag ? `<h4 class="znt-tier-card_flag">${tier.flag}</h4>` : ''}
        ${selectedLabel}
        ${tier.imageURL ? `<img src="${tier.imageURL}" alt="" class="znt-tier-card_image">` : ''}
        ${maxImages ? `<p class="znt-tier-card_top-amount"><span class="znt-tier-card_top-amount_2">${maxImages}</span> <span class="znt-tier-card_top-amount_3">images</span></p>` : ''}
        ${tier.productLinkLabel ? `<h4 class="znt-tier-card_top-text">${tier.productLinkLabel}</h4>` : ''}
        <p class="znt-tier-card_heading">$${tier.totalCost} <span>/Pack</span></p>
        ${generateTierList(tier)}
        
        <!-- Direct link without dialog for creditPack -->
        <a href="${tier.productLinkURL}" class="znt-checkout-dialog_button">${tier.cardCTA}</a>
      </li>

    `;

    }

    // Handle Custom tier specifically: Direct link without dialog
    if (tier.totalCost === 'Custom') {
      return `
      <li class="znt-tier-card ${activeClass} ${flagClass}" role="listitem">
        ${tier.flag ? `<h4 class="znt-tier-card_flag">${tier.flag}</h4>` : ''}
        ${selectedLabel}
        ${tier.imageURL ? `<img src="${tier.imageURL}" alt="" class="znt-tier-card_image">` : ''}
        ${maxImages || tier.itemsIncluded ? `<p class="znt-tier-card_top-amount"><span class="znt-tier-card_top-amount_2">${maxImages}</span> <span class="znt-tier-card_top-amount_3">images</span></p>` : ''}
        ${tier.productLinkLabel ? `<h4 class="znt-tier-card_top-text">${tier.productLinkLabel}</h4>` : ''}
        <p class="znt-tier-card_heading">${tier.totalCost}</p>
        ${generateTierList(tier)}

        <!-- Custom tier specific link -->
        <a href="${tier.productLinkURL}" class="znt-checkout-dialog_button">${tier.cardCTA}</a>
      </li>
    `;
    }

    // Default behavior for other tiers with dialog
    return `
    <li class="znt-tier-card ${activeClass} ${flagClass}" role="listitem">
      ${tier.flag ? `<h4 class="znt-tier-card_flag">${tier.flag}</h4>` : ''}
      ${selectedLabel}
      ${tier.imageURL ? `<img src="${tier.imageURL}" alt="" class="znt-tier-card_image">` : ''}
      ${maxImages || tier.itemsIncluded ? `<p class="znt-tier-card_top-amount"><span class="znt-tier-card_top-amount_2">${maxImages}</span> <span class="znt-tier-card_top-amount_3">images</span></p>` : ''}
      ${tier.productLinkLabel ? `<h4 class="znt-tier-card_top-text">${tier.productLinkLabel}</h4>` : ''}
      ${tier.totalCost && tier.totalCost !== 'Custom' ? `<p class="znt-tier-card_heading"><span>$</span> ${tier.totalCost} <span>/Pack</span></p>` : ''}
      ${generateTierList(tier)}


      <!-- Dialog structure for standard tiers -->
      <button aria-haspopup="dialog" class="znt-get-started-button">${tier.cardCTA}</button>
      <div class="znt-checkout-dialog_container">
        <div class="znt-checkout-dialog" role="dialog" aria-labelledby="dialog-title" aria-modal="true">
          <button type="button" class="znt-checkout-dialog_close" aria-label="Close dialog">
            <span class="visually-hidden">Close</span>
          </button>
          <h2 id="dialog-title">Service Agreement</h2>
          <div class="znt-checkout-dialog_checkbox">
            <input type="checkbox" id="termsCheckbox" class="znt-checkout-dialog_checkbox-input" aria-required="true">
            <label for="termsCheckbox">
              I agree to the <a href="https://shop.**group.com/pages/terms-of-service-a11y-alt" target="_blank" rel="noopener noreferrer">Terms of Service</a>(required).
            </label>
          </div>
          ${tier.productLinkURL ? `<a href="${tier.productLinkURL}" class="znt-checkout-dialog_button">Checkout</a>` : ''}
        </div>
      </div>
    </li>
  `;
  }

  function generateTierList(tier) {

    if (!tier.max && !tier.itemsIncluded && !tier.costPerImage) return '';

    // Calculate totalSaved only if `costPerImage` is different from `creditPackCost`
    const totalSaved = (tier.costPerImage && tier.costPerImage !== creditPackCost)
      ? ((1 - (tier.costPerImage / creditPackCost)) * 100).toFixed(0) + '%'
      : '';

    const maxImages = tier.flag === "Pay as you go" ? tier.itemsIncluded : (tier.max === Infinity ? document.getElementById('imageCount').value || 'Custom' : tier.max);

    return `
          <h5 class="znt-tier-card_list-heading">Includes:</h5>
          <ul class="znt-tier-card_list">
            ${totalSaved ? `<li class="znt-tier-card_list_item">
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span><strong>${totalSaved}</strong> OFF!</span></li>` : ''}

            ${maxImages || tier.itemsIncluded ? `<li class="znt-tier-card_list_item">

              <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>

              <span>Up to <strong>${maxImages}</strong> alt texts</span></li>` : ''}

            ${tier.costPerImage ? `<li class="znt-tier-card_list_item">

              <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span><strong>$ ${tier.costPerImage.toFixed(2)}</strong> Per Alt Text</span></li>` : ''}
          </ul>
        `;
  }

  function populateCreditPack() {
    const creditPackHtml = createCard(creditPack);
    document.getElementById('znt-pack-pack').innerHTML = creditPackHtml;
    formatNumbers(numberSelectors);
  }

  function populateBestSellers() {
    const bestSellersHtml = tiers
      .filter(tier => tier.isBestSeller)
      .map(createCard)
      .join('');

    document.getElementById('znt-best-sellers-section').innerHTML = bestSellersHtml;
    formatNumbers(numberSelectors);
  }

  function populateCalcResults(imageCount) {
    const index = tiers.findIndex(tier => imageCount >= tier.min && imageCount <= tier.max);

    if (index === -1) {
      console.log('No matching tier found.');
      document.getElementById('znt-tier-calc-section').innerHTML = '<p>No matching tier found.</p>';
      return;
    }

    tiers.forEach((tier, i) => {
      tier.isActive = (i === index);
    });

    const previousTier = tiers[index - 1] || null;
    const currentTier = tiers[index];
    const nextTier = tiers[index + 1] || null;

    const calcHtml = `
          ${previousTier ? createCard(previousTier) : ''}
          ${createCard(currentTier)}
          ${nextTier ? createCard(nextTier) : ''}
        `;

    document.getElementById('znt-tier-calc-section').innerHTML = calcHtml;
    formatNumbers(numberSelectors);
    scrollToCalcSection();
    formatNumbers(numberSelectors);
    initializeContactLinks();
    formatNumbers(numberSelectors);
    const buttons = document.querySelectorAll('.znt-get-started-button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const tierCard = button.closest('.znt-tier-card');
        const dialog = tierCard.querySelector('.znt-checkout-dialog_container');

        if (dialog) {
          dialog.classList.add('znt--open');
          dialog.setAttribute('tabindex', '-1');
          document.body.classList.add('znt-agreement-dialog-open');
          dialog.focus();


          function getFocusableElements() {
            return Array.from(dialog.querySelectorAll('a:not([aria-disabled="true"]), button:not([aria-disabled="true"]), input, [tabindex]:not([tabindex="-1"])'));
          }

          function trapFocus(event) {
            const focusableElements = getFocusableElements();
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            if (event.key === 'Tab') {
              if (event.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                  event.preventDefault();
                  lastFocusableElement.focus();
                }
              } else {
                if (document.activeElement === lastFocusableElement) {
                  event.preventDefault();
                  firstFocusableElement.focus();
                }
              }
            }

          }

          function closeDialog() {
            dialog.classList.remove('znt--open');
            document.body.classList.remove('znt-agreement-dialog-open');
            button.focus();
            dialog.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', escCloseListener);
          }

          // Event listener for ESC key to close dialog
          function escCloseListener(event) {
            if (event.key === 'Escape') {
              closeDialog();
            }
          }

          dialog.addEventListener('keydown', trapFocus);
          document.addEventListener('keydown', escCloseListener); // Listen for ESC key

          dialog.addEventListener('blur', function () {
            dialog.removeAttribute('tabindex');
          }, { once: true });

          const closeButton = dialog.querySelector('.znt-checkout-dialog_close');
          closeButton.addEventListener('click', function () {
            closeDialog(); // Call closeDialog function when close button is clicked
          }, { once: true });

          const termsCheckbox = dialog.querySelector('#termsCheckbox');
          const checkoutButton = dialog.querySelector('.znt-checkout-dialog_button');

          if (!termsCheckbox.checked) {
            checkoutButton.classList.add('disabled');
            checkoutButton.setAttribute('aria-disabled', 'true');
            checkoutButton.setAttribute('tabindex', '-1');
          }

          termsCheckbox.addEventListener('change', function () {
            if (this.checked) {
              checkoutButton.classList.remove('disabled');
              checkoutButton.removeAttribute('aria-disabled');
              checkoutButton.removeAttribute('tabindex');
            } else {
              checkoutButton.classList.add('disabled');
              checkoutButton.setAttribute('aria-disabled', 'true');
              checkoutButton.setAttribute('tabindex', '-1');
            }
          });

          checkoutButton.addEventListener('click', function (event) {
            if (checkoutButton.classList.contains('disabled')) {
              event.preventDefault();
            }
          });
        }
      });
    });
  }

  // Event listeners are now attached in the initialization function

  document.addEventListener('DOMContentLoaded', function () {
    populateBestSellers();
    populateCreditPack();
  });

  const form = document.getElementById('znt-image-calculator');
  const triggerButton = document.getElementById('calculator-trigger');

  form.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      triggerButton.click();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.znt-get-started-button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const tierCard = button.closest('.znt-tier-card');
        const dialog = tierCard.querySelector('.znt-checkout-dialog_container');

        if (dialog) {
          dialog.classList.add('znt--open');
          dialog.setAttribute('tabindex', '-1');
          document.body.classList.add('znt-agreement-dialog-open');
          dialog.focus();


          function getFocusableElements() {
            return Array.from(dialog.querySelectorAll('a:not([aria-disabled="true"]), button:not([aria-disabled="true"]), input, [tabindex]:not([tabindex="-1"])'));
          }

          function trapFocus(event) {
            const focusableElements = getFocusableElements();
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            if (event.key === 'Tab') {
              if (event.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                  event.preventDefault();
                  lastFocusableElement.focus();
                }
              } else {
                if (document.activeElement === lastFocusableElement) {
                  event.preventDefault();
                  firstFocusableElement.focus();
                }
              }
            }
          }

          function closeDialog() {
            dialog.classList.remove('znt--open');
            document.body.classList.remove('znt-agreement-dialog-open');
            button.focus();
            dialog.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', escCloseListener);
          }

          // Event listener for ESC key to close dialog
          function escCloseListener(event) {
            if (event.key === 'Escape') {
              closeDialog();
            }
          }

          dialog.addEventListener('keydown', trapFocus);
          document.addEventListener('keydown', escCloseListener); // Listen for ESC key

          dialog.addEventListener('blur', function () {
            dialog.removeAttribute('tabindex');
          }, { once: true });

          const closeButton = dialog.querySelector('.znt-checkout-dialog_close');
          closeButton.addEventListener('click', function () {
            closeDialog(); // Call closeDialog function when close button is clicked
          }, { once: true });

          const termsCheckbox = dialog.querySelector('#termsCheckbox');
          const checkoutButton = dialog.querySelector('.znt-checkout-dialog_button');

          if (!termsCheckbox.checked) {
            checkoutButton.classList.add('disabled');
            checkoutButton.setAttribute('aria-disabled', 'true');
            checkoutButton.setAttribute('tabindex', '-1');
          }

          termsCheckbox.addEventListener('change', function () {
            if (this.checked) {
              checkoutButton.classList.remove('disabled');
              checkoutButton.removeAttribute('aria-disabled');
              checkoutButton.removeAttribute('tabindex');
            } else {
              checkoutButton.classList.add('disabled');
              checkoutButton.setAttribute('aria-disabled', 'true');
              checkoutButton.setAttribute('tabindex', '-1');
            }
          });

          checkoutButton.addEventListener('click', function (event) {
            if (checkoutButton.classList.contains('disabled')) {
              event.preventDefault();
            }
          });
        }
      });
    });
  });




} // End of initializeCalculator function

// Call initialize when the DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCalculator);
  } else {
    initializeCalculator();
  }
}