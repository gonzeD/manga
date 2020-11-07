import React from 'react';
import "./Menu.scss";
import MenuData from "./MenuData";
import {  NavLink } from "react-router-dom";

export default class Menu extends React.Component
{

	constructor()
	{
		super();
		this.state = {asideOpen: false};
	}
	render()
	{
		return <>
			<div className="menu_fixedSpacer"></div>
			<div className="menu">
				<div className="menu_opener" onClick={() => this.setState({asideOpen : !this.state.asideOpen})}>
					<i class="las la-bars"></i>
				</div>
				<img src="logo.png" alt="Logo du kotmanga"/>
				<div className="menu_spacer"/>
				<div className={"menu_shadow"+(this.state.asideOpen?" menu_shadowOpen":"")} onClick={() => this.setState({asideOpen : false})}></div>
				<div className={"menu_links "+(this.state.asideOpen?"menu_open":"")} onBlur={() => this.setState({asideOpen : false})}>
					{MenuData.map(x => <NavLink className="menu_link" to={x.link}>
						{x.title}
					</NavLink>)}
				</div>
			</div>
		</>;
	}
}
