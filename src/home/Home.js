import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.scss";
import { Carousel } from 'react-responsive-carousel';

export default class Home extends React.Component
{

	constructor()
	{
		super();
		this.state = {showPost:[false,false,false,false,false,false,false,false]};
		this.posts = [
			{
				text:`Aujourd’hui on va présenter notre chère trésorière, celle qui soutien et profite dans l’ombre de la dictature qu’est devenu le kotmanga, on va bien entendu parler de Maudie/Maude/Maman (mamie?) Sheitan
Maude est une étudiante en LaFr (ça veut dire latin-français, don’t worry moi non plus je savais pas que ça existait..) et elle est très investie dans tout ce qu’elle entreprend! La preuve, elle a cette année pris le poste le plus compliqué des kap, la trésorerie ! (Faut dire, remplir un Excel une fois pour notre seule acti de l’année ça a du être éprouvant pour elle)
Maudie c’est le jour et la nuit. Un jour elle est souriante, magnifiquement maquillée et prête a profiter de la vie, puis le lendemain le démon apparaît, ne laissant transparaître que rage, fatigue et amertume (et envie de meurtre oups). Ce quadri Elle était tout le temps malade, en fait j’ai simplement l’impression que les défenses immunitaires de Maude sont sont aussi solides que les arguments des fans de demon slayer (oui je force, mais c’est parce que c’est vraiment de la merde)! Mais lorsqu’elle est en pleine forme, Maudie est la personne qu’il vous faut si vous voulez festoyer, parler ou si vous voulez toucher des beaux cheveux lisses (chelou?) !
Je ne parlerai pas plus des cheveux de Maude qui change de couleur toutes les semaines (on attend toujours bleu ciel et rose pastel #RemEtRam).
Maude reste une des 3 figures d’autorité de notre kot (vite fait) et on peut toujours compter sur elle, que ce soit pour le projet ou pour les soirées (sauf quand elle est en pls = 95% du temps ce quadri lol) !
Film préféré : Harry Potter/Captain America 1
Anime préféré : Shingeki no kyoujin/kamisama hajimemashita
Manga préféré : Death note
Film d’animation préféré : Mulan`,
				picture : "https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.0-0/p526x296/123924741_4647901648613621_6748818961053838634_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Q3W_I-B75PEAX9IMfbh&_nc_ht=scontent.fcrl2-1.fna&tp=6&oh=b0fab770e63095793766df30de960500&oe=5FCDB879"
			},
			{
				text : `Demain soir nos 3 magnifiques chroniqueurs Gaël Thomas et Amine vous feront un petit live twitch vers 19h pour vous parler des nouvelles saisons d’animé qui sortent en ce moment ou qui arrivent prochainement ! N’hésitez pas à aller leur faire un petit coucou et à discuter avec eux/poser vos questions (sauf sur démon slayer, c’est une vaste blague ça)! A demain la commu !
Notre twitch -> https://twitch.tv/kotmanga`,
				picture : "https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.0-9/p843x403/123549371_4638563422880777_3964919739441865478_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=EX80qMKMZIwAX-eRta9&_nc_ht=scontent.fcrl2-1.fna&tp=6&oh=5fc684aef3cabb46276957995f34c394&oe=5FCC7A71"
			},
			{
				text : `Demain soir nos 3 magnifiques chroniqueurs Gaël Thomas et Amine vous feront un petit live twitch vers 19h pour vous parler des nouvelles saisons d’animé qui sortent en ce moment ou qui arrivent prochainement ! N’hésitez pas à aller leur faire un petit coucou et à discuter avec eux/poser vos questions (sauf sur démon slayer, c’est une vaste blague ça)! A demain la commu !
Notre twitch -> https://twitch.tv/kotmanga`,
				picture : "https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.0-9/p843x403/123549371_4638563422880777_3964919739441865478_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=EX80qMKMZIwAX-eRta9&_nc_ht=scontent.fcrl2-1.fna&tp=6&oh=5fc684aef3cabb46276957995f34c394&oe=5FCC7A71"
			}
		]
	}
	render()
	{


		return <>

		<article className="home">
			<Carousel renderThumbs={() => {}} renderArrowPrev={() => {}} renderArrowNext={() => {}} showStatus={false} renderArrow autoPlay infiniteLoop useKeyboardArrows>
					<div>
							<img src="ceremonie.jpg" alt="logo" />
							<p className="legend">Legend 1</p>
					</div>
					<div>
							<img src="team.jpg" alt="logo" />
							<p className="legend">Legend 2</p>
					</div>
					<div>
							<img src="actis.jpg" alt="logo" />

							<p className="legend">Legend 3</p>
					</div>
			</Carousel>
			<h1>Dernières nouvelles</h1>
			<div className="home_posts">

				{this.posts.map((x,key) => <div className={"home_post" + (this.state.showPost[key]?" home_postFull":"")}>
						<img src={x.picture} alt="facebook img"/>
						<div className="home_postText">
							{x.text.split('\n').map(function(item, key) {
							  return (
							    <span key={key}>
							      {item}
							      <br/>
							    </span>
							  )
							})}
						</div>

						<div className="home_bottomLinks">
							<a href="https://test.com" target="_blank" rel="noopener noreferrer">Voir sur facebook</a>

							<div className="home_seeMore"  onClick={() => this.setState({"showPost":this.state.showPost.map((x,i) => (i===key)?!x:x)})}>Voir {this.state.showPost[key]?"moins":"plus"}</div>
						</div>
					</div>)
				}
			</div>

		</article>
		</>;
	}
}
