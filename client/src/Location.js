import React, { useEffect } from "react";

function Location({ islandMap }) {

  useEffect(() => {
    console.log("booyeah")
  }, [])


  // create_table "events", force: :cascade do |t|
  //   t.integer "location_id"
  //   t.string "name"
  //   t.boolean "is_complete"
  //   t.datetime "created_at", null: false
  //   t.datetime "updated_at", null: false
  //   t.string "description"
  // end

  // create_table "locations", force: :cascade do |t|
  //   t.string "name"
  //   t.string "description"
  //   t.boolean "is_complete"
  //   t.datetime "created_at", null: false
  //   t.datetime "updated_at", null: false
  // end



 
  return (
    <div className="gameArea">
      <div className="center">
        <button className="normalButton" onClick={islandMap}>Island Map</button>
      </div>
      <h1>Location</h1>
      <div>

      </div>
    </div>
  )
};

export default Location;