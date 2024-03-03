import React, { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");

  const [tasksList, setTasksList] = useState([]);

  const handleTask = (event) => {
    if (event.key == "Enter") {
      setTasksList([
        ...tasksList,
        {
          label: task,
          done: false,
        },
      ]);
    }

    setTask(event.target.value);
  };

  const deleteTask = (index) => {
    const newListTask = tasksList.filter((task, i) => i !== index);
    setTasksList(newListTask);
  };

  return (
    <>
      <div className="bg-dark min-vh-100 d-flex justify-content-center ">
        <div className="bg-light w-50 mh-75 my-3">
          <div className="text-center mt-4">
            <h1 className="task-title display-1">todos</h1>
          </div>

          <div className="task-body mx-5 mb-0 mt-5 p-2">
            <div className="text-center">
              <input
                className="task-in border-0 form-control px-3"
                type="text"
                placeholder=""
                onKeyUp={(evt) => handleTask(evt)}
              />
            </div>

            {tasksList.map((toDo, index) => {
              return (
                <div
                  className="task-body-out row mx-1 my-2 py-2"
                  key={index}
                >
                  <div className="task-out border-0 text-body-light col-md-10">
                    {toDo.label}
                  </div>
                  <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <button
                      className="delete btn rounded-circle text-light border-light"
                      onClick={() => deleteTask(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="efecto-pagina-2 mx-5"></div>
          <div className="efecto-pagina-3 mx-5"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
