import React from 'react';

function Avatar(){
    return(
        <img
         className='avatar' 
         src="./favicon.png" 
         alt="Favicon-image"
         width={50}
         height={50}
        />
    );
}

export const Click = (props) => {

    // const avatar = "./favicon.png";
    // const description = 'Favicon image';

    return (
        <>
        {/* <h1>Hii This is Dell </h1>
        <p>Working as a front end developer intern</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi laborum libero itaque necessitatibus numquam, nisi rerum voluptas omnis eligendi.</p>

        <span> 
        Hello {props.name} - {props.wife}
        {props.children}
        </span>

        <img
         src={avatar} alt={description} /> */}

         <Avatar  />

        </>
        
    )
}

// export default Click;