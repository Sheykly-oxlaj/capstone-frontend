<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <head>
    <title>No Sidebar - Strongly Typed by HTML5 UP</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
  </head>
  <body>
    <div id="page-wrapper">
      <!-- Header -->
      <section id="header">
        <div class="container">
          <!-- Logo -->
          <h1 id="logo">
            <router-link to="/login">FOR ME | BY ME</router-link>
          </h1>

          <!-- Nav -->
          <nav id="nav">
            <h1></h1>

            <p>
              <a href="/">Home</a>
              |
              <a href="/login">Login</a>
              |
              <a href="/journals">All my Journals</a>
              |
              <a href="/logout">Logout</a>
            </p>
          </nav>
        </div>
      </section>
    </div>

    <!-- Banner -->
    <section id="banner">
      <div class="container">
        <p>A PLACE TO RECORD MY THOUGHTS</p>
      </div>
    </section>

    <!-- Features -->
    <section id="features">
      <div class="container">
        <div class="row aln-center">
          <div class="col-4 col-6-medium col-12-small">
            <!-- Feature -->
            <section>
              <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
              <header>
                <h3>About Us</h3>
              </header>
              <p>
                This is website was created out the personal need for a convenient and readily accesible place to
                journal. Carrying a notebook around just didn't seem convenient for me.
                <strong>I think I am just lazy</strong>
                .
              </p>
            </section>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <!-- Feature -->
            <section>
              <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
              <header>
                <h3>Benefits of Journaling</h3>
              </header>
              <p>
                According to reasearch, journaling can helo you achieve goal, track prograess and growth, gain
                self-confidence, improve writing and comunication skills, reduce stress and anxiety, find inspiration
                and strengthen memory. You can read more about it
                <a
                  href="https://healthy.kaiserpermanente.org/health-wellness/healtharticle.7-benefits-of-keeping-a-journal"
                >
                  here
                </a>
                .
              </p>
            </section>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <!-- Feature -->
            <section>
              <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
              <header>
                <h3>Give it a try!</h3>
              </header>
              <p>It is simple to navigate and you can have as many journals as you would like.</p>
            </section>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><a href="/signup" class="button icon solid fa-file">SignUp Here!</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <header>
          <h2>
            Questions or comments?
            <strong>Get in touch:</strong>
          </h2>
        </header>
        <div class="row">
          <div class="col-6 col-12-medium">
            <section>
              <form method="post" action="#">
                <div class="row gtr-50">
                  <div class="col-6 col-12-small">
                    <input name="name" placeholder="Name" type="text" />
                  </div>
                  <div class="col-6 col-12-small">
                    <input name="email" placeholder="Email" type="text" />
                  </div>
                  <div class="col-12">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div class="col-12">
                    <a href="#" class="form-button-submit button icon solid fa-envelope">Send Message</a>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="col-6 col-12-medium">
            <section>
              <p>
                Please feel free to contact us with any comments or concerns. Your feedback is highly appreciated as we
                work on improving this website to offer you a better experience.
              </p>
              <div class="row">
                <div class="col-6 col-12-small">
                  <ul class="icons">
                    <li class="icon solid fa-home">
                      Los Angeles, CA 9004
                      <br />
                      USA
                      <br />
                    </li>
                    <li class="icon solid fa-phone">(000) 000-0000</li>
                    <li class="icon solid fa-envelope">
                      <a href="#">formebymeinfo@example.com</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-12-small">
                  <ul class="icons">
                    <li class="icon brands fa-twitter">
                      <a href="#">@ForMebyMe</a>
                    </li>
                    <li class="icon brands fa-instagram">
                      <a href="#">instagram.com/ForMebyMe</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="copyright" class="container">
        <ul class="links">
          <li>&copy; ForMebyMe. All rights reserved.</li>
          <li>
            Design:
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  </body>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
