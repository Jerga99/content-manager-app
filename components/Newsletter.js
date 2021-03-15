

const Newsletter = () => {

  return (
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="container has-text-centered is-fluid">
            <div class="hero is-light">
              <div class="hero-body">
                <h2 class="title is-4">Sign up for our newsletter</h2>
                  <div class="column is-6 is-offset-3">
                    <div class="field has-addons has-addons-centered">
                      <div class="control is-expanded">
                        <input class="input " type="text" placeholder="Email address" />
                      </div>
                      <div class="control">
                        <a class="button is-info">
                          Subscribe
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
