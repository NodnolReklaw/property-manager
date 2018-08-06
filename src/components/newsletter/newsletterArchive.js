import React, { Component } from 'react';

function ArchiveItem({title, date}) {
   const parsedDate = new Date(date);
    return(
        <div className='archive-item archive-items__item'>
            <div className='archive-item__title'> {title}</div>
            <div className='archive-item__date'>
                { parsedDate.getMonth() + 1}
                /
                { parsedDate.getDate() }
                /
                { parsedDate.getFullYear() - 2000 }
            </div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                {/* newsletter items */}
                <ArchiveItem title='Something' date='Today'/>
                <ArchiveItem title='Something' date='Today'/>
                <ArchiveItem title='Something' date='Today'/>
                <ArchiveItem title='Something' date='Today'/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;