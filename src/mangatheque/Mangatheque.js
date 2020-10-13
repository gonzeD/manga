import React from 'react';

import "./Mangatheque.scss";

export default class Mangatheque extends React.Component
{

	constructor()
	{
		super();
		this.state = {mangas : [
			{name:"test001",locales : ["FR"],editor:"test editor",state:1,volume : 1},
			{name:"test002",locales : ["JP"],editor:"test editor",state:0,volume : 2},
			{name:"test003",locales : ["FR","JP"],editor:"test editor",state:2, volume : 1},
			{name:"test004",locales : ["FR"],editor:"test editor",state:1,volume : 1},
		]};

		this.updateSearch = this.updateSearch.bind(this);
	}

	updateSearch()
	{
	}


	render()
	{
		return <>
			<article className="mangatheque">
				<h1>Vous trouverez ici la liste des mangas dont nous disposons, ainsi que leur disponibilité</h1>
				<label>effectuer une recherche : <input type="text" onChange={this.updateSearch}/></label>
				<table>
					<tr>
						<th>Nom</th>
						<th>Tome</th>
						<th>Editeur</th>
						<th>Langue(s)</th>
						<th>disponible?</th>
					</tr>
					{this.state.mangas.map(x => <tr>
						<td>{x.name}</td>
						<td>{x.volume}</td>
						<td>{x.editor}</td>
						<td>{x.locales.map(x => <>{x}</>)}</td>
						<td>{x.state}</td>
					</tr>)}
				</table>
			</article>
		</>;
	}
}
