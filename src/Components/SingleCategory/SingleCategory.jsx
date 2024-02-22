import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Header from '../Header/Header';
import AiNavbar from '../SIngleDIsplayAi/AiNavbar';
import Skeleton from "react-loading-skeleton";
import Footer from '../Footer/Footer';

const SingleCategory = () => {

    const { query } = useParams();
    const[category, setCategory] = React.useState([]);
    const[loader, setLoader] = useState(false);

    const FetchSingleCategoryPhoto = async()=>{
        setLoader(true);
        try {
            const response = await fetch(`http://localhost:5000/api/aicategory?query=${query}`);
            if(response.ok){
                const data= await response.json();
                setCategory(data.data);
                console.log(data.data);
            }else{
                toast.error("Something Went Wrong");
            }   
        } catch (error) {
            console.log(error);
        }finally{
            setTimeout(() => {
                setLoader(false);   
            }, 3000);
        }
    };

    useEffect(()=>{
        FetchSingleCategoryPhoto();
    },[query]);
  return (
    <div>
        <Header/>
        <AiNavbar/>
        <div className='mt-12'>
        <span className='text-xl font-semibold text-gray-500 pl-12'>Showing Result For <span className='text-black'>"{query.toLocaleUpperCase()}"</span></span>
        </div>

        <div className='flex items-center justify-center flex-wrap gap-4 mt-14 mb-14'>
            {
                loader ? (
                    Array.from({length : category.length}).map((_,index)=>(
                        <div key={index}>
                             <Skeleton width={370} height={370} />
                        </div>
                    ))
                ):(
                    category.map((categoryPhotos) =>(
                        <Link to={`/SingleDisplayPhoto/${categoryPhotos.id}`} onClick={()=> window.scrollTo({
                            top : 0,
                            behavior : "smooth"
                        })}>
                        <div className='main-ai-result' key={categoryPhotos.id}>
                            <div>
                            <img src={categoryPhotos.image.source.url} alt='' className="rounded shadow-lg"/>
                            </div>
                            <div className='overlay6'>
                                <h2 className='text-white text-xl font-medium'>{categoryPhotos?.author?.name}</h2>
                            </div>
                        </div>
                        </Link>
                    ))

                )
                
            }
        </div>
            <Footer/>
    </div>
  )
}

export default SingleCategory