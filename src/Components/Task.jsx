import React, { useState } from "react";
import 'C:/tasks/react/first_mission/src/styles/App.css';

const Task = ({code_right, code_wrong, task, right_answer}) => {

   let ans = 0;
   let div_1 = "";
   let div_2 = "";

   function green_one(event) {
        div_1 = event.target;
        div_1.classList.add('peaked');
        if (div_2 != "") {
            div_2.classList.remove('peaked')
        }
        else {console.log('nothing in div_2')}
        ans = 1;
        console.log(ans)
   }

   function green_two(event) {
        div_2 = event.target;
        div_2.classList.add('peaked');
        if (div_1 != "") {
            div_1.classList.remove('peaked')
        }
        else {console.log('nothing in div_1')}
        ans = 2;
        console.log(ans)
   }

   function check() {
        if (ans == right_answer) {
            alert('Вы правы!');
        }
        else alert('Неверно');
   }

    return(
        <div className="task">
            <div className="task_task">
                <p>
                    {
                        task.map((text) => {                                    
                            return (
                                <p>{text}</p>
                            );
                        })
                    }
                </p>
            </div>
            <div className="task_options">
                <div className="task_option_one">
                    <div className="task_option_one_code">
                        <center>
                            <h3>1</h3>
                        </center><br/>
                        <code>
                            {
                                code_right.map((text) => {                                    
                                    return (
                                        <p>{text}</p>
                                    );
                                })
                            }
                        </code>
                    </div>
                    <div className="task_option_div_button">
                        <button className="task_option_button" onClick={green_one}>Выбрать</button>
                    </div>
                </div>
                <div className="task_option_one">
                    <div className="task_option_two_code">
                        <center><h3>2</h3></center><br/>
                        <code>
                            {
                                code_wrong.map((text) => {                                    
                                    return (
                                        <p>{text}</p>
                                    );
                                })
                            }
                        </code>
                    </div>
                    <div className="task_option_div_button">
                        <button className="task_option_button" onClick={green_two}>Выбрать</button>
                    </div>
                </div>
            </div>
            <div className="task_input">
                <button className="task_input_button" onClick={check}>Проверить</button>
            </div>
        </div>
    );
};

export default Task;