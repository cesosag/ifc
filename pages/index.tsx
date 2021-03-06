import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, Values, Welcome } from 'components'
import type { HeroProps, ValuesProps, WelcomeProps } from 'components'

type HomeProps = {
	hero: HeroProps;
	welcome: WelcomeProps;
	values: ValuesProps;
}

const Home: NextPage<HomeProps> = ({ hero, welcome, values }) => {
  return (
		<>
      <Head>
        <title>Iglesia Forest City</title>
        <meta name="description" content="Iglesia Forest City" />
      </Head>
			<Hero title={hero.title} text={hero.text} cta={hero.cta} video={hero.video} poster={hero.poster} />
			<Welcome id={welcome.id} title={welcome.title} text={welcome.text} backgroundImage={welcome.backgroundImage}/>
			<Values title={values.title} values={values.values} />
		</>
  )
}

export default Home

export const getStaticProps = async () => {
	return {
		props: {
			header: {
				logo: '/fc-logo.svg',
				logoAltText: 'Forest City logo',
				fixedHeader: true,
			},
			hero: {
				video: '/hero-ifc.mp4',
				poster: '/hero-poster.png',
				title: 'Conoce a Jesús y vive.',
				text: 'Dondequiera que te encuentres en la vida, queremos ser el lugar en el que puedas confiar para recibir inspiración, ánimo y apoyo. Nos reunimos cada sábado a las 10:30 am.',
				cta: {
					text: 'Ver sermones',
					href: '#'
				}
			},
			welcome: {
				id: 'acerca-de-nosotros',
				title: 'Bienvenido a Forest City',
				text: 'Desde nuestra fundación en 1971, hemos crecido siendo una comunidad diversa de discípulos de Cristo, representando distintas edades, nacionalidades y tradiciones. Nos une  la fe en la Palabra de Dios, nuestro amor por Él y por nuestro prójimo, y  el compromiso al servicio y al evangelio.\nNos alegra que hayas pasado por nuestro sitio web y esperamos que muy pronto te conectes con nosotros en persona y/ o online.',
				backgroundImage: '/welcome.jpg'
			},
			values: {
				title: 'Valores',
				values: ['Fe', 'Amor', 'Compromiso', 'Respeto']
			}
		}
	}
}
