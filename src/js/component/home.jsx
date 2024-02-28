import React, { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleTask = (e) => {
    if (e.key == "Enter") {
      setTasksList([
        ...tasksList,
        {
          label: task,
          done: false,
        },
      ]);
    }

    setTask(e.target.value);
  };

  return (
    <>
      <div className="bg-dark min-vh-100 d-flex justify-content-center ">
        <div className="bg-light w-50 mh-75 my-3">
          <div className="text-center mt-4">
            <h1 className="task-title">todos</h1>
          </div>
          <div className="task-body m-5 p-2">
            <div className="text-center">
              <input
                className="task-in border-0 form-control text-body-secondary"
                type="text"
                placeholder="Task"
                onKeyUp={(evt) => handleTask(evt)}
              />
            </div>

            {tasksList.map((toDo, index) => {
              return (
                <div className="task-out form-control border-0 text-body-secondary my-1" key={index}>
                  {toDo.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
