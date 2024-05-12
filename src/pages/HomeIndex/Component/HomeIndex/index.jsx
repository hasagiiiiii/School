import { Avatar } from "antd";
import React from "react";
import "./index.scss"
import Messages from "../../../../Component/Mesagess";
const HomeGuest = () => {
  return (
    <div className="mt-5 flex mb-[100px]">
      <div className="left-content mr-4 w-full lg:w-2/3 xl:w-2/3 bg-white rounded-xl p-6">
        <div className="flex justify-between">
          <h1 className="px-5 text-xl">Home</h1>
          <p>October,10</p>
        </div>

        <div className="ListCout flex items-center flex-wrap p-5 gap-4 w-full">
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">43</h3>
            <p className="title">Tổng Môn Học</p>
          </div>
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">23</h3>
            <p className="title">Đang hoạt động</p>
          </div>
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">10</h3>
            <p className="title">Bài tập</p>
          </div>
        </div>
        <div className="list-classSubject flex flex-wrap gap-5 p-5 items-center">
          <div className="ClassSubject text-center h-[150px] bg-purple-400 flex flex-col shadow-md w-[200px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Ai Tri Tue Nhan Tao</div>
            <div>Teacher</div>
            <input type="range" min={0} max={100} disabled  className=" mt-4"  name="" id="" />
            <div className="flex mt-5 justify-between">
              <div className="group-avatar">
                <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-purple-400 flex flex-col shadow-md w-[200px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Ai Tri Tue Nhan Tao</div>
            <div>Teacher</div>
            <input type="range" min={0} max={100} disabled  className=" mt-4"  name="" id="" />
            <div className="flex mt-5 justify-between">
              <div className="group-avatar">
                <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-purple-400 flex flex-col shadow-md w-[200px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Ai Tri Tue Nhan Tao</div>
            <div>Teacher</div>
            <input type="range" min={0} max={100} disabled  className=" mt-4"  name="" id="" />
            <div className="flex mt-5 justify-between">
              <div className="group-avatar">
                <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-purple-400 flex flex-col shadow-md w-[200px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Ai Tri Tue Nhan Tao</div>
            <div>Teacher</div>
            <input type="range" min={0} max={100} disabled  className=" mt-4"  name="" id="" />
            <div className="flex mt-5 justify-between">
              <div className="group-avatar">
                <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-gray-300 flex flex-col w-[250px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">PHP</div>
            <div>Teacher</div>
            <input type="range" min={0} max={100} disabled value={20}  name="" id="" />
            <div>
              <div className="group-avatar">
              <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-gray-300 flex flex-col w-[250px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Web Cơ Bản</div>
            <div>Teacher</div>
            <input type="range" disabled name="" id="" />
            <div>
              <div className="group-avatar">
              <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                  <Avatar>H</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-gray-300 flex flex-col w-[250px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Kiểm Thử</div>
            <div>Teacher</div>
            <input type="range" disabled name="" id="" />
            <div>
              <div className="group-avatar"></div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-gray-300 flex flex-col w-[250px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">Tán Người Yêu Cux</div>
            <div>Teacher</div>
            <input type="range" disabled name="" id="" />
            <div>
              <div className="group-avatar">
              <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
          <div className="ClassSubject text-center h-[150px] bg-gray-300 flex flex-col w-[250px] rounded-xl p-3 flex-shrink flex-grow">
            <div className="name">DỊch Thuật</div>
            <div>Teacher</div>
            <input type="range" disabled name="" id="" />
            <div>
              <div className="group-avatar">
              <Avatar.Group size="small" maxCount={2}>
                  <Avatar>T</Avatar>
                  <Avatar>M</Avatar>
                  <Avatar>D</Avatar>
                </Avatar.Group>
              </div>
              <button>heslo</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content hidden lg:block lg:w-1/3 h-max mx-10 right-0 bg-white rounded-xl p-6">
        <h1 className="text-xl">Cilent Messages</h1>
        <div className="Messages">
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
        
        </div>
      </div>
    </div>
  );
};

export default HomeGuest;
