<template>
  <div class="home">
    <div class="flex-grid">
      <div class="col">
        <a href="/glowing-btn" style="--clr:red" class="glowing-button-hover">
          <span>Glowing Button</span>
          <i></i>
        </a>
      </div>
      <div class="col">
        <a href="#" style="--clr:yellow" class="glowing-button-hover">
          <span>Work in Progress</span>
          <i></i>
        </a>
      </div>
      <div class="col">
        <a href="#" style="--clr:green" class="glowing-button-hover">
          <span>Work in Progress</span>
          <i></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.home {
  color: rgb(187, 187, 187);
  margin-top: 50px;
}

.flex-grid {
  display: flex;
}
.col {
  flex: 1;
}

/* Glowing Button Hover */
$colorTheme: var(--clr);
.glowing-button-hover {
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
}

.glowing-button-hover:hover {
  letter-spacing: 0.25em;
  background: $colorTheme;
  color: $colorTheme;
  box-shadow: 0 0 35px $colorTheme;
}
.glowing-button-hover::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #27282c;
}
.glowing-button-hover span {
  position: relative;
  z-index: 1;
}
.glowing-button-hover i{
  position: absolute;
  inset: 0;
  display: block;
}
.glowing-button-hover i::before{
  content: '';
  position: absolute;
  border: 2px solid $colorTheme;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  transition:
  top 0.5s ,
  width 0.5s,
  left 0.7s 0.37s;
}
.glowing-button-hover:hover i::before{
  background: $colorTheme;
  width: 20px;
  left: 3.4%;
  top: 88.0%;

  transition: 
  left 0.5s,
  width 0.5s,
  top 0.7s 0.37s;

}

.glowing-button-hover i::after{
  content: '';
  position: absolute;
  border: 2px solid $colorTheme;
  bottom: -3.5px;
  left: 20%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  transition:
  bottom 0.5s ,
  width 0.5s,
  left 0.7s 0.37s;
}
.glowing-button-hover:hover i::after{
  background: $colorTheme;
  width: 20px;
  left: 96.8%;
  bottom: 88%;
  
  transition: 
  left 0.5s,
  width 0.5s,
  bottom 0.7s 0.37s;
}
</style>