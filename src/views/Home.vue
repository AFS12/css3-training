<template>
  <div class="home">
    <div class="flex-grid">
      <div class="col">
        <a href="#" class="glowing-button-hover">
          <span>BTN</span>
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
}
.glowing-button-hover::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #27282c;
}
.glowing-button-hover span {
  position: relative;
  z-index: 2;
}
.glowing-button-hover i{
  position: absolute;
  inset: 0;
  display: block;
}
.glowing-button-hover i::before{
  content: '';
  position: absolute;
  border: 2px solid #fff;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 5px;
  background: red;
}
</style>