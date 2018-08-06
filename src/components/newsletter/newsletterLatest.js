import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'> Title </h1>
                <img className='nesletter-latest__image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest__body'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pellentesque felis. Phasellus dapibus mollis enim, ac porttitor dolor elementum vitae. Donec vel nisi sit amet ligula vestibulum venenatis. Fusce fermentum massa sit amet metus condimentum laoreet. In egestas, nisi et dapibus malesuada, nunc eros rhoncus libero, in pretium velit tortor vitae lorem. Aenean nec nisi dignissim odio imperdiet convallis. Sed mi ligula, varius eget aliquam sit amet, egestas nec elit. In nec turpis tempus, accumsan risus id, bibendum nisl. Aliquam erat volutpat. Etiam egestas varius nisl sed ornare. Quisque rutrum a erat id facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium molestie varius. Nulla elementum euismod lectus ac vehicula.</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;