<script lang="ts">
  import {CldImage} from "svelte-cloudinary"
  	export let data;
    console.log(data)
</script>

<p><CldImage src='test' width={500} height={800} alt="test"/></p>
