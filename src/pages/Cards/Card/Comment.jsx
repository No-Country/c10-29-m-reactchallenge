import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetEventById } from "../../../redux/features/events/eventsSlice";
import { BsSend } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import "./Index.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig";
import StarRating from '../../../../src/components/star/starRating'

function Comment() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);

  const currentEventById = useSelector(
    (state) => state.events.currentEventById
  );

  const dispatch = useDispatch();
  const [form, setForm] = useState({ coment: "" });

  const handleOnChange = (e) => {
    setForm({ coment: e.target.value });
  };

  const onSubmit = async (e, form, currentEventById, user) => {
    e.preventDefault();

    const newComent = {
      text: form,
      user_id: user.uid,
      user_name: user.name,
      date: new Date().toLocaleDateString(),
      id: Math.random().toString(36).substring(2, 15),
    };

    const eventsRef = doc(db, "events", id);

    await updateDoc(eventsRef, {
      coments: currentEventById.coments
        ? [...currentEventById.coments, newComent]
        : [newComent],
    });
    dispatch(fetchGetEventById(id));
  };

  useEffect(() => {
    dispatch(fetchGetEventById(id));
  }, [id]);

  return (
    <div className="comment-section">
      <form onSubmit={(e) => onSubmit(e, form, currentEventById, user)}>
        <input
          placeholder="Escribe un comentario..."
          onChange={handleOnChange}
        />

        <button type="submit">
          <BsSend></BsSend>
        </button>
      </form>
      <div className="comment-all-users">
        {console.log(currentEventById)}
        {currentEventById.coments?.map((coment) => {
          return (
            <div key={coment.uid} className="comment-user-contein">
              <div className="comment-user-name">
                <span>{coment.user_name}</span>
                <span>{coment.date}</span>
                 <StarRating/>
              </div>
              <p className="comment">• {coment.text.coment}</p>
            </div>
          );
        }).reverse()}
      </div>
    </div>
  );
}
export default Comment;
