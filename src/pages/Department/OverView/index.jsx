import { Avatar, Button, Col, Row } from "antd";
import React from "react";

import { FaBell } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bar } from "../ChartJs/Bar";
import { LineJS } from "../ChartJs/LineJS";
import { DoughnutJS } from "../ChartJs/DoughnutJS";



export const OverView = () => {
  const [valueInput, setValueInput] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnchangeInput = (value) => {
    setValueInput(value);
  };
  let date = new Date().toDateString().split(" ");
  let dayOfWeek = date.shift();
  let year = date.pop();





  return (
    <div className="w-[90%] mx-auto">
      <div className="relative flex items-center justify-start   h-14  mx-auto mt-5 mb-12 bg-white rounded-md shadow-lg xl:h-20 xl:justify-between  lg:h-16  ">
        <div className="flex items-center">
          <div className="">
            <label className="absolute left-8 top-[16px] xl:top-[30px]" htmlFor="search">
              <IoSearch size={20} />
            </label>
            <input
              type="text"
              name="search"
              className=" opacity-0 w-4 xl:w-44 xl:opacity-100 h-9 ml-16 focus:outline-none"
              placeholder="Search"
              onChange={(e) => handleOnchangeInput(e.target.value)}
              value={valueInput}
            />
          </div>
          <div className="mr-3 flex items-center">
            <div className="icons mx-2 cursor-pointer">
              <Button
                onClick={() => navigate("/")}
                className="flex items-center"
                size="large"
              >
                Website
              </Button>
            </div>
            <div>
              <Button  size="large">Reports</Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around  mr-6">
          <div className="px-4">{`${dayOfWeek} [${year}]`}</div>
          <div className="mx-7 relative cursor-pointer">
            <IoChatbubbleEllipsesSharp size={25} />
            <span className="absolute rounded-3xl bg-red-500 px-1 top-0 -right-2 text-xs text-center">
              0
            </span>
          </div>
          <div className="relative pr-6 cursor-pointer">
            <FaBell size={25} />
            <span className="absolute rounded-3xl bg-red-500 px-1 top-0 right-5 text-xs text-center">
              0
            </span>
          </div>
          <Avatar
          className=" cursor-pointer"
          >
            Trung
          </Avatar>
        </div>
      </div>
      
      <div className="  mx-auto mt-2">
        <h1 className="text-xl font-normal">Wellcome - School | Trung !</h1>
        <ul className="flex items-start justify-start h-[150px] gap-9 mt-10">
            <li className="box flex grow shrink w-1/4 flex-col pl-5 pt-5 bg-white h-full rounded-md">
                <h1 className="text-xl font-bold text-[#764af1]">Student</h1>
                <p className="py-3 opacity-70">Total Student</p>
                <span className="text-lg text-[#764af1]">1</span>
            </li>
            <li className="box flex grow shrink w-1/4 flex-col pl-5 pt-5 bg-white h-full rounded-md">
                <h1 className="text-xl font-bold text-[#764af1]">Teachers</h1>
                <p className="py-3 opacity-70">Total Teachers</p>
                <span className="text-lg text-[#764af1]">1</span>
            </li>
            <li className="box flex grow shrink w-1/4 flex-col pl-5 pt-5 bg-white h-full rounded-md">
                <h1 className="text-xl text-[#764af1] font-bold">Officer</h1>
                <p className="py-3 opacity-70">Total Officer</p>
                <span className="text-lg text-[#764af1]">1</span>
            </li>
            <li className="box flex grow shrink w-1/4 flex-col pl-5 pt-5 bg-white h-full rounded-md">
                <h1 className="text-xl font-bold text-[#764af1]">Staff</h1>
                <p className="py-3 opacity-70">Total Staff</p>
                <span className="text-lg text-[#764af1]">1</span>
            </li>
        </ul>

      </div>
      <div className="Chart mx-auto w-full mt-6  ">
        <Row className="h-[400px] flex justify-between flex-wrap xl:flex-nowrap">
            <Col className="bg-white w-[40%] " span={11} > <Bar/> </Col>
            <Col className="bg-white w-[40%]" span={12} > <DoughnutJS/> </Col>
        </Row>
        <Row>
            <Col className="bg-white mt-6" span={24}><LineJS/></Col>
        </Row>
      </div>
    </div>
  );
};
