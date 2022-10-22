import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
    console.log(news);
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            src={author.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div className='d-flex flex-column ms-2'>
                            <p className='my-0'>{author.name ? author.name : 'UnIdentified'}</p>
                            <p className='my-0'>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='mx-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>
                                    {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`} >Read More</Link>
                                </>
                                :
                                <>
                                    {details}
                                </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'><FaStar className='me-1 text-warning'></FaStar> {rating?.number}</div>
                    <div className='d-flex align-items-center'><FaRegEye className='me-1'></FaRegEye> {total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;