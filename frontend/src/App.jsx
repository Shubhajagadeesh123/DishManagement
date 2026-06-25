import { useEffect, useState } from "react";
import API from "./services/api";
import "./App.css";
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000");

function App() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  
  const totalDishes = dishes.length;

const publishedCount = dishes.filter(
  (dish) => dish.isPublished
).length;

const unpublishedCount = dishes.filter(
  (dish) => !dish.isPublished
).length;
  
  const fetchDishes = async () => {
  try {
    setLoading(true);

    const res = await API.get("/dishes");

    setDishes(res.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const togglePublish = async (id, currentStatus) => {
  try {
    await API.patch(`/dishes/${id}/toggle`);

    toast.success(
      currentStatus
        ? "Dish unpublished successfully!"
        : "Dish published successfully!"
    );

    fetchDishes();
  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
  }
};

  useEffect(() => {
    fetchDishes();
  }, []);

  useEffect(() => {
    socket.on("dishUpdated", () => {
      fetchDishes();
    });

    return () => {
      socket.off("dishUpdated");
    };
  }, []);

  const filteredDishes = dishes.filter((dish) =>
  dish.dishName.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="container">
      <header className="header">
    <h1>Dish Management Dashboard</h1>
    <p>Manage dish availability in real time</p>
      </header>
      
      <div className="stats">

  <div className="stat-card">
    <h2>{totalDishes}</h2>
    <p>Total Dishes</p>
  </div>

  <div className="stat-card">
    <h2>{publishedCount}</h2>
    <p>Published</p>
  </div>

  <div className="stat-card">
    <h2>{unpublishedCount}</h2>
    <p>Unpublished</p>
  </div>

      </div>

      <div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search dishes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
      {loading ? (
    <h2 className="loading">Loading dishes...</h2>
       ) : (
      <div className="grid">
         {filteredDishes.length === 0 ? (
  <h2 className="no-data">No dishes found 🍽️</h2>
) : (
  filteredDishes
    .map((dish) => (
          <div className="card" key={dish._id}>
            <img src={dish.imageUrl} alt={dish.dishName} />

            <h2>{dish.dishName}</h2>

            <div className="status-container">
  <span
    className={
      dish.isPublished ? "status published" : "status unpublished"
    }
  >
    {dish.isPublished ? "Published" : "Unpublished"}
  </span>
</div>

<button
  className={dish.isPublished ? "btn-unpublish" : "btn-publish"}
  onClick={() => togglePublish(dish._id, dish.isPublished)}
>
  {dish.isPublished ? "Unpublish Dish" : "Publish Dish"}
</button>
          </div>
        )))}
          </div>
      )}
      <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
/>
    </div>
  );
}

export default App;