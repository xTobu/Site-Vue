<template>
<div class="Index-container">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <DefaultCard>
          <span slot="title">標題</span>
          <span slot="subtitle"></span>       
          <div slot="content">
            內容
          </div>
          <p slot="footer">這裡放備註訊息</p>
        </DefaultCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DefaultCard from '../components/Card/DefaultCard';
export default {
	components: {
		DefaultCard,
	},
};
</script>

<style lang="scss">

</style>
