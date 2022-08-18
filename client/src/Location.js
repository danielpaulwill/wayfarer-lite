import React, { useEffect, useState } from "react";

function Location({ islandMap }) {
  const [location, setLocation] = useState("")

  useEffect(() => {
    console.log("booyeah")
  }, [])

  const locations = [
    {
      name: "forest",
      description: "x",
      is_complete: false,
      events: {
        
      }
    },
    {
      name: "volcano",
      description: "x",
      is_complete: false
    }
  ]

  console.log({locations})

  // create_table "events", force: :cascade do |t|
  //   t.integer "location_id"
  //   t.string "name"
  //   t.boolean "is_complete"
  //   t.datetime "created_at", null: false
  //   t.datetime "updated_at", null: false
  //   t.string "description"
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