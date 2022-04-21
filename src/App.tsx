import React, { useEffect, useState } from "react";
import { NavigationBar } from "./components/navigationBar";
import burger_frontend1 from "../src/burger_frontend.jpeg";
import { NearbyResturants } from "./components/nearbyResturants";
import { Rating } from "./components/rating";
import { ImageUploader } from "./components/imageUploader";
import burger_logo from "../src/images/burger_logo.jpeg";
import burger1 from "../src/images/burger1.jpeg";
import burger2 from "../src/images/burger2.jpeg";
import burger3 from "../src/images/burger3.jpeg";
import burger4 from "../src/images/burger4.jpeg";
import burger5 from "../src/images/burger5.jpeg";
import burger6 from "../src/images/burger6.jpeg";
import burger7 from "../src/images/burger7.jpeg";

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.slice(0, 8);
}

function App() {
  const allImages = [
    burger1,
    burger2,
    burger3,
    burger4,
    burger5,
    burger6,
    burger7,
    burger_logo,
    burger_logo,
  ];

  const [images, setImages] = useState(allImages.slice(0, 8));

  function switchImages() {
    setImages(shuffle(allImages));
  }

  useEffect(() => {
    setInterval(switchImages, 3000);
  }, []);

  return (
    <div
      className="body"
      style={{
        background: "lightgrey",
        paddingBottom: "128px",
      }}
    >
      <NavigationBar />
      <div>
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src={burger_frontend1}
          alt="Logo"
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "8px",
          marginTop: "12px",
        }}
      >
        <div
          style={{
            background: "aliceblue",
            borderRight: "4px solid lightgrey",
            borderLeft: "8px solid lightgrey",
            padding: "64px",
          }}
        >
          <h1
            style={{
              borderBottom: "1px solid lightgrey",
            }}
          >
            What is Burger Frontend 1.0?
          </h1>
          <br />
          Burger Frontend 1.0 is created to help all the burger lovers around
          the world
          <br />
          <br />
          Here on Burger Frontend we help each other rate. We provide you with
          the top rated burger resturants near you
          <br />
          <br />
          Feel free to rate your latest burger experience or perhaps upload a
          picture of your favorite burger!
        </div>
        <div
          style={{
            background: "aliceblue",
            padding: "64px",
            borderLeft: "4px solid lightgrey",
            borderRight: "8px solid lightgrey",
          }}
        >
          <h1
            style={{
              borderBottom: "1px solid lightgrey",
            }}
          >
            Resturants near you
          </h1>
          <br />
          <NearbyResturants />
        </div>

        <div
          style={{
            background: "aliceblue",
            borderRight: "4px solid lightgrey",
            borderLeft: "8px solid lightgrey",
            padding: "64px",
          }}
        >
          <h1 style={{ borderBottom: "1px solid lightgrey" }}>
            Rate your latest burger experience
          </h1>
          <br />
          <Rating />
        </div>
        <div
          style={{
            background: "aliceblue",
            padding: "64px",
            borderLeft: "4px solid lightgrey",
            borderRight: "8px solid lightgrey",
          }}
        >
          <h1
            style={{
              borderBottom: "1px solid lightgrey",
            }}
          >
            Tips on how to rate your burger
          </h1>
          <br />
          Burger Frontend 1.0 is created to help all the burger lovers around
          the world
          <br />
          <br />
          Here on Burger Frontend we help each other rate. We provide you with
          the top rated burger resturants near you
          <br />
          <br />
          Feel free to rate your latest burger experience or perhaps upload a
          picture of your favorite burger!
        </div>
        <div
          style={{
            background: "aliceblue",
            borderRight: "4px solid lightgrey",
            borderLeft: "8px solid lightgrey",
          }}
        >
          <div
            style={{
              padding: "64px",
            }}
          >
            <h1
              style={{
                borderBottom: "1px solid lightgrey",
              }}
            >
              Recent uploaded pictures
            </h1>
          </div>
          <div
            className="fade"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            <img
              className="fade"
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[0]}
              alt="Logo"
            />
            <img
              className="fade"
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[1]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[2]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[3]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[4]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[5]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[6]}
              alt="Logo"
            />
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={images[7]}
              alt="Logo"
            />
          </div>
          <br />
          <br />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "aliceblue",
            padding: "64px",
            borderLeft: "4px solid lightgrey",
            borderRight: "8px solid lightgrey",
          }}
        >
          <h1
            style={{
              borderBottom: "1px solid lightgrey",
              marginBottom: "64px",
            }}
          >
            Share a picture of your favorite burger here
          </h1>
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <ImageUploader />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "256px",
        }}
      />
    </div>
  );
}

export default App;
