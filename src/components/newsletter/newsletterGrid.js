import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {
        
        const latest = {
            id: '115',
            title: 'Happy Holidays Fam',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pellentesque felis. Phasellus dapibus mollis enim, ac porttitor dolor elementum vitae. Donec vel nisi sit amet ligula vestibulum venenatis. Fusce fermentum massa sit amet metus condimentum laoreet. In egestas, nisi et dapibus malesuada, nunc eros rhoncus libero, in pretium velit tortor vitae lorem. Aenean nec nisi dignissim odio imperdiet convallis. Sed mi ligula, varius eget aliquam sit amet, egestas nec elit. In nec turpis tempus, accumsan risus id, bibendum nisl. Aliquam erat volutpat. Etiam egestas varius nisl sed ornare. Quisque rutrum a erat id facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium molestie varius. Nulla elementum euismod lectus ac vehicula.',
            date: new Date(),
            imgaeUrl: 'http://via.placeholder.com/960x258'
        }
        
        return (
            <div className='newsletter-grid'>
                {/*add button*/}
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;