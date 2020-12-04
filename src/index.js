import React from 'react'
import ReactDOM from 'react-dom'
import Support from './routes/support/home'
import {useState} from 'react'
import styles from './gallery.css'

const photos = [
    {
        src: "/static/images/bentsch/gallery/crm.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/crm.png",
        caption: 'CRM Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/account dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/account dash.png",
        caption: 'Accounts  Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/calendar.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/calendar.png",
        caption: 'Calendar'
    },
    {
        src: "/static/images/bentsch/gallery/general ledger.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/general ledger.png",
        caption: 'General Ledger Report'
    },
    {
        src: "/static/images/bentsch/gallery/lead detail.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/lead detail.png",
        caption: 'Lead Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/po doc.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/po doc.png",
        caption: 'Purchase Order'
    },
    {
        src: "/static/images/bentsch/gallery/po.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/po.png",
        caption: 'Printable Purchase Order'
    },
    {
        src: "/static/images/bentsch/gallery/invoice.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/invoice.png",
        caption: 'Invoice Form'
    },
    {
        src: "/static/images/bentsch/gallery/wo.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/wo.png",
        caption: 'Work Order'
    },
    {
        src: "/static/images/bentsch/gallery/pos.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/pos.png",
        caption: 'Point of Sale'
    },
    {
        src: "/static/images/bentsch/gallery/sales dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/sales dash.png",
        caption: 'Sales Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/customer.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/customer.png",
        caption: 'Customer Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/employee.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/employee.png",
        caption: 'Employee Details Page'
    },
    {
        src: "/static/images/bentsch/gallery/employee-create.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/employee-create.png",
        caption: 'Employee create page'

    },
    {
        src: "/static/images/bentsch/gallery/timesheet.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/timesheet.png",
        caption: 'Timesheet page'
    },
    {
        src: "/static/images/bentsch/gallery/leave.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/leave.png",
        caption: 'Vacation Time calendar'
    },
    {
        src: "/static/images/bentsch/gallery/requisition.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/requisition.png",
        caption: 'Requisition Form'
    },
    {
        src: "/static/images/bentsch/gallery/procedure.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/procedure.png",
        caption: 'Procedure Form'
    },
    {
        src: "/static/images/bentsch/gallery/planner-dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/planner-dash.png",
        caption: 'Planner Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/invoice -doc.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/invoice -doc.png",
        caption: 'Printable Invoice'
    },
    {
        src: "/static/images/bentsch/gallery/sales report.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/sales report.png",
        caption: 'Sales Report'
    },
    {
        src: "/static/images/bentsch/gallery/warehouse.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/warehouse.png",
        caption: 'Warehouse Detail Page'
    },
    {
        src: "/static/images/bentsch/gallery/inv check.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/inv check.png",
        caption: 'Inventory Check report'
    },
    {
        src: "/static/images/bentsch/gallery/inv check create.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/inv check create.png",
        caption: 'Inventory Check create page'
    },
    {
        src: "/static/images/bentsch/gallery/balance sheet.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/balance sheet.png",
        caption: 'Balance sheet report'
    },
    {
        src: "/static/images/bentsch/gallery/shift.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/shift.png",
        caption: 'Shift Schedule'
    },
    {
        src: "/static/images/bentsch/gallery/kanban.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/kanban.png",
        caption: 'Kanban Chart'
    },
    {
        src: "/static/images/bentsch/gallery/gantt.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/gantt.png",
        caption: 'Gantt Chart'
    },
    {
        src: "/static/images/bentsch/gallery/logger.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/logger.png",
        caption: 'Time logger'
    },
    {
        src: "/static/images/bentsch/gallery/sales activity.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/sales activity.png",
        caption: 'Sales activity report'
    },
]
const gallery = document.getElementById('gallery-root')
const support = document.getElementById('support')

const Gallery = (props) => {
    const [active, setActive] = useState(null)

    return(
        <div>
            {active 
                ? <div className={styles.gallery_modal}>
                    <i className='fa fa-times' onClick={() => setActive(null)}></i>
                    <div>
                        <img src={active.src} alt={active.caption} onClick={() => setActive(img)}/>
                    </div>
                </div>
                : null
            }
            
            <div class='flex flex-wrap flex-centered'>
                {props.images.map(img => {
                    return(
                        <div className='card shadow-md card-md'>
                            <div className='card-body'>
                                <img src={img.thumbnail} className={styles.gallery_img} alt={img.caption} onClick={() => setActive(img)}/>
                                <p>{img.caption}</p>
                            </div>
                        </div>)
                })} 
                
            </div>
        </div>
    )
}


if(gallery){
    ReactDOM.render(<Gallery images={photos}/>, gallery)
}

if(support){
    ReactDOM.render(<Support />, support)
}
