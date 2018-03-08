<template>
<div class="card">
    <div class="wrap">
        <div class="header">
            <p class="title">
                <slot name="title"></slot> 
            </p>
            <p class="subtitle">
                <slot name="subtitle"></slot>
            </p>
        </div>        
        <hr>

        <div class="content">
            <slot name="content"></slot>
            
        </div>
        <hr>
        
        <div class="footer">  
            <p class="stats">
                <slot name="footer"></slot>
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {};
</script>
