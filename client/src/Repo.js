import React from 'react';

const Repo = (props)=> {
    return (
        <div>
            {props.visibile && ( 
                <div>
                     <ul>
                        {props.repos.map(function(repo,i){
                            return <p key={i}>{repo}</p>
                        })}
                    </ul>                      
                </div>                                
                                     
            )}
        </div>
    )
}
   
export default Repo;