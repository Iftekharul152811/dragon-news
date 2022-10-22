import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>Category {categoryNews.length}</h2>
            {
                categoryNews.length !== 0 ?
                    categoryNews.map(news => <NewsSummeryCard
                        key={news._id}
                        news={news}
                    ></NewsSummeryCard>)
                    :
                    <p>There is nothing</p>
            }

        </div>
    );
};

export default Category;