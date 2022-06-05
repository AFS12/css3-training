<template>
  <div class="home">
    <div class="flex-grid">
      <div class="col">
        <a href="#" class="glowing-button-hover">
          <span>Glowing Button</span>
          <i></i>
        </a>
      </div>
    </div>
    <br />

    <div class="flex-grid">
      <div class="col">
        <div class="card">
          <h3>HTML</h3>
          <p>
            <pre>
            &lt;a href="#" style="--clr:red" class="glowing-button-hover"&gt;
             &lt;span&gt;Glowing Button&lt;/span&gt;
              &lt;i>&lt;/i&gt;
            &lt;/a&gt;
            </pre>
          </p>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3>CSS</h3>
          <p>
            <pre>
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
            background: var(--clr);
            color: var(--clr);
            box-shadow: 0 0 35px var(--clr);
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
            .glowing-button-hover i {
            position: absolute;
            inset: 0;
            display: block;
            }
            .glowing-button-hover i::before {
            content: "";
            position: absolute;
            border: 2px solid var(--clr);
            top: -3.5px;
            left: 80%;
            width: 10px;
            height: 5px;
            background: #27282c;
            transform: translateX(-50%);
            transition: top 0.5s, width 0.5s, left 0.7s 0.37s;
            }
            .glowing-button-hover:hover i::before {
            background: var(--clr);
            width: 20px;
            left: 3.4%;
            top: 88%;

            transition: left 0.5s, width 0.5s, top 0.7s 0.37s;
            }

            .glowing-button-hover i::after {
            content: "";
            position: absolute;
            border: 2px solid var(--clr);
            bottom: -3.5px;
            left: 20%;
            width: 10px;
            height: 5px;
            background: #27282c;
            transform: translateX(-50%);
            transition: bottom 0.5s, width 0.5s, left 0.7s 0.37s;
            }
            .glowing-button-hover:hover i::after {
            background: var(--clr);
            width: 20px;
            left: 96.8%;
            bottom: 88%;

            transition: left 0.5s, width 0.5s, bottom 0.7s 0.37s;
            }
            </pre>
          </p>
        </div>
      </div><div class="col">
        <div class="card">
          <h3>SCSS</h3>
          <p>
            <pre>
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
            .glowing-button-hover i {
            position: absolute;
            inset: 0;
            display: block;
            }
            .glowing-button-hover i::before {
            content: "";
            position: absolute;
            border: 2px solid $colorTheme;
            top: -3.5px;
            left: 80%;
            width: 10px;
            height: 5px;
            background: #27282c;
            transform: translateX(-50%);
            transition: top 0.5s, width 0.5s, left 0.7s 0.37s;
            }
            .glowing-button-hover:hover i::before {
            background: $colorTheme;
            width: 20px;
            left: 3.4%;
            top: 88%;

            transition: left 0.5s, width 0.5s, top 0.7s 0.37s;
            }

            .glowing-button-hover i::after {
            content: "";
            position: absolute;
            border: 2px solid $colorTheme;
            bottom: -3.5px;
            left: 20%;
            width: 10px;
            height: 5px;
            background: #27282c;
            transform: translateX(-50%);
            transition: bottom 0.5s, width 0.5s, left 0.7s 0.37s;
            }
            .glowing-button-hover:hover i::after {
            background: $colorTheme;
            width: 20px;
            left: 96.8%;
            bottom: 88%;

            transition: left 0.5s, width 0.5s, bottom 0.7s 0.37s;
            }
            </pre>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  color: rgb(187, 187, 187);
  margin-top: 50px;
}

.flex-grid {
  display: flex;
}
.col {
  flex: 1;
  margin: 0 10px;
}
.card {
  background: black;
  border-radius: 15px;
  color: white;
  h3 {
    padding-top: 10px;
  }
  p {
    padding-bottom: 10px;
    font-size: 14px;
    text-align: left !important;
    margin-left: -50px;
  }
}

/* Glowing Button Hover */
$colorTheme: red;
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
.glowing-button-hover i {
  position: absolute;
  inset: 0;
  display: block;
}
.glowing-button-hover i::before {
  content: "";
  position: absolute;
  border: 2px solid $colorTheme;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  transition: top 0.5s, width 0.5s, left 0.7s 0.37s;
}
.glowing-button-hover:hover i::before {
  background: $colorTheme;
  width: 20px;
  left: 3.4%;
  top: 88%;

  transition: left 0.5s, width 0.5s, top 0.7s 0.37s;
}

.glowing-button-hover i::after {
  content: "";
  position: absolute;
  border: 2px solid $colorTheme;
  bottom: -3.5px;
  left: 20%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  transition: bottom 0.5s, width 0.5s, left 0.7s 0.37s;
}
.glowing-button-hover:hover i::after {
  background: $colorTheme;
  width: 20px;
  left: 96.8%;
  bottom: 88%;

  transition: left 0.5s, width 0.5s, bottom 0.7s 0.37s;
}
</style>