<script lang="ts">
  import {CldImage} from "svelte-cloudinary"
  	export let data;
    console.log(data)
</script>

<p><CldImage src='test' width={300} height={400} alt="test"/></p>
