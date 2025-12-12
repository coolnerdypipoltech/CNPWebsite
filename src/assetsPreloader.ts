// Assets principales de Main
import logo from './assets/Lobby/Brand_CNP.webp'
import Email from './assets/Main/Email.png'
import Instagram from './assets/Main/Instagram.png'
import Linkedin from './assets/Main/LinkedIn.png'
import Flecha from './assets/Culture/IMG_Flecha.webp'

// Assets críticos del Lobby
import IMG_Background from './assets/Lobby/IMG_Background.webp'
import IMG_PISO from './assets/Lobby/IMG_PISO.webp'
import city from './assets/Lobby/City.webp'
import edificios from './assets/Lobby/edificios.webp'
import Godzilla from './assets/Lobby/Godzilla.webp'
import Gundam from './assets/Lobby/Gundam.webp'
import Tv from './assets/Lobby/Tv.webp'
import Edificio1 from './assets/Lobby/Edificio1.webp'
import Edificio2 from './assets/Lobby/Edificio2.webp'
import workstation4 from './assets/Lobby/workstation4.webp'
import RightSide from './assets/Lobby/RightSideCnp.webp'
import LeftSide from './assets/Lobby/LeftSideCnp.webp'
import Nube1 from './assets/Lobby/Nube1.webp'
import Nube2 from './assets/Lobby/Nube2.webp'
import Nube3 from './assets/Lobby/Nube3.webp'
import Nube4 from './assets/Lobby/Nube4.webp'
import Nube5 from './assets/Lobby/Nube5.webp'
import PingPong from './assets/Lobby/PingPong.webp'
import CoffeeBook from './assets/Lobby/CoffeBook.webp'
import Painting from './assets/Lobby/Painting.webp'
import workstation3 from './assets/Lobby/workstation3.webp'
import workstation1 from './assets/Lobby/workstation.webp'

// Assets específicos de móvil
import Mundo_CNP from './assets/Lobby/Mobil/Mundo_CNP.png'
import Alien_Yoga from './assets/Lobby/Alien_Yoga.webp'
import Tapete from './assets/Lobby/Tapete.webp'

// Assets críticos de Culture
import Back from './assets/Culture/IMG_Back.webp'
import Next from './assets/Culture/IMG_Next.webp'
import Marco from './assets/Culture/IMG_Marco.webp'
import Angel from './assets/Culture/IMG_ANGEL.webp'
import Dios from './assets/Culture/IMG_Dios.webp'
import ovni from './assets/Lobby/ovni.webp'
import LobbyStars from './assets/Lobby/LobbyStars.webp'
import Blackhorse from './assets/Culture/IMG_Blackhorse.webp'
import FIGHT from './assets/Culture/IMG_FIGHT.webp'
import rose from './assets/Culture/IMG_rose.webp'
import BOOK from './assets/Culture/IMG_BOOK.webp'
import CAT from './assets/Culture/IMG_CAT.webp'

// Assets críticos de Founders
import background from './assets/Founders/background.png'
import desk from './assets/Founders/desk.webp'
import Globe1 from './assets/Founders/Globe1.webp'
import Globe2 from './assets/Founders/Globe2.webp'
import Asteroide from './assets/Founders/Asteroide.webp'
import founder1 from './assets/Founders/founder1.webp'
import founder2 from './assets/Founders/Andrea.webp'
import table from './assets/Founders/table.webp'
import tv from './assets/Founders/Tv.webp'
import spacheship1 from './assets/Founders/spaceship1.webp'
import spaceship2 from './assets/Founders/spaceship2.webp'
import ovniFounders from './assets/Founders/ovni.webp'

export const criticalAssets = [
  // Main
  logo,
  Email,
  Instagram,
  Linkedin,
  Flecha,
  // Lobby Desktop & Tablet
  IMG_Background,
  IMG_PISO,
  city,
  edificios,
  Godzilla,
  Gundam,
  Tv,
  Edificio1,
  Edificio2,
  workstation4,
  RightSide,
  LeftSide,
  Nube1,
  Nube2,
  Nube3,
  Nube4,
  Nube5,
  PingPong,
  CoffeeBook,
  Painting,
  workstation3,
  workstation1,
  // Lobby Mobile
  Mundo_CNP,
  Alien_Yoga,
  Tapete,
  // Culture
  Back,
  Next,
  Marco,
  Angel,
  Dios,
  ovni,
  LobbyStars,
  Blackhorse,
  FIGHT,
  rose,
  BOOK,
  CAT,
  // Founders
  background,
  desk,
  Globe1,
  Globe2,
  Asteroide,
  founder1,
  founder2,
  table,
  tv,
  spacheship1,
  spaceship2,
  ovniFounders,
]

// Función para precargar todas las imágenes
export const preloadImages = (imageSources: string[]): Promise<void[]> => {
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`)
        resolve() // Resolvemos de todas formas para no bloquear la carga
      }
      img.src = src
    })
  }

  return Promise.all(imageSources.map(preloadImage))
}
