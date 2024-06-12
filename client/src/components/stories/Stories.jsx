import { useContext, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Stories = ({userId}) => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(null);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories?userId=" + userId).then((res) => {
      return res.data;
    })
  
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newstory) => {
      return makeRequest.post("/stories", newstory);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["stories"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (userId) => {
      return makeRequest.delete("/stories/" + userId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["stories"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ img, userId });
    setImg("");
  };

  const handleDelete = () => {
    deleteMutation.mutate(userId.id);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={openModal}>+</button>
        {isOpen && (

          <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal}>x</button>
            <h2>Upload a story</h2>
            <h3>Share images and gif's trough the link adress</h3>
            <form>
              <div style={{display: 'flex'}}>
              <input
              type="text"
              placeholder="write a image or gif's url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              style={{marginBottom: '20%', marginRight:'10%', padding: '10px'}}
            />
            <button onClick={handleClick}><ArrowForwardIosOutlinedIcon className="icon" /></button> 

              </div>
            
            </form>
          </div>
          </div>
   
      )}
      </div>
      
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
      
    </div>
  );
};

export default Stories;







// import { useContext } from "react";
// import "./stories.scss"
// import { AuthContext } from "../../context/authContext"

// const Stories = () => {

//    const {currentUser} = useContext(AuthContext)

//   //TEMPORARY
//   const stories = [
//     {
//       id: 1,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmpgIDQ4jV1I5z6tyVb6qNh3__8pSLWu7HzRYnu8tYA&s",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNbxVwcqoToY7yLmRU8fiJcj0oxnjkJyZ2Tr7ORCUFg&s",
//     },
//     {
//       id: 4,
//       name: "John Doe",
//       img: "https://i.pinimg.com/736x/88/34/56/88345662f07036eae64eaf92306506f8.jpg",
//     },
//   ];

//   return (
//     <div className="stories">
//       <div className="story">
//           <img src={"/upload/" + currentUser.profilePic } alt="" />
//           <span>{currentUser.name}</span>
//           <button>+</button>
//         </div>
//       {stories.map(story=>(
//         <div className="story" key={story.id}>
//           <img src={story.img} alt="" />
//           <span>{story.name}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Stories
