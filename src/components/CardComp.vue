<template lang="">
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>
<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  font-weight: bold;
  margin-bottom: 8px;
}
.card-body {
  color: #555;
}
    
</style>