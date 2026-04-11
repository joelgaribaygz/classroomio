<script lang="ts">
  import { t } from '$lib/utils/functions/translations';

  export let logo: string | undefined;
  export let orgName: string | undefined;
</script>

<div class="logo">
  <a
    href="/"
    title={`${$t('navigation.goto')} ${orgName || 'Predictorix AI'} ${$t('navigation.home')}`}
    class="flex items-center gap-2"
    id="logo"
    data-hveid="8"
  >
    <img
      src={logo || 'https://odnzffgktnzyciieituk.supabase.co/storage/v1/object/public/Predictorix%20AI/logo_fb_business.jpg'}
      alt={`${orgName || 'Predictorix AI'} logo`}
      class="mx-auto inline-block w-9 rounded"
      data-atf="1"
    />
    {#if orgName}
      <span class="line-clamp-1 hidden text-sm font-medium md:block">{orgName}</span>
    {/if}
  </a>
</div>
