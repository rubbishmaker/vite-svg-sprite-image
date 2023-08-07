<template>
  <svg aria-hidden="true" :style="{'fill':color,'stroke':stroke}" :width="width" :height="height">
      <use :href="'#icon-'+ iconName"></use>
  </svg>
</template>
  
  <script setup>
   const props = defineProps({
    width:String,
    height:String,
    color:String,
    iconName:String,
    stroke:String
   })
   console.log(props.iconName)
  </script>
  
  <style scoped>
  

  </style>
  