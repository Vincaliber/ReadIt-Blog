import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default class SideBar extends Component {

    render() {
        const { allTags, data } = this.props;
        let filteredData = data.slice(0, 3);
        //let ds = data.map((item) => item.tags);
        // const tagsList = [...new Set(ds.forEach(d => d))];
        let allTagsList = allTags.split(',');

        const tagList = {
            border: '1px solid grey',
            padding: '0px 12px',
            display: 'inline-block',
            marginLeft: '15px'
        }

        return (
            <div className="SideBar">
                <div className="categorySection">
                    <h4 className="mb-4" style={{ fontWeight: 'bold' }}>Category</h4>
                    <div className="categorySection " >
                        <ul className="list-group" >
                            {
                                filteredData.map((fdata, index) => {
                                    return (
                                        <>


                                            <Link className="links" to={`/Articles/all?category=${fdata.category}`} key={index}>
                                                <li className="list-group-item" style={{ textTransform: 'capitalize' }} >{fdata.category}
                                                    <FontAwesomeIcon icon={faAngleRight} className="float-right" />
                                                </li>
                                            </Link>


                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
                <br />
                <br />
                <div className="recent-blog">
                    <h4 className="mb-4" style={{ fontWeight: 'bold' }}>Recent Blog</h4>
                    {
                        filteredData.map((data, index) => {

                            const { image, title, date, id, users } = data;
                            return (
                                <>

                                    <div className="row mb-3" key={index}>
                                        <div className="col-md-4">
                                            <div className="img">
                                                <img src={image} alt="img" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="content">
                                                <h6>
                                                    <a href={`/SingleBlog/${title.replace(/\s+/g, '-').toLowerCase()}/${id}`} className="links" rel="noopener noreferrer">{title}</a>
                                                </h6>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <p style={{ fontSize: '13px', color: 'grey' }}>
                                                            <FontAwesomeIcon icon={faCalendar} />&nbsp; {date}</p>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <p style={{ fontSize: '13px', color: 'grey' }}>
                                                            <FontAwesomeIcon icon={faUser} />&nbsp; {users}</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    </div>

                                </>
                            )
                        })
                    }
                </div>


                <br />
                <br />
                <div className="tagCloud">
                    <h4 className="mb-4" style={{ fontWeight: 'bold' }}>Tag Cloud</h4>
                    <ul className="taglist">
                        {allTagsList.map((tag, index) => {


                            return (

                                <li style={tagList} key={index}>
                                    <Link to={`/Articles/all?tags=${tag}`} style={{
                                        textDecoration: 'none',
                                        color: '#000',
                                        fontSize: '12px'
                                    }}>{tag}</Link>
                                </li>

                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}