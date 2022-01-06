import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import OneComment from "../one-comment/OneComment";
import api from "../../axios/api";
import {Div} from "./CommentsStyle";
import Loader from "../loader/Loader";
import {MainButton} from "../main-button/MainButtonStyle";

const LIMIT = 20;

const Comments = () => {
    const [list, setList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchData = () => {
        setIsFetching(true);

        api.get(`/comments?_start=${currentIndex}&_end=${currentIndex + LIMIT}`)
            .then(res => {
                if (res.data.length > 0) {
                    setIsFetching(false);
                    setList(list.concat(res.data));
                    setCurrentIndex(prevState => prevState + LIMIT);
                } else {
                    setHasMoreData(false);
                }
            })
            .catch(err => {
                setIsFetching(false);
                console.log(err)
            })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {list?.map((item, index) => {
                return (
                    <OneComment key={index}
                                id={item.id}>
                        {item.body}
                    </OneComment>
                )
            })}
            <Div>
                {isFetching && hasMoreData ?
                    <Loader/>
                    :
                    hasMoreData ?
                        <MainButton sx={{fontSize: '1.6rem', marginTop: '1rem'}}
                                    variant="contained"
                                    onClick={() => fetchData()}>
                            Load More
                        </MainButton>
                        :
                        <Typography sx={{
                            backgroundColor: '#000',
                            fontSize: '1.6rem',
                            borderRadius: '2.5rem',
                            color: '#fff',
                            padding: '1rem'
                        }}
                        >No more Data</Typography>
                }
            </Div>
        </div>
    );
};

export default Comments;
