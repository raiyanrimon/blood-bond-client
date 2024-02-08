import campaignBg from "../../assets/campaign bg.jpg";
import img from "../../assets/donation img 3.png";
import group from "../../assets/cm1.jpg";
import group2 from "../../assets/cm2.jpg";
import group3 from "../../assets/doctor.jpg";
import CampaignCard from "../../Component/CampaignCard/CampaignCard";

const Campaign = () => {
  return (
    <div className="pt-16">
      <div
        className="relative bg-no-repeat bg-center	bg-cover py-4"
        style={{ backgroundImage: `url("${campaignBg}")` }}
      >
        <div className="absolute top-0 left-0 h-full w-full  bg-black bg-opacity-60 "></div>
        <div className="relative flex justify-evenly items-center">
          <div className="space-y-3 text-white max-w-2xl md:px-4 text-center md:text-left">
            <h5 className="font-medium text-md md:text-lg lg:text-2xl">
              One Donation Can Save Three Lives
            </h5>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
              Give <span className="text-[#ea062b]">Blood</span> Save Life
            </h1>
            <p className="text-sm md:text-md lg:text-lg">
              Join us in making a difference! Your blood donation can be the
              lifeline someone desperately needs. Be a hero, donate blood, and
              help us reach our goal.
            </p>
          </div>
          <div className="hidden md:flex">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      {/* ================ upcoming ================= */}
      <div className="py-10 ">
        <h1 className="text-3xl text-center font-bold pb-6">
          Upcoming Camping
        </h1>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <CampaignCard></CampaignCard>
          <div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
            <div className="relative">
              <img className="h-[210px] w-full" src={group2} alt="" />
              <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
                <h4 className="text-lg font-bold">20</h4>
                <h5>Feb</h5>
              </div>
            </div>
            <address>Motijhil, Dhaka</address>
            <h2 className="text-2xl font-bold text-[#ea062b]">
            Unity for Blood: Community Campaign
            </h2>
            <p>
              Blood group collection involves determining an individual's blood
              type to facilitate safe blood transfusions and medical procedures.
            </p>
          </div>
          <div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
            <div className="relative">
              <img className="h-[210px] w-full" src={group3} alt="" />
              <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
                <h4 className="text-lg font-bold">1</h4>
                <h5>Mar</h5>
              </div>
            </div>
            <address>Rajshahi Medical college, Rajshahi</address>
            <h2 className="text-2xl font-bold text-[#ea062b]">
            Hopeful Hearts Blood Drive
            </h2>
            <p>
              Blood group collection involves determining an individual's blood
              type to facilitate safe blood transfusions and medical procedures.
            </p>
          </div>

          <div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
            <div className="relative">
              <img className="h-[210px] w-full" src={group2} alt="" />
              <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
                <h4 className="text-lg font-bold">05</h4>
                <h5>Mar</h5>
              </div>
            </div>
            <address>Noakhali Medical College, Noakhali</address>
            <h2 className="text-2xl font-bold text-[#ea062b]">
            Save a Life: Mega Blood Donation Event
            </h2>
            <p>
              Blood group collection involves determining an individual's blood
              type to facilitate safe blood transfusions and medical procedures.
            </p>
          </div>
          <div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
            <div className="relative">
              <img className="h-[210px] w-full" src={group} alt="" />
              <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
                <h4 className="text-lg font-bold">12</h4>
                <h5>Mar</h5>
              </div>
            </div>
            <address>Pabna Govt. College, Pabna</address>
            <h2 className="text-2xl font-bold text-[#ea062b]">
            Youth for Blood: Student-Led Campaign
            </h2>
            <p>
              Blood group collection involves determining an individual's blood
              type to facilitate safe blood transfusions and medical procedures.
            </p>
          </div>
          <div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
            <div className="relative">
              <img className="h-[210px] w-full" src={group3} alt="" />
              <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
                <h4 className="text-lg font-bold">30</h4>
                <h5>Mar</h5>
              </div>
            </div>
            <address>Motijhil, Dhaka</address>
            <h2 className="text-2xl font-bold text-[#ea062b]">
              Blood Donation Camp
            </h2>
            <p>
              Blood group collection involves determining an individual's blood
              type to facilitate safe blood transfusions and medical procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;