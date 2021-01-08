import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el,RolesButtonHandler}) =>{
  console.log(el);
 const currentDate = moment().format("DD MM YY");
   

   return (
			<tr>
				<td>{el.modulename}</td>
				<td>{el.name}</td>
				<td>
					{new Date(el.date).toLocaleDateString("sq-AL", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})}
				</td>
				<td>{el.time}</td>
				<td>{el.Time}</td>
				<td>
					<Link to="/LessonPage">
						<button
							type="button"
							class="nav_Home rolesBTN"
							onClick={() => RolesButtonHandler(el.id)}
						>
							View Vacancies
						</button>
					</Link>
				</td>
			</tr>
		);
}

 



export default LessonsTable;
