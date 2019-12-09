import React, { Component, ReactNode } from 'react';

import classes from './EntireBody.module.css';
import SideBar from '../components/SideBar/SideBar';
import Content from '../components/Content/Content';
import Avatar from '../components/Avatar/Avatar';
import Blanket from '../components/Blanket/Blanket';
import Button from '../components/Button/Button';
import Calender from '../components/Calender/Calender';
import Screen from '../components/UI/Screen/Screen';
import CheckboxGroup from '../components/Checkbox/Checkbox';

export class EntireBody extends Component<any, ReactNode> {

    state = {
        content: <Screen text="Welcome to The Jungle!" />
    }
    sideBarSelectHandler = (clickedBar: string) => {
        console.log(clickedBar);

        switch (clickedBar) {
            case "avatar":
                this.setState({ content: <Avatar /> })
                break;
            case "blanket":
                this.setState({ content: <Blanket /> })
                break;
            case "button":
                this.setState({ content: <Button /> })
                break;
            case "calender":
                this.setState({ content: <Calender /> })
                break;
            case "checkbox":
                this.setState({ content: <CheckboxGroup /> })
                break;

            default:
                this.setState({ content: <p className={classes.Paragraph} >Welcome to The Jungle!</p> })
                break;
        }
    }
    render() {
        return (
            <div className={classes.Container} >
                <SideBar onClick={this.sideBarSelectHandler} />
                <Content>{this.state.content}</Content>
            </div>
        )
    }
}

export default EntireBody
