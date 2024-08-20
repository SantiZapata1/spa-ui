"use client"

import { createCommentRequest } from '@/api/comments';
import { error } from 'console';
import { createContext, ReactNode, useContext, useState} from "react"

type CommentContextType = {
    comments:string;
    createComment:any;
};
type CommentProviderProps = {
    children: ReactNode;
};

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export const useComments = ()=>{

    const context = useContext(CommentContext)

    if(!context){
        throw new Error("useComments problemas");
    }

    return context;
}

export function CommentProvider({children}:CommentProviderProps){

    const [comments, setComments] = useState("");

    const createComment = async(comment:any)=>{
        const res = await createCommentRequest(comment)
        console.log(res);
    }


    return(
        <CommentContext.Provider 
            value={{
                comments, createComment
            }}
        >
            {children}
        </CommentContext.Provider>
    );
}
