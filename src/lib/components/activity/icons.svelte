<script lang="ts">
  import { PhoneCall, BriefcaseBusiness, Mail, Handshake, MessageSquareShare, LaptopMinimalCheck, Building2 } from '@lucide/svelte';
  import type { ActivityType } from "$lib/models/activity";

  interface props {
    type: ActivityType;
    scale?: number;
  }

  let { type, scale = 1.0}: props = $props();
  
  function getIcon(type: ActivityType) {
    switch(type) {
      case 'Tel':
        return PhoneCall;
      case 'Visit':
        return BriefcaseBusiness;
      case 'E-mail':
        return Mail;
      case 'SNS':
        return MessageSquareShare;
      case 'Negotiation':
        return Handshake;
      default:
        return LaptopMinimalCheck;
    }
  }
  let Comp = getIcon(type);
</script>

<div class="icon" style={`transform: scale(${scale});`}>
  <Comp color="#f5f5f5" size={20} />
</div>

<style lang="scss">
  .icon {
    background-color: #966;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
  }
</style>