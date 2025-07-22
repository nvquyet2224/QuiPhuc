const modules = subcrible.modules;
const sub = new modules.SubcribleClick();

(function () {
  let loading = false;
  function validEmail(email) {
    if (email === "") {
      return false;
    } else {
      if (!/^\S*$/.test(email)) {
        return false;
      }
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  sub.on("onClick", () => {
    const input = document.querySelector('.subscrible-input');

    if(input) {
        const email = input.value;
        const valid = validEmail(email);
        if(valid) {
          input.classList.remove('error');
          if(!loading) {
            loading = true;
            let config = {
              headers: {
                // 'X-CSRF-Token': document.head.querySelector('meta[name="csrfToken"]').content
              }
            }
            axios.post('/contacts/subscrible', {email: email}, config)
            .then((response) => {
              console.log(response);
              loading = false;
            })
            .catch((error) => {
              console.error(error);
              loading = false;
            });
          }
        } else {
          input.classList.add('error');
        }
    }

  });
})();
