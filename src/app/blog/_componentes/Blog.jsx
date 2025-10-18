"use client"
import styles from "./blog.module.css"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Flotante from "@/app/flotante.jsx/Flotante"


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const blogPosts = [
  {
    image: "/imagenes/blog/alimentacion.jpeg?height=200&width=400",
    alt: "La importancia de la alimentación en la salud de los adultos mayores",
    date: "18 de Octubre, 2025",
    title: "La importancia de la alimentación en la salud de los adultos mayores",
    excerpt: "Una buena alimentación es fundamental en todas las etapas de la vida, pero en la tercera edad adquiere un valor especial...",
    content: `
      <h3>Claves de una alimentación saludable en mayores</h3>
      <p>Una buena alimentación es fundamental en todas las etapas de la vida, pero en la tercera edad adquiere un valor especial. Los cambios en el cuerpo, la actividad física y el metabolismo hacen que los nutrientes se aprovechen de manera diferente, y es clave adaptar la dieta para mantener energía, salud y bienestar.</p>

      <ul>
        <li><strong>Proteínas de calidad:</strong> ayudan a conservar la masa muscular y la fuerza. Pescado, pollo, huevos y legumbres son aliados importantes.</li>
        <li><strong>Frutas y verduras a diario:</strong> aportan vitaminas, minerales y fibra que favorecen la digestión y fortalecen el sistema inmune.</li>
        <li><strong>Hidratación constante:</strong> con la edad, la sensación de sed disminuye, por lo que es importante recordar beber agua aunque no se tenga sed.</li>
        <li><strong>Calcio y vitamina D:</strong> fundamentales para la salud ósea. Se encuentran en lácteos, pescados y en la exposición moderada al sol.</li>
        <li><strong>Reducir sal y azúcares:</strong> para cuidar la presión arterial, el corazón y prevenir problemas metabólicos.</li>
      </ul>

      <p>Además de los nutrientes, la alimentación también cumple un rol social y emocional: compartir la mesa, disfrutar de sabores familiares y mantener rutinas de comidas regulares contribuye al bienestar integral.</p>

      <p>En definitiva, una dieta equilibrada no solo previene enfermedades, sino que también mejora la calidad de vida y aporta vitalidad en el día a día.</p>
    `
  },
  {
    image: "/imagenes/blog/socializacion.jpeg?height=200&width=400",
    alt: "El valor de la socialización en la tercera edad",
    date: "18 de Octubre, 2025",
    title: "El valor de la socialización en la tercera edad",
    excerpt: "La socialización es mucho más que pasar un buen rato: es una herramienta poderosa para cuidar la salud física, emocional y mental en la tercera edad...",
    content: `
      <h3>Beneficios de la socialización</h3>
      <p>La socialización es mucho más que pasar un buen rato: es una herramienta poderosa para cuidar la salud física, emocional y mental en la tercera edad. Diversos estudios muestran que las personas mayores que mantienen vínculos sociales activos viven más tiempo, con mejor calidad de vida y menos riesgo de depresión o deterioro cognitivo.</p>

      <ul>
        <li><strong>Bienestar emocional:</strong> conversar, compartir recuerdos o reír en compañía reduce el estrés y la sensación de soledad.</li>
        <li><strong>Estimulación cognitiva:</strong> las interacciones sociales son un ejercicio natural para la memoria, la atención y el lenguaje.</li>
        <li><strong>Motivación para la actividad física:</strong> salir a caminar, participar de talleres o bailar en grupo promueve el movimiento.</li>
        <li><strong>Red de apoyo:</strong> contar con amistades y grupos de referencia da seguridad y acompañamiento en la vida diaria.</li>
      </ul>

      <p>Promover la socialización puede ser tan simple como organizar reuniones familiares, participar en talleres culturales, integrarse a clubes de barrio o sumarse a actividades comunitarias.</p>

      <p>En la tercera edad, los vínculos no solo acompañan: también protegen, fortalecen y dan sentido. Estimularlos es cuidar la salud de manera integral.</p>
    `
  },
  {
  "image": "/imagenes/blog/brecha_digital.jpeg?height=200&width=400",
  "alt": "La brecha digital en personas mayores",
  "date": "24 de Junio, 2025",
  "title": "La brecha digital en personas mayores",
  "excerpt": "Muchas personas mayores aún encuentran barreras que les impiden integrarse plenamente al mundo digital. Pero existen estrategias sencillas para reducir esa brecha...",
  "content": `
    <h3>Herramientas prácticas y acompañamiento para una inclusión digital real</h3>

    <p>En los últimos años, el uso de la tecnología se volvió casi indispensable para realizar trámites, comunicarse con la familia o incluso acceder a servicios de salud. Sin embargo, muchas personas mayores aún encuentran barreras que les impiden integrarse plenamente a este mundo digital, generando una brecha que puede agravar su aislamiento o dependencia.</p>

    <p>Según datos de la Organización Mundial de la Salud, solo el 35% de los adultos mayores de 65 años acceden a Internet de forma frecuente. Esta desconexión no solo limita el acceso a información y recursos, sino también la posibilidad de mantener vínculos sociales activos, algo fundamental para el bienestar emocional.</p>

    <p>La buena noticia es que existen estrategias muy sencillas para reducir esta brecha. Por ejemplo, enseñar el uso de aplicaciones como WhatsApp o videollamadas a través de talleres prácticos o instancias de aprendizaje personalizadas. Muchas veces, con una sola explicación clara y paciente, una persona mayor logra incorporar herramientas que luego utiliza todos los días.</p>

    <p>Otra opción efectiva es promover el apoyo intergeneracional. Nietos, vecinos o voluntarios jóvenes pueden convertirse en verdaderos aliados, guiando paso a paso a las personas mayores en el uso de celulares, tablets o cajeros automáticos. Además, entregar manuales impresos con instrucciones simples y letra grande puede facilitar mucho el aprendizaje.</p>

    <p>Desde instituciones como Calidia, también es posible acompañar este proceso, brindando espacios de aprendizaje y acompañamiento tecnológico, adaptados a las capacidades e intereses de cada persona.</p>

    <p>Reducir la brecha digital no es solo una cuestión técnica: es una forma de inclusión y cuidado.</p>
  `
},
  {
    "image": "/imagenes/blog/prevenir_caidas.jpeg?height=200&width=400",
    "alt": "Ejercicios simples para fortalecer huesos y prevenir caídas",
    "date": "24 de Junio, 2025, 2025",
    "title": "Ejercicios simples para fortalecer huesos y prevenir caídas",
    "excerpt": "A medida que envejecemos, es natural que los huesos se vuelvan más frágiles. Pero con ejercicios simples y constantes, es posible fortalecer el cuerpo y prevenir caídas...",
    "content": `
      <h3>Rutinas fáciles para mantener la movilidad, la fuerza y la independencia en adultos mayores.</h3>

      <p>A medida que envejecemos, es natural que los huesos se vuelvan más frágiles y los reflejos se tornen más lentos. Esta combinación puede aumentar el riesgo de caídas, una de las principales causas de lesiones en personas mayores. Sin embargo, existen ejercicios simples que, realizados con regularidad, ayudan a fortalecer los músculos, mejorar el equilibrio y proteger la salud ósea.</p>

      <p>Uno de los ejercicios más recomendados es la sentadilla con apoyo. Solo se necesita una silla firme: de pie frente a ella, se bajan lentamente las caderas como si uno fuera a sentarse, sin llegar a hacerlo, y luego se vuelve a subir. Realizar 10 repeticiones al día ayuda a fortalecer muslos y glúteos, fundamentales para la estabilidad.</p>

      <p>Otro ejercicio útil es la elevación de talones. Parado y con las manos apoyadas en el respaldo de una silla, se suben los talones lentamente hasta quedar en puntas de pie, y luego se bajan. Este movimiento trabaja los músculos de las pantorrillas y contribuye al equilibrio.</p>

      <p>Por último, la marcha en el lugar con levantamiento de rodillas permite activar piernas y abdomen, además de mejorar la coordinación. Solo se necesita un espacio libre de obstáculos, un calzado cómodo y comenzar despacio, levantando una rodilla a la vez.</p>

      <p>La clave está en la constancia. Estos ejercicios pueden realizarse en casa o en una institución como Calidia, bajo supervisión o con apoyo si fuera necesario. Lo importante es adaptar cada movimiento al ritmo y capacidad de cada persona, y siempre priorizar la seguridad.</p>

      <p>Cuidar los huesos es también cuidar la autonomía. Y moverse, aunque sea un poco cada día, es una excelente manera de sumar salud y bienestar a cualquier edad.</p>
    `
  },
  {
    image: "/imagenes/blog/como_elegir.jpeg?height=200&width=400",
    alt: "Cómo elegir la mejor residencia",
    date: "24 de Abril, 2025",
    title: "Cómo elegir la mejor residencia para un ser querido",
    excerpt: "Elegir una residencia senior no es solo una elección logística, es un acto de amor, cuidado y responsabilidad...",
    content: `
      <h3>¿Por qué es tan difícil tomar esta decisión?</h3>
      <p>Elegir una residencia senior no es solo una elección logística, es un acto de amor, cuidado y responsabilidad. Como hijos o nietos, queremos lo mejor para quienes nos dieron tanto. Pero también enfrentamos miedos: ¿Estarán bien? ¿Se sentirán solos? ¿Estaremos tomando la decisión correcta?</p>
      
      <p>En Calidia entendemos ese peso. Por eso, esta guía está pensada para ayudarte a elegir con claridad y corazón.</p>
      
      <h3>4 claves para elegir con confianza</h3>
      
      <p><strong>1. Evaluá la calidad del cuidado</strong><br>
      Buscá residencias con personal capacitado, atención médica permanente y un enfoque en el bienestar integral.</p>
      
      <p><strong>2. Observá el ambiente</strong><br>
      ¿Se siente como un hogar? ¿Es un lugar donde podrías imaginar a tu ser querido sonriendo, compartiendo, creando nuevas historias?</p>
      
      <p><strong>3. Consultá por las actividades</strong><br>
      Las personas mayores necesitan más que cuidados: necesitan estímulo, compañía y momentos con sentido.</p>
      
      <p><strong>4. Confiá en tu intuición</strong><br>
      Cuando un lugar transmite calidez y seguridad, lo sentís. Escuchá ese instinto.</p>
      
      <h3>En Calidia, ayudamos a escribir un nuevo capítulo</h3>
      
      <p>No se trata solo de un espacio físico. Se trata de crear un entorno donde la vida siga teniendo sentido, con autonomía, respeto y mucha calidez.</p>
    `,
  },
  {
    image: "/imagenes/blog/laborterapia.jpeg?height=200&width=400",
    alt: "Laborterapia y manualidades",
    date: "24 de Abril, 2025",
    title: "Laborterapia: el arte de sanar haciendo",
    excerpt: "La laborterapia es una forma de terapia ocupacional que utiliza actividades manuales y creativas como herramienta de bienestar...",
    content: `
      <h3>¿Qué es la laborterapia y por qué importa?</h3>
      
      <p>La laborterapia es una forma de terapia ocupacional que utiliza actividades manuales y creativas como herramienta de bienestar físico, mental y emocional.</p>
      
      <p>Pero para nosotros en Calidia, es mucho más: es una forma de expresión, una vía para seguir creando, compartiendo y sintiéndose útil.</p>
      
      <h3>Beneficios reales en personas mayores</h3>
      
      <ul>
        <li>Estimula la motricidad fina y la coordinación</li>
        <li>Mejora la autoestima y la autovaloración</li>
        <li>Disminuye el estrés y la ansiedad</li>
        <li>Favorece la concentración y la memoria</li>
        <li>Potencia el vínculo social con otros residentes</li>
      </ul>
      
      <h3>¿Qué tipo de actividades incluye?</h3>
      
      <ul>
        <li>Talleres de cerámica o modelado</li>
        <li>Cine y debate</li>
        <li>Salidas y paseos</li>
        <li>Lectura</li>
        <li>Costura, bordado, tejido</li>
        <li>Pintura, mandalas y collage</li>
        <li>Jardinería y cuidado de plantas</li>
        <li>Cocina simple o colaborativa</li>
        <li>Creación de objetos decorativos</li>
      </ul>
      
      <p>Cada propuesta se adapta a los intereses, capacidades y deseos de nuestros residentes.</p>
      
      <h3>Más que terapia, es una forma de seguir construyendo</h3>
      
      <p>Porque cuando alguien crea algo con sus manos, también está dejando una huella. En Calidia, creemos en la importancia de <strong>darle sentido a cada día</strong>, y la laborterapia es una herramienta clave para eso.</p>
      
      <h3>Un espacio donde hacer también es sanar</h3>
      
      <p>Desde una pequeña manualidad hasta un proyecto colectivo, todo lo que se crea en Calidia tiene valor. Porque lo importante no es el resultado, sino el proceso, la emoción compartida, la historia que se sigue escribiendo.</p>
    `,
  }

]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <>
      <section className={styles.blogSection} id="blog">
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          Blog
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.blogDescription}
        >
          <p>
            Mantente informado sobre nuestras actividades, consejos de salud para adultos mayores, y noticias relevantes
            del sector. Compartimos regularmente contenido de interés para residentes, familiares y cuidadores.
          </p>
        </motion.div>

        <div className={styles.blogContainer}>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.blogPost}
            >
              <div className={styles.blogImageContainer}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  width={400}
                  height={200}
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>{post.date}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <button onClick={() => setSelectedPost(post)} className={styles.blogButton}>
                  Leer más
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.modalClose}
                  onClick={() => setSelectedPost(null)}
                  aria-label="Cerrar artículo"
                >
                  ×
                </button>

                <div className={styles.modalImageContainer}>
                  <Image
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.alt}
                    width={600}
                    height={300}
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalContentText}>
                  <span className={styles.blogDate}>{selectedPost.date}</span>
                  <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
                  <div className={styles.blogFullContent} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Flotante />
    </>
  )
}
