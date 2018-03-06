<template>
  <div class="Count-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9">
          <counter></counter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import counter from '../components/counter'
export default {
 components: {
       counter
    }
}
</script>
