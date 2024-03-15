import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import img from "../assets/img3.jpg";
export function SearchResult() {
  return (
    <div key="1" className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card className="w-full">
          <CardContent>
            <img
              alt="30-Second Technique for Overwhelm"
              className="w-full h-48 object-cover mb-4"
              height="200"
              src={img}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="text-sm text-gray-500 mb-2">03/16/2023</div>
            <h3 className="font-bold text-lg mb-4">
              Feel Overwhelmed? Try This 30-Second Technique
            </h3>
            <Link className="text-blue-600 hover:underline" href="#">
              Read more
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <img
              alt="Heal Traumatic Memories"
              className="w-full h-48 object-cover mb-4"
              height="200"
              src={img}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="text-sm text-gray-500 mb-2">10/06/2022</div>
            <h3 className="font-bold text-lg mb-4">
              4 Ways to Heal From Your Past (Traumatic Memories Part 2)
            </h3>
            <Link className="text-blue-600 hover:underline" href="#">
              Read more
            </Link>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <img
              alt="Stopping Anxiety Attacks"
              className="w-full h-48 object-cover mb-4"
              height="200"
              src={img}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="text-sm text-gray-500 mb-2">09/22/2022</div>
            <h3 className="font-bold text-lg mb-4">
              My System for Stopping Anxiety Attacks: 5 steps, 20+ Skills for
              Panic Attacks
            </h3>
            <Link className="text-blue-600 hover:underline" href="#">
              Read more
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
