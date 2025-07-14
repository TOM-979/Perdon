function iniciarMusica() {
  const musica = document.getElementById('bg-music');
  if (musica) {
    musica.play().catch(() => {
      console.log('Autoplay bloqueado por el navegador');
    });
  }
}

function mostrarRazones() {
  const contenedor = document.getElementById('razones');
  const lista = document.getElementById('lista-razones');

  if (contenedor && lista && lista.children.length === 0) {
    // Generar 200 razones distintas
    for (let i = 1; i <= 200; i++) {
      const item = document.createElement('p');
      // Frases distintas para alternar (puedes cambiar aquí)
      let frases = [
        "Porque cada día contigo me sentia vivo.",
        "Porque tu sonrisa ilumina mi camino.",
        "Porque aprendí de mis errores y quiero mejorar.",
        "Porque quiero cumplir lo que prometí.",
        "Porque mi corazón late por ti.",
        "Porque nunca dejaré de intentar.",
        "Porque cada momento contigo es único.",
        "Porque sin ti, no soy completo.",
        "Porque quiero hacerte feliz.",
        "Porque a pesar del tiempo esa parte nunca dejó de latir por ti.",
        "Porque me duele haberte fallado.",
        "Porque cada noche me pesa no tenerte a mi lado.",
        "Porque no hay un solo día en que no me arrepienta.",
        "Porque aprendí de cada error que cometí.",
        "Porque quiero que veas cuánto he cambiado.",
        "Porque el silencio sin ti es demasiado fuerte.",
        "Porque nuestras memorias viven en mí a cada instante.",
        "Porque aún guardo la esperanza de que me escuches.",
        "Porque nuestras risas todavía suenan en mi mente.",
        "Porque sé que tú merecías algo mejor, y yo quiero serlo.",
        "Porque cometí errores, pero no dejé de amarte.",
        "Porque mi corazón aún guarda tu nombre.",
        "Porque cada paso que doy sin ti me recuerda que te perdí.",
        "Porque quiero sanar contigo, no sin ti.",
        "Porque tú eres más que un recuerdo: eres mi hogar.",
        "Porque nadie más me hizo sentir tan vivo.",
        "Porque quiero volver a cuidar de ti como mereces.",
        "Porque aprendí a escuchar, tarde, pero aprendí.",
        "Porque tu ternura era mi refugio.",
        "Porque aún sueño con tus abrazos.",
        "Porque no existe otro amor como el tuyo.",
        "Porque quiero pedir perdón cada vez que haga falta.",
        "Porque extraño hasta tus silencios.",
        "Porque tu mirada me dio paz.",
        "Porque te amo en libertad, no por necesidad.",
        "Porque incluso tu ausencia me hace mejor.",
        "Porque si el amor se demuestra, quiero demostrarlo.",
        "Porque contigo conocí lo que era amar de verdad.",
        "Porque ahora sé lo que no debo hacer jamás.",
        "Porque quiero que nuestra historia tenga un nuevo capítulo.",
        "Porque sigo hablando contigo aunque ya no estés.",
        "Porque incluso mi gato te extraña.",
        "Porque me volví más fuerte pensando en ti.",
        "Porque eras mi risa diaria.",
        "Porque extraño tu forma de ver la vida.",
        "Porque aún con distancia, no dejé de pensar en ti.",
        "Porque tu voz era mi canción favorita.",
        "Porque quiero que veas la mejor versión de mí.",
        "Porque tu ternura sigue aquí, en mi recuerdo.",
        "Porque mi error fue no valorar cada instante.",
        "Porque me haces falta cada segundo.",
        "Porque tu ausencia me duele más de lo que imaginé.",
        "Porque sé que puedo ser mejor para ti.",
        "Porque nuestros recuerdos aún me abrazan por las noches.",
        "Porque no hay un lugar donde no te recuerde.",
        "Porque tu risa aún resuena en mis pensamientos.",
        "Porque extraño nuestros silencios compartidos.",
        "Porque no me perdono haber herido a quien más amaba.",
        "Porque cambiar por ti no es un sacrificio, es un honor.",
        "Porque cada canción me habla de ti.",
        "Porque quiero volver a caminar de tu mano.",
        "Porque nuestras películas favoritas me hacen llorar ahora.",
        "Porque tu presencia me daba calma.",
        "Porque contigo todo tenía más sentido.",
        "Porque aprendí que amar también es cuidar.",
        "Porque mereces amor limpio, y ahora sé cómo darlo.",
        "Porque el perdón no lo exijo, lo ruego.",
        "Porque daría todo por una oportunidad más.",
        "Porque nuestro amor merece una segunda oportunidad.",
        "Porque tú me enseñaste lo que era amar sin condiciones.",
        "Porque no he conocido a nadie como tú.",
        "Porque las cosas pequeñas contigo eran inmensas.",
        "Porque extraño tus mensajes, tus notas, tus detalles.",
        "Porque tú fuiste mi lugar seguro.",
        "Porque aprendí que el orgullo no vale nada sin ti.",
        "Porque aún le hablo de ti a mi almohada.",
        "Porque mi mayor miedo es que me olvides.",
        "Porque nuestros planes aún viven en mi mente.",
        "Porque hasta mis errores me recuerdan tu paciencia.",
        "Porque no he dejado de extrañarte un solo día.",
        "Porque cada aroma me lleva a ti.",
        "Porque mis días son grises sin tu luz.",
        "Porque tu forma de amar era única.",
        "Porque si pudiera retroceder el tiempo, lo haría solo para abrazarte.",
        "Porque extraño hasta tus enojos, porque me importaban.",
        "Porque no hay abrazo que se compare al tuyo.",
        "Porque aún tengo las cartas que me escribiste.",
        "Porque nadie ha podido ocupar tu lugar.",
        "Porque tú mereces una versión mía más consciente.",
        "Porque nuestros sueños aún me esperan.",
        "Porque tú me completabas.",
        "Porque tu ausencia me enseñó a valorarte.",
        "Porque me duele no escuchar más tu voz cada día.",
        "Porque tu forma de amar me salvó de muchas maneras.",
        "Porque hasta mi sombra te extraña.",
        "Porque quiero reparar todo lo que rompí.",
        "Porque fui ciego al no verte brillar a mi lado.",
        "Porque me duele saber que lloraste por mi culpa.",
        "Porque tus lágrimas pesan en mi conciencia.",
        "Porque mi corazón aún grita tu nombre.",
        "Porque no hay distancia que borre lo que siento.",
        "Porque sigo aquí, esperándote en silencio.",
        "Porque nuestras canciones ya no suenan igual sin ti.",
        "Porque incluso los domingos me duelen sin ti.",
        "Porque mi mundo perdió color cuando te fuiste.",
        "Porque el tiempo sin ti no es tiempo, es castigo.",
        "Porque nunca me dejaste de importar.",
        "Porque tu existencia es un regalo que descuidé.",
        "Porque no quiero vivir con el 'qué habría pasado'.",
        "Porque mereces ver cuánto he crecido.",
        "Porque aprendí que amar es también saber pedir perdón.",
        "Porque si aún piensas en mí, quiero que sepas que no he dejado de hacerlo.",
        "Porque a veces solo quiero contarte cómo estuvo mi día.",
        "Porque hasta mi gato duerme en tu lugar.",
        "Porque tú le diste sentido incluso a mis peores días.",
        "Porque no quiero que te olvides de mí.",
        "Porque fuiste mi alegría y no supe cuidarla.",
        "Porque tú mereces ser feliz, y quiero ser quien lo logre.",
        "Porque los errores no borran el amor verdadero.",
        "Porque te veo en todos lados aunque no estés.",
        "Porque me enseñaste a amar con ternura.",
        "Porque me faltan palabras para pedir perdón.",
        "Porque sigo soñando contigo.",
        "Porque cada estrella me recuerda tus ojos.",
        "Porque tú fuiste mi todo.",
        "Porque el amor no se olvida, se transforma.",
        "Porque aún creo en nosotros.",
        "Porque no hay un solo camino que no me lleve a ti.",
        "Porque el amor no muere cuando es real.",
        "Porque quiero amarte mejor, si me dejas.",
        "Porque nadie más me conoce como tú.",
        "Porque tú me inspiraste a ser mejor.",
        "Porque los errores me abrieron los ojos.",
        "Porque te extraño incluso en mis sueños.",
        "Porque nuestra historia no merece acabar así.",
        "Porque quiero crecer contigo.",
        "Porque tu paciencia me enseñó mucho.",
        "Porque amarte me hizo humano.",
        "Porque tú me diste razones para ser feliz.",
        "Porque quiero volver a cuidar de ti.",
        "Porque quiero construir algo nuevo contigo.",
        "Porque cada vez que sonríes, el mundo se arregla.",
        "Porque lo nuestro no fue un error, fue una lección de amor.",
        "Porque sé que puedes volver a confiar en mí.",
        "Porque tú eras mi inspiración.",
        "Porque sin ti, todo se volvió más frío.",
        "Porque hasta las flores me recuerdan a ti.",
        "Porque tu forma de ser es inolvidable.",
        "Porque aún puedo verte en mis recuerdos con amor.",
        "Porque no hay amor más puro que el que aún siento por ti.",
        "Porque mereces alguien que no se rinda. Y ese quiero ser yo.",
        "Porque nuestros momentos fueron reales.",
        "Porque aprendí que el amor se cuida todos los días.",
        "Porque aún tengo fe.",
        "Porque si algo me duele, es perderte para siempre.",
        "Porque sigo aquí, con el corazón abierto.",
        "Porque si me dieras una señal, volvería sin dudarlo.",
        "Porque cada mensaje que no te envío, me pesa.",
        "Porque me convertiste en mejor persona solo con existir.",
        "Porque tú me dabas paz en el caos.",
        "Porque el amor también se construye con errores.",
        "Porque no hay orgullo que valga más que tu amor.",
        "Porque tú fuiste mi persona favorita.",
        "Porque aún me emociono con tus fotos.",
        "Porque nunca he dejado de admirarte.",
        "Porque tú fuiste lo mejor que me pasó.",
        "Porque solo tú me hacías sentir tan especial.",
        "Porque me inspirabas incluso en mis peores días.",
        "Porque solo quiero verte feliz, ojalá conmigo.",
        "Porque el amor no es solo decirlo, es demostrarlo.",
        "Porque si pudiera, borraría todo el dolor que causé.",
        "Porque te mereces amor sin miedo.",
        "Porque mi vida sin ti no brilla igual.",
        "Porque tú me viste cuando yo no me veía.",
        "Porque me enseñaste que el amor también duele.",
        "Porque contigo aprendí que vale la pena amar.",
        "Porque aún espero que un día leas esto.",
        "Porque tu ausencia me volvió a encontrar conmigo mismo.",
        "Porque incluso mi reflejo te extraña.",
        "Porque el perdón es el primer paso para volver.",
        "Porque quiero empezar de nuevo, contigo.",
        "Porque aún creo que el amor puede más que el error.",
        "Porque tu voz sigue siendo mi canción favorita.",
        "Porque sé que no merecías mi error, pero aún así me perdonas en mis pensamientos.",
        "Porque hasta el viento me recuerda tus suspiros.",
        "Porque jamás dejaré de agradecer haberte tenido.",
        "Porque quiero que nuestra historia tenga un nuevo final.",
        "Porque lo siento de verdad, con el alma.",
        "Porque tú mereces a alguien que luche, y aquí estoy.",
        "Porque me basta una mirada tuya para entenderlo todo.",
        "Porque solo tú sabes cómo hacer latir mi corazón.",
        "Porque aún tengo tanto por decirte.",
        "Porque incluso cuando me rendía, tú creías en mí.",
        "Porque el amor más profundo no se olvida.",
        "Porque no existe nadie más con quien quiera intentarlo.",
        "Porque tú eras mi hogar, y aún te extraño.",
        "Porque hay una parte de mí que solo tú completabas.",
        "Porque en el fondo, nunca me fui.",
        "Porque mi alma aún busca la tuya.",
        "Porque aún con dolor, sigo amándote.",
        "Porque tú y yo merecemos una segunda historia.",
        "Porque esto es más que orgullo, es amor sincero.",
        "Porque sigo amando incluso tus imperfecciones.",
        "Porque el amor real no se rinde.",
        "Porque lo nuestro fue tan real que aún duele.",
        "Porque quiero volver a abrazarte sin culpa.",
        "Porque aunque no estés, sigo pensando en “nosotros”."
      ];
      // Elegir frase según índice para variar
      let frase = frases[(i - 1) % frases.length];
      item.textContent = `🌷 Razón #${i}: ${frase}`;
      lista.appendChild(item);
    }
  }

  contenedor.style.display = 'block';
  contenedor.classList.add('fade-in');
}
function iniciarMusica() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('btn-musica');

  function actualizarTexto() {
    if (audio.paused) {
      btn.textContent = '▶️ Reproducir Música';
    } else {
      btn.textContent = '⏸️ Pausar Música';
    }
  }

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    actualizarTexto();
  });

  audio.addEventListener('play', actualizarTexto);
  audio.addEventListener('pause', actualizarTexto);

  actualizarTexto();
}
