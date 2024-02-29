import React, { useEffect, useState } from "react";
import axios from "axios";
import DonateBlood from "../../Component/DonateBlood/DonateBlood";

interface BloodRequest {
  patientName: string;
  bloodGroup: string;
  bloodBag: string;
  time: string;
  location: string;
  phone: string;
  _id: string;
}

const RequestBlood: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getbloodrequests")
      .then((response) => {
        const flattenedRequests: BloodRequest[] =
          response.data.bloodRequests.flat();
        setRequests(flattenedRequests);
        console.log(flattenedRequests);
      })
      .catch((error) => {
        console.error("Error fetching blood requests:", error);
      });
  }, []);

  // const handleDonateBlood = (phone: number) => {
  //   window.location.href = `tel:${phone}`;
  // };

  return (
    <div className="section-donate-blood my-10">
      <div className="space-y-4">
        <p className="bg-[#850000] text-3xl font-semibold text-white py-6 text-center">
          All Blood Request
        </p>
        <div className="grid md:grid-cols-2 gap-5 md:px-5 lg:px-10">
          {requests.map((bloodGroupRequests, index) =>
          <DonateBlood data={bloodGroupRequests} key={index}></DonateBlood>

          )}
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
