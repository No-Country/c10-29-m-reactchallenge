import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initialEvents } from "../../redux/features/events/eventsSlice";
import { db } from "../../utils/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"
import "./Index.css";

const Cards = () => {
  const dispatch = useDispatch();

  const ticketsState = useSelector((state) => state.tickets.tickets);
  const eventsState = useSelector((state) => state.events.events)
  const user = useSelector((state) => state.auth.user);
 
  const getEventsPromise = async () => {
    const querySnapshot = await getDocs(collection(db, "events"))
    const eventsArray = []
    querySnapshot.forEach((doc) => {
      eventsArray.push(JSON.parse(JSON.stringify(doc.data()))
      )
    })
    // const events = eventsArray.filter((e) => e.user_id === userUid)
    return eventsArray
  }

  const getEvents = async () => {
    const events = await getEventsPromise();
    return events
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();
        dispatch(initialEvents(events));
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  console.log("eventsState", eventsState);

  return (
    <div className="container">
      <div className="cards-container">
        {eventsState && eventsState.map((card) => (
          <Link to={`/cards/${card.uid}`} key={card.id}>
            <div className="card-ticket">
              <img src={card.image} alt="" width="25%" />
            </div>
          </Link>
        )).reverse()}
      </div>
    </div>
  );
};

export default Cards;
