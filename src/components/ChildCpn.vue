<template>
  <div>
    <button @click="sendValueToParent">Send Value to Parent</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    sendValueToParent() {
      const newValue = 'newValue';
      this.$emit('updateValue', newValue);
    }
  }
}
</script>
