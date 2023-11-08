import {HeartIcon,SaladIcon,SunIcon,IceCream2,MoonIcon,StarIcon,RabbitIcon,MagnetIcon,SatelliteIcon,HammerIcon,HandIcon,CakeIcon,CalculatorIcon,Clock1,CalendarDaysIcon,CloudDrizzleIcon} 
from "lucide-react";
const Taable =()=>{
    return(
        <div className="Ng">
        <table border={10}>
 <tr>
    <td><HeartIcon /></td>
    <td><SaladIcon/></td>
    <td><SunIcon/></td>
    <td><IceCream2/></td>
</tr>
<tr>
    <td><MoonIcon /></td>
    <td><StarIcon/></td>
    <td><RabbitIcon /></td>
    <td><MagnetIcon /></td>
</tr>
<tr>
<td><SatelliteIcon /></td>
<td><HammerIcon/></td>
<td><HandIcon /></td>
<td><CakeIcon/></td>
</tr>
<tr>
    <td><CalculatorIcon /></td>
    <td><Clock1 /></td>
    <td><CalendarDaysIcon /></td>
    <td><CloudDrizzleIcon /></td>
</tr>
        </table>
        </div>
    )
}
export default Taable;