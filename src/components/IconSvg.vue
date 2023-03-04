<template>
    <svg aria-hidden="true" :style="{'fill':color,'stroke':stroke}" :width="width" :height="height">
        <use :href="getHref"></use>
    </svg>
</template>
  
<script lang="ts" setup>
import { watch } from "vue";
import { ref } from "vue";
const svgParser = new DOMParser();
const props = withDefaults(defineProps<{
    iconName: string,
    color: string,
    address: string,
    width: string,
    height: string,
    stroke: string
}>(), { iconName: '', color: '' ,stroke:'none'})
const getHref = ref('')
watch(() => props.iconName, async () => {
    const getId = `icon-${props.iconName}`
    const name = `#${getId}`;
    let res = null;
    if (/.svg$/.test(props.address)) {
        res = await import(`${props.address}?raw`);
    } else {
        res = props.address
    }
    let container = document.querySelector('#Vite_Svg_Sprite_Image_');
    if (!container || !container.querySelector(name)) {
        if (!container) {
            container = document.createElement('div');
            container.id = 'Vite_Svg_Sprite_Image_'
            container.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            container.setAttribute('style', 'position: absolute; width: 0; height: 0;overflow: hidden')
            document.body.insertBefore(container, document.body.children[0]);
        }
        if (!container.querySelector(name)) {
            const svgElement = svgParser.parseFromString(res.default ? res.default : res, "image/svg+xml").querySelector('svg');
            if (svgElement) {
                ['width', 'height', 'x', 'y'].map(items => svgElement.removeAttribute(items))
                let path: Array<any> = Array.from(svgElement.querySelectorAll('path'))   
                path.map(item => item.removeAttribute('fill'))
                
                svgElement.id = getId
                container.appendChild(svgElement as SVGSVGElement)
            }
        }
    }
    getHref.value = name;
}, {
    immediate: true
})
</script>