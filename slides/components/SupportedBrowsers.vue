<script setup lang="ts">

const props = defineProps({
    firefox: { default: undefined, },
    chrome: { default: undefined, },
    safari: { default: undefined, },
    edge: { default: undefined, },
});

/** https://support.wix.com/en/article/supported-browsers */
const browsers = {
    chrome: 92,
    edge: 100,
    firefox: 91,
    safari: 14,
}

const items = [
    { name: 'chrome', version: props.chrome || '-', isSupported: (parseFloat(props.chrome ?? '0') || Infinity) <= browsers.chrome },
    { name: 'edge', version: props.edge || '-', isSupported: (parseFloat(props.edge ?? '0') || Infinity) <= browsers.edge },
    { name: 'firefox', version: props.firefox || '-', isSupported: (parseFloat(props.firefox ?? '0') || Infinity) <= browsers.firefox },
    { name: 'safari', version: props.safari || '-', isSupported: (parseFloat(props.safari ?? '0') || Infinity) <= browsers.safari },
];


</script>

<template>
    <div>
        <span v-for="(item) in items"
            :color="item.isSupported ? 'green-800' : 'red-900'"
            :bg="item.isSupported ? 'green-100' : 'red-100'"
            :dark-color="item.isSupported ? 'green-100' : 'red-100'"
            :dark-bg="item.isSupported ? 'green-300' : 'red-300'"
            :dark-bg-opacity="item.isSupported ? '20' : '20'"
            :class="{ 'browser': true, [`${item.name}`]: true,  'supported': item.isSupported }" role="img">{{ item.version }}</span>
    </div>
</template>

<style scoped>
  div {
    --logo-size: 2rem;
    
    display: flex;
    gap: 1rem;
    margin-inline: auto;
  }

  .browser {
    display: flex;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    align-items: center;
    gap: 0.25rem;
    border-radius: 9999px;
    padding: 8px;
  }

  .chrome::before {
    background-image: url('../assets/chrome-logo.svg');
  }

  .edge::before {
    background-image: url('../assets/edge-logo.svg');
  }

  .firefox::before {
    background-image: url('../assets/firefox-logo.svg');
  }

  .safari::before {
    background-image: url('../assets/safari-logo.svg');
  }

    .browser::before, .browser::after {
      content: '';
      inline-size: var(--logo-size);
      block-size: var(--logo-size);
      display: block; 
      position: relative;
      flex: 0 0 auto;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
  }

  .browser::after {
    content: '';
    width: var(--logo-size);
    height: var(--logo-size);
    display: block;
    flex: 0 0 auto;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E%0A");;
  }

  .browser.supported::after {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E%0A");
  }
</style>