// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue ({
  el: '#root',
  data: {
    email: []
  },
  mounted: function () {
    // this.$nextTick(function () {
    //   // Code that will run only after the
    //   // entire view has been rendered
    //   for (var i = 0; i < 10; i++) {
    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //     .then((response) => {
    //       let emailgen = response.data.response;
    //       this.email.push(emailgen);
    //     });
    //   }
    // })
  },
  methods: {
    emailRand: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          let emailgen = response.data.response;
          this.email.push(emailgen);
        });
        this.email = [];
      }
    }
  } //fine methods

});//fine vue

// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then((response) => {
//   this.email = response.data.response;
// });
