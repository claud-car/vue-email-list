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
    //comando che carica la prima volta,senza uso del button,il documento non appena sono pronte le e-mail
    this.$nextTick(function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          let emailgen = response.data.response;
          this.email.push(emailgen);
        });
      }
    })
  },
  methods: {
    //funzione per randomizzare le mail quando si preme il button
    emailRand: function () {
      //ciclo per creare le mail
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          //salvo le mail in una bariabile
          let emailgen = response.data.response;
          //pusho l'array in email
          this.email.push(emailgen);
        });
        //pulisco il tutto ogni volta che riparte la function
        this.email = [];
      }
    }
  } //fine methods

});//fine vue

// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then((response) => {
//   this.email = response.data.response;
// });
